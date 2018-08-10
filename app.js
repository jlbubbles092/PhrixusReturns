const Discord = require('discord.js')
const client = new Discord.Client()

client.login(process.env.TOKEN)



client.on('message', message => {
  var prefix = '++'

  if(message.content.startsWith(`${prefix}ping`)) {
message.channel.send('ponk')
  }
  
if(message.content.startsWith(`${prefix}embed`)) {
  
  message.channel.send({

"embed": {
"title": 'This is the title',
  "description": "[click here to go to google](https://google.com)",
  "color": 25087,
  "thumbnail": {
    "url": "https://images-ext-2.discordapp.net/external/RBT18TLXEYdf4oVH7s90fSoSkZRPSv0XaOy-HdXAUhc/%3F1533323209827/https/cdn.glitch.com/3b30e633-8529-4dbc-8df1-1e5bb488b543%252Fheads-penny.png?width=292&height=301"
  },
  "fields": [
    {
      "name": "Field #1",
       "value": "This is a field balahdbvfjrihv"
      
    },
    {
     "name": "field 2",
     "value": "this is a 2nd field"
    },
    ],
  
  "image": {
"url": "https://images-ext-2.discordapp.net/external/RBT18TLXEYdf4oVH7s90fSoSkZRPSv0XaOy-HdXAUhc/%3F1533323209827/https/cdn.glitch.com/3b30e633-8529-4dbc-8df1-1e5bb488b543%252Fheads-penny.png?width=292&height=301"
  },
  
  
  
  "footer": {
 "text": "Hello! im a footer wohoo"
  }
}
  })
  
  
  
  
  
}
  
})
