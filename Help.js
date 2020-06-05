var prefix = 'p';
const discord = require('discord.js')
const client = new discord.Client()
const commando = require('discord.js-commando')
client.on('message', async message => {
const args = message.content.slice(prefix.length).split(' ');
  //bro you should use DISCORD JS COMMANDO, ITS SO MUCH EASIER, I COULD do it for free if you want :D, I have it, Nice :D
  //Do you want me to set it up here //ok
if(message.content.startsWith(`${prefix}send`)) {
   //greati recommend backing this up to github just incase i can do that if you want
  // OK! I CAN DO IT
    message.channels.get('')
  }
})