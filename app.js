const Discord = require('discord.js')
const client = new Discord.Client()

client.login(process.env.TOKEN)



client.on('message', message => {
  var prefix = '++'

  if(message.content.toLowerCase === `${prefix}ping`) {
message.channel.send('ponk')
  }
  

  if(message.content.toLowerCase === `${prefix}embed`) {
    
    
    const embed = Discord.MessageEmbed()
    .setTitle('This is an embed!')
    .setDescription('This is a description of an embed!')
    .setFooter('This is the footer of the embed!')
    
    message.channel.send(embed)
  }
  
  
  
})
