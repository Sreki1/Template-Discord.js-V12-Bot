module.exports = {
    name: "up",
    description: "Clears messages",

    async run (client, message, args) {
		

        if(!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send('Ne mozes da koristis to!')
        if(!message.guild.me.hasPermission("BAN_MEMBERS")) return message.channel.send('Nemam permisije da to uradim.')
			
		
        message.channel.send('SERVER JE UP!  @everyone')



    }
}