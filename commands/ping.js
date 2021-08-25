const Discord = require('discord.js')

module.exports = {
    name: "ping",
    description: "test command",

    async run (client, message, args) {


        const ping = new Discord.MessageEmbed()
		.setColor('#02ed41')
        .setDescription(`🏓\`${Date.now() - message.createdTimestamp}\`ms`);


        message.channel.send(ping);
    }
}