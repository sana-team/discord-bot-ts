import { Event } from '@/types/Event'
import { logger } from '@/utils/logger'
import { ClientEvents, Interaction } from 'discord.js'

export default {
  eventName: 'interactionCreate',
  execute: async (client, interaction: Interaction) => {
    if (!interaction.isCommand()) return

    const command = client.commands.get(interaction.commandName)

    if (!command) {
      logger.error(`No command matching ${interaction.commandName} was found.`)
      return
    }

    try {
      await command.execute(client, interaction)
    } catch (error) {
      logger.error(`Error executing ${interaction.commandName}`)
      logger.error(error)
    }
  },
} as Event<keyof ClientEvents>
