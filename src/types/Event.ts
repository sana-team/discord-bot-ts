import { ExtendedClient } from '@/structures/Client'
import { Awaitable, ClientEvents } from 'discord.js'

export interface Event<K extends keyof ClientEvents> {
  eventName: K
  once?: boolean
  execute: (
    client: ExtendedClient,
    ...arguments_: ClientEvents[K]
  ) => Awaitable<void>
}
