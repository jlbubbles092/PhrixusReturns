const Discord = require('discord.js');
const DBL = require('dblapi.js');
const express = require('express');
const http = require('http');
const ytdl = require('ytdl-core');
var fetch = require('node-fetch');

const app = express();
const server = http.createServer(app);
const dbl = new DBL(process.env.TOKEN, { webhookAuth: 'password', webhookServer: server });

dbl.webhook.on('ready', hook => {
  console.log(`Webhook running with path ${hook.path}`);
});
dbl.webhook.on('vote', vote => {
  console.log(`User with ID ${vote.user} just voted!`);
});

app.get('/', (req, res) => {
  // ...
});

server.listen(5000, () => {
  console.log('Listening');
});
// ---------------------------------
dbl.on('posted', () => {
  console.log('Server count posted!');
})

dbl.on('error', e => {
 console.log(`Oops! ${e}`);
})
dbl.getStats("711559158603972740").then(stats => {
    console.log(stats)
  var id = '711629939815874612'
  .getBot(id)
});

dbl.getBot("711629939815874612").then(bot => {
    console.log(bot.username)
});

// ---------------------------------
const client = new Discord.Client()

client.login(process.env.TOKEN)

//CUSTOM PLAYING STATUS (episode 9)
client.on("ready", () => {
    setInterval(() => {
        dbl.postStats(serverCount)
      var serverCount = client.guilds.size
        dbl.postStats(client.guilds.size, client.shards.id, client.shards.total);
    }, 1800000);
console.log('The bot has started!')
  var scount1 = client.guilds.size
  client.user.setActivity(`${scount1} servers type in my amazing commands!`,{ type: "WATCHING"})
});
client.on ('message', async message => {
  //botinfo
    if(message.content.startsWith('p!botinfo')) {
  const embed = {
	color: 0x0099ff,
	title: 'Bot Info',
	url: 'https://discord.com/api/oauth2/authorize?client_id=711247052193136660&permissions=8&scope=bot',
	author: {
    name: 'PhrixusReturns#5961',
   iconurl: 'https://cdn.discordapp.com/avatars/711629939815874612/e4ad06302e571eda60436a306a559777.png?size=2048',
  },
	description: 'Bot info for me, Phrixus!',
	thumbnail: {
    url: 'https://i.imgur.com/wSTFkRM.png'
  },
	fields: [
    {
 name: 'Owner and Versions:',
value: 'SkyReaper#3044\nDiscord.js Version: 11.5.1\nNode.js Version: 12.x',
    },
		{ 
      name: '\u200B', 
      value: '\u200B',
    },
		{ 
      name: 'About me, the bot.', 
      value: 'I am half source code and half self-made, I am powered by Glitch and UpTimeRobot.', inline: true 
    },
    
		{
      name: 'Dependencies:',
      value: '@discordjs/opus, dblapi.js, discord.js, discord.js-minesweeper, eris, express, ffmpeg, ffmpeg-binaries, ffmpeg-static, fs, genius-lyrics, opusscript, request, youtube-search, ytdl-core.', inline: true
    },
    ],
	
	image: {
   url: 'https://thumbs.dreamstime.com/z/giveaway-logo-template-social-media-post-website-banner-give-away-text-red-label-gift-box-background-vector-137275763.jpg',
  },
	timestamp: new Date(),
	footer:{
    text: 'Giveaways!',
    icon_url: 'https://thumbs.dreamstime.com/z/giveaway-logo-template-social-media-post-website-banner-give-away-text-red-label-gift-box-background-vector-137275763.jpg'
  },
  };
    message.channel.send({ embed: embed });
    var user = message.mentions.users.first();
    console.log(user);
  }
  //SWEAR WORD FILTER (episode 12)
const swearWords = ['swear1', 'swear2']
 if(swearWords.some(word => message.content.includes(word)) ) {
message.delete()

  message.member.send('That word is not allowed!')
  
}
  

  var prefix = 'p!'
  
//AFK (coming soon)
  
//SERVERS
if(message.content.startsWith(`${prefix}servers`)) {
  message.channel.send(client.user.guilds.map(v=>v.name).join('\n'));
}
//CREDITS COMMAND
  if(message.content.startsWith(`${prefix}credits`)) {
    message.channel.send('Credits:\nSource Code by: WHASonYT#0735\nDeveloper: jlbubbles0920#6174\n Inspiring Developer: SinglePringle#0001\n All people are here!')
  }
//HELP COMMAND
  if(message.content.startsWith(`${prefix}help`)) {
    message.channel.send('The commands are:\np!botinfo\np!avatar {For animated avatars}\np!mine\np!school {For owners only}\np!unschool {For owners only}\np!lyrics\np!invite\np!ping\np!credits\np!help\np!uptime\np!dm\np!say\np!stats\np!coinflip\np!die {For mods only}\np!beep\np!slowmode\np!subc\np!ban\np!kick\nThese are all the commands!\n> Powered by Glitch and using dblapi.js.')
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
  
  //Kick command
if (message.content.startsWith(`${prefix}kick`)) {
  // If the message content starts with "!kick"
  if (message.content.startsWith('p!kick')) {
    // Assuming we mention someone in the message, this will return the user
    // Read more about mentions over at https://discord.js.org/#/docs/main/master/class/MessageMentions
    const user = message.mentions.users.first();
    // If we have a user mentioned
    if (user) {
      // Now we get the member from the user
      const member = message.guild.member(user);
      // If the member is in the guild
      if (member) {
        /**
         * Kick the member
         * Make sure you run this on a member, not a user!
         * There are big differences between a user and a member
         */
        member
          .kick('Optional reason that will display in the audit logs')
          .then(() => {
            // We let the message author know we were able to kick the person
            message.reply(`Successfully kicked ${user.tag}`);
          })
          .catch(err => {
            // An error happened
            // This is generally due to the bot not being able to kick the member,
            // either due to missing permissions or role hierarchy
            message.reply('I was unable to kick the member');
            // Log the error
            console.error(err);
          });
      } else {
        // The mentioned user isn't in this guild
        message.reply("That user isn't in this guild!");
      }
      // Otherwise, if no user was mentioned
    } else {
      message.reply("You didn't mention the user to kick!");
    }
  }


}
  //Ban COMMAND
  if (message.content.startsWith(`${prefix}ban`)) {
  // If the message content starts with "!ban"
  if (message.content.startsWith('p!ban')) {
    const user = message.mentions.users.first();
    // If we have a user mentioned
    if (user) {
      // Now we get the member from the user
      const member = message.guild.member(user);
      // If the member is in the guild
      if (member) {
        /**
         * Ban the member
         * Make sure you run this on a member, not a user!
         * There are big differences between a user and a member
         */
        member
          .ban('Optional reason that will display in the audit logs')
          .then(() => {
            // We let the message author know we were able to kick the person
            message.reply(`Successfully banned ${user.tag}`);
          })
          .catch(err => {
            // An error happened
            // This is generally due to the bot not being able to kick the member,
            // either due to missing permissions or role hierarchy
            message.reply('I was unable to ban the member');
            // Log the error
            console.error(err);
          });
      } else {
        // The mentioned user isn't in this guild
        message.reply("That user isn't in this guild!");
      }
      // Otherwise, if no user was mentioned
    } else {
      message.reply("You didn't mention the user to ban!");
    }
  }


}
  //SCHOOL COMMAND
if(message.content.startsWith(`${prefix}school`)) {
  let owner = ['711439928239718422','699045551496364102']
  
  if(!owner.includes(message.author.id)) {
return true
} else {
  client.user.setActivity('the owner do his homework.',{ type: "WATCHING"})
  }
  message.channel.send("Jose is now doing homework. Wait for the p!unschool command.")
}
  //UNSCHOOL COMMAND
if(message.content.startsWith(`${prefix}unschool`)) {
  message.channel.send("Now you can contact him.")
  let owner = ['711439928239718422','699045551496364102']
  
  if(!owner.includes(message.author.id)) {
return true
  } else {
    process.exit()
  }
}
  //INVITE COMMAND
  
  if(message.content.startsWith(`${prefix}invite`)) {
    
    message.member.send('Use this link to invite Phrixus, our bot:\nhttps://discord.com/api/oauth2/authorize?client_id=711629939815874612&permissions=8&scope=bot')
  }
    //DM COMMAND (episode 2)
  
  if(message.content.startsWith(`${prefix}dm`)) {
    
    message.member.send('Hello fellow member of Giveaways!\nThis is a new world!')
  }

  //Avatar
  if(message.content.startsWith(`${prefix}avatar`)) {
    var text1 = message.content.split(' ').slice(1).join(' ')
    if(!text1) return message.channel.send('Which avatar?')
    var user = message.mentions.users.first();
    var avatar = user.avatarURL
    console.log(user);
  message.channel.send(avatar);
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
  
  //TESTING COMMAND (episode 7)
    if(message.content.startsWith(`${prefix}beep`)) {
      message.reply('baap')
    }
  
  //SLOWMODE COMMAND (episode 8)
   if(message.content.startsWith(`${prefix}slowmode`)) {
    var time = message.content.split(' ').slice(1).join(' ')
    if(!time) message.reply('Please enter a time in seconds!')
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
  
  //Lyrics
  if(message.content.startsWith(`${prefix}lyrics`)) {
    const genius = require("genius-lyrics")
    const G = new genius.Client(process.env.GENIUS)
    
    G.tracks.search(message.content.split(' ').slice(1).join(' '), {limit: 1})
    .then(results => {
  const song = results[0]  
  message.channel.send(`**${song.artist.name} - ${song.title}**\n<${song.url}>`) //song.lyrics
})
    .catch(err => message.reply(err))
  
  }
  //Mines command
  if(message.content.startsWith(`${prefix}mine`)) {
  const Minesweeper = require('discord.js-minesweeper');
    
    const minesweeper = new Minesweeper({
      returnType: 'emoji'
    });
    var mines = minesweeper.start()
    message.channel.send(mines)
  
  
  }
  
})