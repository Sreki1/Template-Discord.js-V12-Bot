const Discord = require('discord.js');

const { NovelCovid } = require('novelcovid');

const track = new NovelCovid()

module.exports = {
    name: "pravila1",
    description: "pravila1",

    async run (client, message, args) {



        const embed = new Discord.MessageEmbed()
        .setTitle(`POMOC`)
        .setDescription(`GeneZiZ-Ac3<3`)
		.setColor('#02ed41')
		.setTitle(`ROLEPLAY PRAVILA-KAZNE`)
        .addField('RDM', '100 Markera', true)
        .addField('MG', '150 Markera', true)
		.addField('VDM', '100 Markera', true)
		.addField('DFA', '200 Markera', true)
        .addField('LTA', '300 Markera', true)
		.addField('LTA', 'DRUGI PUT BAN', true)
		.addField('FAIL RP', '250 Markera', true)
        .addField('FEAR RP', '200 Markera', true)
		.addField('AA', 'BAN', true)
		.addField('AE', '200 Markera', true)
		.addField('NLR', '250 Markera', true)
        .setFooter(`${client.user.username}`, client.user.displayAvatarURL())

        message.channel.send(embed);

    }
}