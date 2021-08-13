const Discord = require('discord.js');
const client = new Discord.Client();
client.login('ODc1ODE3MTU4NzYyOTU0ODAz.YRbCSg.xcggs31Z86xMTb-H9wEQTMI2J88');

client.on('ready', readyDiscord);

function readyDiscord() {
    console.log('ready');
}