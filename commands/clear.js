module.exports = {
    name: "clear",
    description: "Clears messages",

    async run (client, message, args) {
		
		if(!message.guild.me.hasPermission("BAN_MEMBERS")) return message.channel.send('Nemam permisije da to uradim.')
		if(message.member.hasPermission("ADMINISTRATOR")) {


        const amount = args.join(" ");

        if(!amount) return message.reply('Moras oznaciti koliko poruka koces da obrises')

        if(amount > 100) return message.reply(`ne mozes da brises vise od 100 poruka odjednom`)

        if(amount < 1) return message.reply(`you need to delete at least one message`)

        await message.channel.messages.fetch({limit: amount}).then(messages => {
            message.channel.bulkDelete(messages
    )});


    message.channel.send('Obrisano!')
		}

    }
}