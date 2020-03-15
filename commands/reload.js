exports.run = (client, message, args, ops) => {
    if (message.author.id !== ops.ownerID) return message.channel.send('Csak a tulajdonos használhatja ezt a parancsot!');

    try {
        delete require.cache[require.resolve(`./${args[0]}.js`)];
    } catch (e) {
        return message.channel.send(`Nem lehet betölteni: ${args[0]}`);
    }

    message.channel.send(`Újratöltve: ${args[0]}`);

}