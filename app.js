const Discord = require('discord.js')
const client = new Discord.Client()

client.login(process.env.TOKEN)



client.on('message', message => {
  var prefix = '++'

  if(message.content.startsWith(`${prefix}ping`)) {
message.channel.send('ponk')
  }
  
if(message.content.startsWith(`${prefix}embed`)) {
  
  message.channel.send({

"embed": {
"title": 'This is the title',
  "description": "This is a description!",
  "color": 
}
  })
  
  
  
  
  
}
  
})
