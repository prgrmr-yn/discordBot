const { Client, Events, GatewayIntentBits } = require('discord.js');
// const { token } = require('./config.json');
require('dotenv/config')

// Create a new client instance
const client = new Client({
  intents:[
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent
  ]
});

client.once(Events.ClientReady, c => {
	console.log(`Ready! Logged in as ${c.user.tag}`);
});

client.on('messageCreate', msg => {
  console.log(msg);
  if (msg.content.toLowerCase() === 'hi') {
    msg.reply('hello')
  }else if (msg.content === 'hell') {
    msg.reply('hi')
  }

  const m = msg.content.toLowerCase()
  switch (m) {
    case 'hello': msg.reply('Sup mate');  break;
    case 'ello': msg.reply('choot');  break;
    default:
      break;
  }
})

const prefix = '-';

// Log in to Discord with your client's token
client.login(process.env.TOKEN)
