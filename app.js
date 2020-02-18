const Discord = require('discord.js')
const client = new Discord.Client()

client.login(process.env.TOKEN)


client.on('ready', () => {client.user.setActivity('a tv show...', {type: 'WATCHING'})})




client.on ('message', message => {

  var prefix = '++'

  if(message.content.startsWith(`${prefix}ping`)) {
message.channel.send('ponk')
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

if(message.content.startsWith(`${prefix}level`)) {

const xp = require("/app/xp.json");
  
  if(!xp[message.author.id]) {
xp[message.author.id] = {
  xp: 0,
  level: 1
  
};
    
  }
  
  const curxp = xp[message.author.id].xp;
  const curlvl = xp[message.author.id].level
  const n
  
  
}
})
