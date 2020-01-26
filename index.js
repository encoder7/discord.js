const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Aktifim...${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content === 'Sa') {
    msg.reply('As');
  }
});

client.login('token');
