import { Command } from '@/types/Command'
import { ApplicationCommandType, Colors, time } from 'discord.js'

export default {
  data: {
    name: 'User Info',
    type: ApplicationCommandType.User,
  },
  execute: async (client, interaction) => {
    if (!interaction.guild) return

    const user = interaction.options.getUser('user')
    if (!user) return
    const member = interaction.guild.members.cache.get(user.id)
    if (!member) return

    await interaction.reply({
      embeds: [
        {
          title: user.username,
          thumbnail: {
            url: user.displayAvatarURL(),
          },
          color: Colors.Blue,
          fields: [
            {
              name: 'Tag',
              value: user.tag,
            },
            {
              name: 'ID',
              value: user.id,
            },
            {
              name: 'Created At',
              value: time(user.createdAt),
            },
            {
              name: 'Joined At',
              value: member.joinedAt ? time(member.joinedAt) : 'N/A',
            },
          ],
        },
      ],
    })
  },
} as Command
