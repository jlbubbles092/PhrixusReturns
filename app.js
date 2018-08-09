const Discord = require('discord.js')
const client = new Discord.Client()

client.login(process.env.TOKEN)



client.on('message', message => {
  var prefix = '++'

  if(message.content.toLowerCase === `${prefix}ping`) {
    var start = new Date().getTime()
    message.channel.send(`Pinging...`).then((message) => {
      var end = new Date().getTime()
message.edit(`Pong! ${end - start}ms`)
    })
  }
  

  
  
  
  
})
