const Discord = require('discord.js')
const client = new Discord.Client()

client.login(process.env.TOKEN)





client.on ('message', message => {

  var prefix = '++'

  if(message.content.startsWith(`${prefix}ping`)) {
const start = Date.now()
message.channel.send("Pinging...").then(message => {

const end = Date.now()
message.edit(`:ping_pong: Ponk! Took **${(end - start)}**ms!`)
})
  }
  if(message.content.startsWith(`${prefix}dm`)) {
    
    message.member.send('hello world!\nthis is a new line!')
  }

  if(message.content.startsWith(`${prefix}say`)) {
    var text = message.content.split(' ').slice(1).join(' ')
    if(!text) return message.reply('hey, say somethign *im giving up on u*')
   message.channel.send(text)
  }
  if(message.content.startsWith(`${prefix}stats`)) {
    
    var mcount = client.users.size
    var scount = client.guilds.size
    var tcount = client.channels.filter(c => c.type === 'text').size
    var vcount = client.channels.filter(c => c.type === 'voice').size
    message.reply(`${client.user.username} is on ${scount} servers with ${mcount} members, chatting on ${tcount} text channels, with ${vcount} voice channels!`)
  }

if(message.content.startsWith(`${prefix}coinflip`)) {

var choices = [
  "heads",
  "tails"
];

 var output = choices[Math.floor(Math.random()*choices.length)];
  
  message.channel.send(`You got **${output}!**`)
  
}
  if(message.content.startsWith(`${prefix}coinflip`)) {
var name = message.author.tag
var status = message.author.presence.status
var game = message.author.presence.name
message.reply(status)
    
  }
})
