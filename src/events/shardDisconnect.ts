import { Event } from '@/types/Event'
import { logger } from '@/utils/logger'
import { ClientEvents } from 'discord.js'

export default {
  eventName: 'shardDisconnect',
  execute: async (client, id) => {
    logger.info(`Shard #${id} has disconnected.`)
  },
} as Event<keyof ClientEvents>
