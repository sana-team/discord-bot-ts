import { Event } from '@/types/Event'
import { logger } from '@/utils/logger'
import { ClientEvents } from 'discord.js'

export default {
  eventName: 'shardResume',
  execute: async (client, id) => {
    logger.info(`Shard #${id} has resumed.`)
  },
} as Event<keyof ClientEvents>
