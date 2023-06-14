import { Command } from '@/types/Command'

export default {
  data: {
    name: 'ping',
    description: 'Ping!',
  },
  execute: async (client, interaction) => {
    const sent = await interaction.reply({
      content: 'Pinging...',
      fetchReply: true,
    })
    await interaction.editReply(
      `Roundtrip latency: ${
        sent.createdTimestamp - interaction.createdTimestamp
      }ms.`,
    )
  },
} as Command
