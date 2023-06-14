import commandList from '@/commands'
import { config } from '@/config'
import eventList from '@/events'
import { Command } from '@/types/Command'
import { logger } from '@/utils/logger'
import {
  ApplicationCommandDataResolvable,
  Client,
  Collection,
  GatewayIntentBits,
  REST,
  Routes,
} from 'discord.js'

export class ExtendedClient extends Client {
  commands: Collection<string, Command> = new Collection()
  cooldowns: Collection<string, Collection<string, number>> = new Collection()
  isProduction = process.env.NODE_ENV === 'production'

  constructor() {
    super({
      intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildVoiceStates,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.DirectMessages,
      ],
    })

    process.on('uncaughtException', (error) => {
      logger.error(error)
    })
  }

  async start() {
    logger.debug(
      `Running in ${this.isProduction ? 'production' : 'development'} mode.`,
    )

    await this.commandHandler()
    await this.eventHandler()
    await this.registerCommands(this.commands.map((command) => command.data))

    this.login(config.TOKEN)
  }

  async commandHandler() {
    const commands: ApplicationCommandDataResolvable[] = []

    for (const command of commandList) {
      commands.push(command.data)
      this.commands.set(command.data.name, command)
    }
  }

  async eventHandler() {
    for (const event of eventList) {
      if (event.once) {
        this.once(event.eventName, (...arguments_) =>
          event.execute(this, ...arguments_),
        )
      } else {
        this.on(event.eventName, (...arguments_) =>
          event.execute(this, ...arguments_),
        )
      }
    }
  }

  async registerCommands(commands: ApplicationCommandDataResolvable[]) {
    const rest = new REST({ version: '10' }).setToken(config.TOKEN)

    try {
      logger.info(
        `Started refreshing ${commands.length} application (/) commands.`,
      )

      // If in production, register commands globally
      this.isProduction
        ? await rest.put(Routes.applicationCommands(config.CLIENT_ID), {
            body: commands,
          })
        : // Otherwise, register commands to a specific guild
          await rest.put(
            Routes.applicationGuildCommands(config.CLIENT_ID, config.GUILD_ID),
            { body: commands },
          )

      logger.info(
        `Successfully reloaded ${commands.length} application (/) commands.`,
      )
    } catch (error) {
      logger.error(error)
    }
  }
}
