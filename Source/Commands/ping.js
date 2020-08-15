const Discord = require("discord.js");

exports.run = async (Naomi, message) => {

    if (!message.guild.me.hasPermission("MANAGE_MESSAGES")) {
        return message.channel.send("<:error:738375981240156180> • <@"+ message.author +">, eu estou sem a permissão de ``GERENCIAR MENSAGENS``!")
    }

    const Embed = new Discord.MessageEmbed()
    .setAuthor(Naomi.user.username +" - Ping", Naomi.user.avatarURL())
    .setDescription("• **"+ message.author.username +"**, Se você deseja me ajudar, entre em meu [servidor](https://discord.gg/4N4sGU2)!\n📝 Prefix: ``"+ process.env.PREFIX +"``\n⠀⠀")
    .addField("<:systemFiles:738377053199663114> Informações", "⠀⠀\n<:connection:738375735550410793> • Gateway Ping `"+ Naomi.ws.ping +"`ms")
    .setColor("RED")
    .setTimestamp()

    message.channel.send(Embed)
}
