import interactionCreate from '@/events/interactionCreate'
import ready from '@/events/ready'
import shardDisconnect from '@/events/shardDisconnect'
import shardReady from '@/events/shardReady'
import shardReconnecting from '@/events/shardReconnecting'
import shardResume from '@/events/shardResume'
import { Event } from '@/types/Event'
import { ClientEvents } from 'discord.js'

export default [
  interactionCreate,
  ready,
  shardDisconnect,
  shardReady,
  shardReconnecting,
  shardResume,
] as Event<keyof ClientEvents>[]
