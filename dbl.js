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
  print("...")
});

server.listen(5000, () => {
  console.log('Listening');
});