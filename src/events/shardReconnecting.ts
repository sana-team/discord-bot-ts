import { Event } from '@/types/Event'
import { logger } from '@/utils/logger'
import { ClientEvents } from 'discord.js'

export default {
  eventName: 'shardReconnecting',
  execute: async (client, id) => {
    logger.info(`Shard #${id} is reconnecting.`)
  },
} as Event<keyof ClientEvents>
