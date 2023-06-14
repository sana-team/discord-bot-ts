import {
  ApplicationCommandData,
  Awaitable,
  Client,
  CommandInteraction,
} from 'discord.js'

export interface Command {
  data: ApplicationCommandData
  execute: (client: Client, interaction: CommandInteraction) => Awaitable<void>
}
