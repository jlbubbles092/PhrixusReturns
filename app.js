const Discord = require('discord.js')
const client = new Discord.Client()

client.login(process.env.TOKEN)

client.on("ready", () => {
console.log('Big boy bot has started!')
  client.user.setActivity('a TV show...', { type: "WATCHING"})
  
})


client.on ('message', message => {
const swearWords = ["swear1", "swear2"];
  if(swearWords.some(word => message.content.includes(word)) ) {
message.delete
    message.member.send('')
    
}
  

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

  if(message.content.startsWith(`${prefix}die`)) {
  let devs = ['339177677326123018']
  
  if(!devs.includes(message.author.id)) {
return true
} else {
process.exit()
}
  
  }
    if(message.content.startsWith(`${prefix}beep`)) {
      message.reply('baap')
    }
   if(message.content.startsWith(`${prefix}slowmode`)) {
    var time = message.content.split(' ').slice(1).join(' ')
    if(!time) return message.reply('Please enter a time in seconds!')
   message.channel.setRateLimitPerUser(time)
     message.channel.send('Set the slowmode!')
  }
  if(message.content.startsWith(`${prefix}subc`)) {
    
    var request = require('request')
    var id = 'UCA3QtGSDbBoS5ogCitr_KQw'
    var key='AIzaSyCLcINMUAL-BU0oZZO6b29m_vdKBb5SL94'
    
    var url = "https://www.googleapis.com/youtube/v3/channels?part=statistics&id=" + id + "&key=" + key;
    
    request({
      method: 'GET',
      url: url
    }, function (err, response, text) {
if(err) {
return
}
      
      var json = JSON.parse(text);
      var subc = json.items[0].statistics.subscriberCount
message.channel.send(`${subc} is how many subs that channel has!`)
      })
    
    
  }
  
  
  

})