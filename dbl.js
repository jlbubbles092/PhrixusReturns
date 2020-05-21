const DBL = require('dblapi.js');
const dbl = new DBL(process.env.TOKEN, { webhookPort: 5000, webhookAuth: 'password' });
dbl.webhook.on('ready', hook => {
  console.log(`Webhook running at http://${hook.hostname}:${hook.port}${hook.path}`);
});
dbl.webhook.on('vote', vote => {
  console.log(`User with ID ${vote.user} just voted!`);
});