const Discord = require('discord.js')
const client = new Discord.Client()

client.login(process.env.TOKEN)


client.on('ready', () => {client.user.setActivity('a tv show...', {type: 'WATCHING'})})




client.on ('message', message => {

  var prefix = '++'

  if(message.content.startsWith(`${prefix}ping`)) {
message.channel.send('ponk')
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


  if(message.content.startsWith(`${prefix}send`)) {
    message.channel.send(`send to that channel!`)
    message.member.guild.channels.find(c => c.name === 'yt-vids').send('hello world! @everyone')
    
    
  }
let msg = message.content.toUpperCase();
if(msg.startsWith(prefix + 'SPOTIFY')){
var user = message.mentions.users.first() || message.author;
if(user.bot) return message.channel.send("bots cant listen music 😢");
if(user.presence.game.type == 2 && user.presence.game.name == 'Spotify') {
var trackImg = user.presence.game.assets.largeImageURL;
var trackUrl = `https://open.spotify.com/track/${user.presence.game.syncID}`
var trackName = user.presence.game.details;
var trackAlbum = user.presence.game.assets.largeText;
var trackAuthor = user.presence.game.state;
const embed = new Discord.RichEmbed()
.setAuthor('Spotify info')
.setThumbnail(trackImg)
.setDescription(` Track name : ${trackName}\n📀 Album : ${trackAlbum}\nAuthor(s) : ${trackAuthor}\n**Start listen at: ** ${user.presence.game.timestamps.start.getHours()}:${user.presence.game.timestamps.start.getMinutes()}:${user.presence.game.timestamps.start.getSeconds()}`
) .addField(`Listen this track : ${trackAuthor} — ${trackName}` )
              message.channel.send(embed)
};
}}

           )
