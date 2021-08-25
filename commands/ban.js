const Discord = require('discord.js');

module.exports = {
    name: "ban",
    description: "Kicks a member from the server",

    async run (client, message, args) {

        if(!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send('Ne mozes da koristis to!')
        if(!message.guild.me.hasPermission("BAN_MEMBERS")) return message.channel.send('Nemam permisije da to uradim.')

        const member = message.mentions.members.first() || message.guild.members.cache.get(args[0]);

        if(!args[0]) return message.channel.send('Oznacite koga zelite da banate');

        if(!member) return message.channel.send('Ne mogu da najdem tog korisnika');
        if(!member.bannable) return message.channel.send('On ne moze da bude banan jer ima vece permisije od mene');

        if(member.id === message.author.id) return message.channel.send('Ne mozes banovati sam sebe!');

        let reason = args.slice(1).join(" ");

        if(reason === undefined) reason = 'Nenaglasen';

        member.ban(reason)
        .catch(err => {
            if(err) return message.channel.send('Nesto nije kako treba')
        })

        const banembed = new Discord.MessageEmbed()
        .setTitle('Member Banan')
        .setThumbnail(member.user.displayAvatarURL())
        .addField('Banan je:', member)
		.setColor('#02ed41')
        .addField('Banan od strane:', message.author)
        .addField('Razlog', reason)
        .setTimestamp()

        message.channel.send(banembed);


    }
}