const Discord = require('discord.js');

module.exports = {
    name: "kick",
    description: "Kicks a member from the server",

    async run (client, message, args) {
  if (!message.member.hasPermission('KICK_MEMBERS')) return message.reply('Nemas Dozvolu da kikujes ljude')
  
  let member = message.mentions.members.first()
  if (!member) return message.reply('Moras oznaciti koga hoces da Kikujes')
  let reason = args.slice(1).join(" ");
  if (!reason) reason = 'Nije dat razlog';
  if (!member.kickable) return message.reply('Ne mozes da kikujes njega')
  
  member.kick(reason).catch(err => console.log(err));
  
	}
}