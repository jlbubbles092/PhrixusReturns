const Discord = require("discord.js");
const client = new Discord.Client();
const DBL = require("dblapi.js");
const dbl = new DBL(process.env.TOKEN, client);

dbl.on('posted', () => {
  console.log('Server count posted!');
})

dbl.on('error', e => {
 console.log(`Oops! ${e}`);
})

.postStats(serverCount, [shardId], [shardCount])

dbl.getStats("711559158603972740").then(stats => {
    console.log(stats)
  .getBot(id)
});

dbl.getBot("711629939815874612").then(bot => {
    console.log(bot.username)
});
