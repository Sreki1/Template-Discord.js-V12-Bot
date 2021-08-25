const Discord = require('discord.js');

const { NovelCovid } = require('novelcovid');

const track = new NovelCovid()

module.exports = {
    name: "help",
    description: "help",

    async run (client, message, args) {

    
        const corona = await track.all();


        const embed = new Discord.MessageEmbed()
        .setTitle(`POMOC`)
        .setDescription(`NinjaRolePlay<3`)
		.setColor('#02ed41')
        .addField('!ping', 'Ping,Latency,Ms', true)
        .addField('!avatar', 'Profila Slika', true)
		.addField('!admin', 'Admin Komande', true)
        .setFooter(`${client.user.username}`, client.user.displayAvatarURL())

        message.channel.send(embed);

    }
}