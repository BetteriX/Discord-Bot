const Discord = require('discord.js');
const client = new Discord.Client();

const prefix = '|';
const ownerID = '385467516849356802';

client.on('message', message => {
    if (message.content === 'ping') {

      message.channel.send('pong');
    }
});

client.on('message', message => {
  if (message.content.startsWith('!play')) {
    message.reply('`Kérem írjon a #music-bot csatornába!`');
  }
});

client.on('message', message => {
    let args = message.content.slice(prefix.length).trim().split(' ');
    let cmd = args.shift().toLowerCase();

    if(message.author.bot) return;
    if(!message.content.startsWith(prefix)) return;

    try {

        delete require.cache[require.resolve(`./commands/${cmd}.js`)];

        let ops = {
            ownerID: ownerID
        }

        let commandFile = require(`./commands/${cmd}.js`);
        commandFile.run(client, message, args, ops);

    } catch (e) {
        console.log(e.stack);
    }

});

client.on('ready', () => {
    console.log('Készen áll!');
    client.user.setStatus('IN PROGRESS...')
})

client.login('NjQwMTU4NTgyNjc5MjczNTEy.XlFuHw.S0DS_S0OuRl86FsVQC44HqiOK6c');