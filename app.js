const Discord = require('discord.js')
const client = new Discord.Client()
const dogFacts = require('dog-facts')
const catFacts = require('cat-facts')
client.login(process.env.TOKEN)

client.on('message', message => {
  var prefix = '++'
  if(message.content.toLowerCase() === `${prefix}ping`) {
    
    message.channel.send('ponk')
    
  }
  
  if(message.content.toLowerCase() === `${prefix}dogfact`) {
  var fact = dogFacts.random()
  message.channel.send(`dog fact: ${fact}`)
  }
  
  if(message.content
  
  
  
  
})
