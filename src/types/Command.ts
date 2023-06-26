import { ExtendedClient } from '@/structures/Client'
import {
  ApplicationCommandData,
  Awaitable,
  CommandInteraction,
} from 'discord.js'

export interface Command {
  data: ApplicationCommandData
  execute: (
    client: ExtendedClient,
    interaction: CommandInteraction,
  ) => Awaitable<void>
}
