const ytdl = require('ytdl-core');

exports.run = async (client, message, args, ops) => {

    if(!message.member.voiceChannel) return message.channel.send('Csatlakoz egy csatornához.');

    if(message.guild.me.voiceChannel) return message.channel.send('A bot már használatban van.');

    if(!args[0]) return message.channel.send('Nem jó a link.');

    let validate = await ytdl.validateURL(args[0]);

    if(!validate) return message.channel.send('Nem valós a link.');

    let info = await ytdl.getInfo(args[0]);

    let connection = await message.member.voiceChannel.join();

    let dispatcher = await connection.playStream(ytdl(args[0], { filter: 'audioonly'}));

    message.channel.send(`Now playing: ${info.title}`);

}