const Discord = require('discord.js')
const client = new Discord.Client()

client.login(process.env.TOKEN)



client.on ('message', message => {
  var prefix = '++'

  if(message.content.startsWith(`${prefix}ping`)) {
message.channel.send('ponk')
  }
  if(message.content.startsWith(`${prefix}dm`)) {
    
    message.member.send('hello world!\nthis is a new line!')
  }

  })
