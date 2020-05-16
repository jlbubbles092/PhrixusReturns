const Discord = require('discord.js')
const client = new Discord.Client()

client.login(process.env.TOKEN)

//CUSTOM PLAYING STATUS (episode 9)
client.on("ready", () => {
console.log('The bot has started!')
  client.user.setActivity('something...', { type: "WATCHING"})
  
})


client.on ('message', async message => {
  //SWEAR WORD FILTER (episode 12)
  
const swearWords = ['swear1', 'swear2']
 if(swearWords.some(word => message.content.includes(word)) ) {
message.delete()

  message.member.send('That word is not allowed!')
  
}
  

  var prefix = 'p!'
  
//PING COMMAND (episode 1 / episode 6)
  if(message.content.startsWith(`${prefix}ping`)) {
const start = Date.now()
message.channel.send("Pinging...").then(message => {

const end = Date.now()
message.edit(`:ping_pong: Ponk! Took **${(end - start)}**ms!`)
})
  }
//CREDITS COMMAND
  if(message.content.startsWith(`${prefix}credits`)) {
    message.channel.send('Credits:\nDeveloper: jlbubbles0920#3044\n Inspiring Developer: SinglePringle#0001\n All people are here!')
  }
//HELP COMMAND
  if(message.content.startsWith(`${prefix}help`)) {
    message.channel.send('The commands are:\np!invite\np!ping\np!credits\np!help\np!uptime\np!dm\np!dm\np!say\np!stats\np!coinflip\np!die\np!beep\np!slowmode\np!subc\nThese are all the commands!')
  }
 //UPTIME COMMAND
if(message.content.startsWith(`${prefix}uptime`)) {
  let totalSeconds = (client.uptime / 1000);
  let days = Math.floor(totalSeconds / 86400);
  let hours = Math.floor(totalSeconds / 3600);
  totalSeconds %= 3600;
  let minutes = Math.floor(totalSeconds / 60);
  let seconds = totalSeconds % 60;
  message.reply(`Uptime: ${days} day(s), ${hours} hour(s), ${minutes} minute(s), and ${seconds} second(s).`)
}
  //INVITE COMMAND
  
  if(message.content.startsWith(`${prefix}invite`)) {
    
    message.member.send('Use this link to invite Phrixus:\nhttps://discord.com/api/oauth2/authorize?client_id=711247052193136660&permissions=8&scope=bot')
  }
    //DM COMMAND (episode 2)
  
  if(message.content.startsWith(`${prefix}dm`)) {
    
    message.member.send('hello world!\nthis is a new line!')
  }

  //SAY COMMAND (episode 3)
  if(message.content.startsWith(`${prefix}say`)) {
    var text = message.content.split(' ').slice(1).join(' ')
    if(!text) return message.reply('Please give me some text to say! :)')
   message.channel.send(text)
  }
  
  //STATS COMMAND (episode 4)
  if(message.content.startsWith(`${prefix}stats`)) {
    
    var mcount = client.users.size
    var scount = client.guilds.size
    var tcount = client.channels.filter(c => c.type === 'text').size
    var vcount = client.channels.filter(c => c.type === 'voice').size
    message.reply(`${client.user.username} is on ${scount} servers with ${mcount} members, chatting on ${tcount} text channels, with ${vcount} voice channels!`)
  }

  //COINFLIP COMMAND (episode 5)
if(message.content.startsWith(`${prefix}coinflip`)) {

var choices = [
  "heads",
  "tails"
];

 var output = choices[Math.floor(Math.random()*choices.length)];
  
  message.channel.send(`You got **${output}!**`)
  
}

  //DIE COMMAND / RESTART COMMAND (episode 7)
  if(message.content.startsWith(`${prefix}die`)) {
  let devs = ['665651832118313007','699045551496364102']
  
  if(!devs.includes(message.author.id)) {
return true
} else {
process.exit()
}
  
  }
  
  //TESTING COMMAND (episode 7)
    if(message.content.startsWith(`${prefix}beep`)) {
      message.reply('baap')
    }
  
  //SLOWMODE COMMAND (episode 8)
   if(message.content.startsWith(`${prefix}slowmode`)) {
    var time = message.content.split(' ').slice(1).join(' ')
    if(!time) return message.reply('Please enter a time in seconds!')
   message.channel.setRateLimitPerUser(time)
     message.channel.send('Set the slowmode!')
  }
  
  //SUB COUNT COMMAND (episode 11)
  if(message.content.startsWith(`${prefix}subc`)) {
    
    var request = require('request')
    var id = 'UCY8L8VQGszBVLxdxjezu92g'
    var key= process.env.YT_KEY
    
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
      }) }
  

    
  
})