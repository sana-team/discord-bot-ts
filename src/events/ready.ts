import { Event } from '@/types/Event'
import { logger } from '@/utils/logger'
import { ActivityType, ClientEvents } from 'discord.js'

export default {
  eventName: 'ready',
  once: true,
  execute: async (client) => {
    logger.info(`Logged in as ${client.user?.tag}!`)

    client.user?.setActivity({
      name: 'TypeScript',
      type: ActivityType.Playing,
    })
  },
} as Event<keyof ClientEvents>
