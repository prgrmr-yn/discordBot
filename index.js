const { Client, Collection, Events, GatewayIntentBits } = require('discord.js');
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

const prefix = '-';

const path = require('node:path');
const fs = require('fs')
client.commands = new Collection();

const commandsPath = path.join(__dirname, 'commands');
const commandFiles = fs.readdirSync(commandsPath).filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
	const filePath = path.join(commandsPath, file);
	const command = require(filePath);
  console.log(command.name, command);
  client.commands.set(command.name, command);
}



client.once(Events.ClientReady, c => {
	console.log(`Ready! Logged in as ${c.user.tag}`);
});



client.on('messageCreate', msg => {

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

  if (!msg.content.startsWith(prefix) || msg.author.bot) return;

  const args = msg.content.slice(prefix.length).split(/ +/)
  const command = args.shift().toLowerCase()

  if (command === 'ping') {
    client.commands.get('ping').execute(msg, args)
  }else if (command === 'google') {
    msg.reply('https://www.youtube.com')
  }
})

// Log in to Discord with your client's token
client.login(process.env.TOKEN)
