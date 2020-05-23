const DBL = require('dblapi.js');
const express = require('express');
const http = require('http');

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
const Discord = require('discord.js')
const client = new Discord.Client()

client.login(process.env.TOKEN)

//CUSTOM PLAYING STATUS (episode 9)
client.on("ready", () => {
    setInterval(() => {
        dbl.postStats(serverCount)
      var serverCount = client.guilds.size
        dbl.postStats(client.guilds.size, client.shards.Id, client.shards.total);
    }, 1800000);
console.log('The bot has started!')
  var scount1 = client.guilds.size
  client.user.setActivity(`${scount1} servers type in my amazing commands!`,{ type: "WATCHING"})
});

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
    message.channel.send('Credits:\nSource Code by: WHASonYT#0735\nDeveloper: jlbubbles0920#6174\n Inspiring Developer: SinglePringle#0001\n All people are here!')
  }
//GiveRole
  if(message.content.startsWith(`{prefix}roleAdd`)) {
  const Discord = require("discord.js");

 module.exports.run = async (bot, message, args) => {

   //!addrole @andrew Dog Person
   if(!message.member.hasPermission("MANAGE_MEMBERS")) return message.reply("Sorry pal, you can't do that.");
   let rMember = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
   if(!rMember) return message.reply("Couldn't find that user, yo.");
   let role = args.join(" ").slice(22);
   if(!role) return message.reply("Specify a role!");
   let gRole = message.guild.roles.find(`name`, role);
   if(!gRole) return message.reply("Couldn't find that role.");

   if(rMember.roles.has(gRole.id)) return message.reply("They already have that role.");
   await(rMember.addRole(gRole.id));

   try{
     await rMember.send(`Congrats, you have been given the role ${gRole.name}`)
   }catch(e){
     console.log(e.stack);
     message.channel.send(`Congrats to <@${rMember.id}>, they have been given the role ${gRole.name}. We tried to DM them, but their DMs are locked.`)
   }
 }}

 module.exports.help = {
   name: "addrole"
 }
  //BotInfo
  if(message.content.startsWith(`${prefix}botinfo`)) {
 module.exports.run = async (bot, message, args) => {
     let bicon = bot.user.displayAvatarURL;
     let botembed = new Discord.RichEmbed()
     .setDescription("Bot Information")
     .setColor("#15f153")
     .setThumbnail(bicon)
     .addField("Bot Name", bot.user.username)
     .addField("Created On", bot.user.createdAt);

     message.channel.send(botembed);
 }

 module.exports.help = {
   name:"botinfo"
 }}
  //RemoveRole
  if(message.content.startsWith(`${prefix}roleRemove`)) {
  const Discord = require("discord.js");

 module.exports.run = async (bot, message, args) => {
   if(!message.member.hasPermission("MANAGE_MEMBERS")) return message.reply("Sorry pal, you can't do that.");
   let rMember = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
   if(!rMember) return message.reply("Couldn't find that user, yo.");
   let role = args.join(" ").slice(22);
   if(!role) return message.reply("Specify a role!");
   let gRole = message.guild.roles.find(`name`, role);
   if(!gRole) return message.reply("Couldn't find that role.");

   if(!rMember.roles.has(gRole.id)) return message.reply("They don't have that role.");
   await(rMember.removeRole(gRole.id));

   try{
     await rMember.send(`RIP, you lost the ${gRole.name} role.`)
   }catch(e){
     message.channel.send(`RIP to <@${rMember.id}>, We removed ${gRole.name} from them. We tried to DM them, but their DMs are locked.`)
   }
 }

 module.exports.help = {
   name: "removerole"
 }}
  //warnlevel
  if(message.content.startsWith(`${prefix}warnLevel`)) {
    const Discord = require("discord.js");
 const fs = require("fs");
 const ms = require("ms");
 let warns = JSON.parse(fs.readFileSync("./warnings.json", "utf8"));

 module.exports.run = async (bot, message, args) => {

   if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("You can't do that.");
   let wUser = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0])
   if(!wUser) return message.reply("Couldn't find them yo");
   let warnlevel = warns[wUser.id].warns;

   message.reply(`<@${wUser.id}> has ${warnlevel} warnings.`);

 }

 module.exports.help = {
   name: "warnlevel"
 }
  }
  //serverinfo
  if(message.content.startsWith(`${prefix}serverInfo`)) {
    const Discord = require("discord.js");

 module.exports.run = async (bot, message, args) => {
     let sicon = message.guild.iconURL;
     let serverembed = new Discord.RichEmbed()
     .setDescription("Server Information")
     .setColor("#15f153")
     .setThumbnail(sicon)
     .addField("Server Name", message.guild.name)
     .addField("Created On", message.guild.createdAt)
     .addField("You Joined", message.member.joinedAt)
     .addField("Total Members", message.guild.memberCount);

     message.channel.send(serverembed);
 }

 module.exports.help = {
   name:"serverinfo"
 }
  }
  //tempmute
  if(message.content.startsWith(`${prefix}tempmute`)) {
    const Discord = require("discord.js");
 const ms = require("ms");

 module.exports.run = async (bot, message, args) => {

   //!tempmute @user 1s/m/h/d

   let tomute = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
   if(!tomute) return message.reply("Couldn't find user.");
   if(tomute.hasPermission("MANAGE_MESSAGES")) return message.reply("Can't mute them!");
   let muterole = message.guild.roles.find(`name`, "muted");
   //start of create role
   if(!muterole){
     try{
       muterole = await message.guild.createRole({
         name: "muted",
         color: "#000000",
         permissions:[]
       })
       message.guild.channels.forEach(async (channel, id) => {
         await channel.overwritePermissions(muterole, {
           SEND_MESSAGES: false,
           ADD_REACTIONS: false
         });
       });
     }catch(e){
       console.log(e.stack);
     }
   }
   //end of create role
   let mutetime = args[1];
   if(!mutetime) return message.reply("You didn't specify a time!");

   await(tomute.addRole(muterole.id));
   message.reply(`<@${tomute.id}> has been muted for ${ms(ms(mutetime))}`);

   setTimeout(function(){
     tomute.removeRole(muterole.id);
     message.channel.send(`<@${tomute.id}> has been unmuted!`);
   }, ms(mutetime));


 //end of module
 }

 module.exports.help = {
   name: "tempmute"
 }
  }
//warn
  if(message.content.startsWith(`${prefix}warn`)) {
    const Discord = require("discord.js");
 const fs = require("fs");
 const ms = require("ms");
 let warns = JSON.parse(fs.readFileSync("./warnings.json", "utf8"));

 module.exports.run = async (bot, message, args) => {

   //!warn @daeshan <reason>
   if(!message.member.hasPermission("MANAGE_MEMBERS")) return message.reply("No can do pal!");
   let wUser = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0])
   if(!wUser) return message.reply("Couldn't find them yo");
   if(wUser.hasPermission("MANAGE_MESSAGES")) return message.reply("They waaaay too kewl");
   let reason = args.join(" ").slice(22);

   if(!warns[wUser.id]) warns[wUser.id] = {
     warns: 0
   };

   warns[wUser.id].warns++;

   fs.writeFile("./warnings.json", JSON.stringify(warns), (err) => {
     if (err) console.log(err)
   });

   let warnEmbed = new Discord.RichEmbed()
   .setDescription("Warns")
   .setAuthor(message.author.username)
   .setColor("#fc6400")
   .addField("Warned User", `<@${wUser.id}>`)
   .addField("Warned In", message.channel)
   .addField("Number of Warnings", warns[wUser.id].warns)
   .addField("Reason", reason);

   let warnchannel = message.guild.channels.find(`name`, "incidents");
   if(!warnchannel) return message.reply("Couldn't find channel");

   warnchannel.send(warnEmbed);

   if(warns[wUser.id].warns == 2){
     let muterole = message.guild.roles.find(`name`, "muted");
     if(!muterole) return message.reply("You should create that role dude.");

     let mutetime = "10s";
     await(wUser.addRole(muterole.id));
     message.channel.send(`<@${wUser.id}> has been temporarily muted`);

     setTimeout(function(){
       wUser.removeRole(muterole.id)
       message.reply(`<@${wUser.id}> has been unmuted.`)
     }, ms(mutetime))
   }
   if(warns[wUser.id].warns == 3){
     message.guild.member(wUser).ban(reason);
     message.reply(`<@${wUser.id}> has been banned.`)
   }

 }

 module.exports.help = {
   name: "warn"
 }
  }
//HELP COMMAND
  if(message.content.startsWith(`${prefix}help`)) {
    message.channel.send('The commands are:\np!serverInfo\np!tempmute\np!roleRemove\np!warnLevel\np!roleAdd\np!botinfo\np!school {For owners only}\np!unschool {For owners only}\np!lyrics\np!invite\np!ping\np!credits\np!help\np!uptime\np!dm\np!say\np!stats\np!coinflip\np!die {For mods only}\np!beep\np!slowmode\np!subc\np!ban\np!kick\nThese are all the commands!')
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
  let owner = ['711439928239718422']
  
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
  let owner = ['711439928239718422']
  
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

  //SAY COMMAND (episode 3)
  if(message.content.startsWith(`${prefix}say`)) {
    var text = message.content.split(' ').slice(1).join(' ')
    if(!text) return message.reply('Please give me some text to say! :)')
   message.channel.send(text)
  }
  //PREVENT p!say
      if(message.content.startsWith(`${prefix}say ${prefix}say`)) { 
        process.repeat()
        message.channel.send("I am sorry, I cannot repeat p! say.")
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


})