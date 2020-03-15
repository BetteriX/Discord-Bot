exports.run = (client, message, args, ops) => {

    if(!message.member.voiceChannel) return message.channel.send('Csatlakoz egy csatornához.');

    if(!message.guild.me.voiceChannel) return message.channel.send('Csatlakoz egy csatornához.')

    if(message.guild.me.voiceChannelID !== message.member.voiceChannelID) return message.channel.send('Nem csatlakoztál egy csatornához.');

    message.guild.me.voiceChannel.leave();

    message.channel.send('Kilépés...');

}