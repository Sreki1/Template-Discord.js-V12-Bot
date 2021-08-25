const Discord = require('discord.js');

module.exports = {
    name: "avatar",
    description: "avatar",

    async run (client, message, args) {

        let member = message.mentions.users.first() || message.author

        let avatar = member.displayAvatarURL({size: 1024})


        const embed = new Discord.MessageEmbed()
        .setTitle(`${member.username}'s avatar`)
        .setImage(avatar)
        .setColor('#02ed41')

        message.channel.send(embed);
    }
}