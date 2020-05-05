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
  

  var prefix = '++'
  
  if(message.content.startsWith(`${prefix}st`)) {
   var search = require('youtube-search');
 
var opts = {
  maxResults: 1,
  key: 'AIzaSyDkiPqMjIWOExYjboDpVNYgNqLrJvbX8IU'
};
 
search('hello', opts, function(err, results) {
  if(err) return console.log(err);
 
  console.log(results.items.id.videoId);
}); 
  }
  
  
  if(message.content.startsWith(`${prefix}stop`)) { 
  
  if (message.member.voiceChannel) { 
   message.member.voiceChannel.leave();
    message.reply('I left the voice channel!')
  } else {
message.reply('Make sure you\'re in a voice channel!')
}
  
  }
    if(message.content.startsWith(`${prefix}play`)) {
      
      
      
     const ytdl = require('ytdl-core');
 if (message.member.voiceChannel) {
      const connection = await message.member.voiceChannel.join();
   const dispatcher = connection.playStream(ytdl('https://www.youtube.com/watch?v=ZlAU_w7-Xp8', { filter: 'audioonly' }));
    } else {
      message.reply('You need to join a voice channel first!');
    }
    }
//PING COMMAND (episode 1 / episode 6)
  if(message.content.startsWith(`${prefix}ping`)) {
const start = Date.now()
message.channel.send("Pinging...").then(message => {

const end = Date.now()
message.edit(`:ping_pong: Ponk! Took **${(end - start)}**ms!`)
})
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
  let devs = ['339177677326123018']
  
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
    var id = 'UCA3QtGSDbBoS5ogCitr_KQw'
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