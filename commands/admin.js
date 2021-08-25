const Discord = require('discord.js');


const { NovelCovid } = require('novelcovid');

const track = new NovelCovid()


module.exports = {
    name: "admin",
    description: "admin komande",



   async run (client, message, args) {

    
        const corona = await track.all();


        const embed = new Discord.MessageEmbed()
        .setTitle('ADMIN KOMANDE')
		.setColor('#02ed41')
		.addField('!kick', 'Kick', true)
		.addField('!ban', 'Ban', true)
		.addField('!clear', 'Brisanje poruka', true)
        .setFooter(`${client.user.username}`, client.user.displayAvatarURL())

        message.channel.send(embed);

    }
}