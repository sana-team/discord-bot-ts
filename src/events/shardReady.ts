import { Event } from '@/types/Event'
import { logger } from '@/utils/logger'
import { ClientEvents } from 'discord.js'

export default {
  eventName: 'shardReady',
  execute: async (client, id) => {
    logger.info(`Shard #${id} is ready.`)
  },
} as Event<keyof ClientEvents>
