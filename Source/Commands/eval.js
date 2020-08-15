const Discord = require('discord.js');

exports.run = async(Naomi, message, args) => {

    if(message.author.id !== "474735645277814795") return;

    const Embed = new Discord.MessageEmbed()
    .setAuthor(Naomi.user.username +" - Eval", Naomi.user.avatarURL())
    .setDescription("• **"+ message.author.username +"**, Se você deseja me ajudar, entre em meu [servidor](https://discord.gg/4N4sGU2)!\n📝 Prefix: ``"+ process.env.PREFIX +"``\n⠀⠀")
    .setColor('RED')

    function clean(text) {
        if (typeof (text) === 'string') {
            return text.replace(/`/g, '`' + String.fromCharCode(8203)).replace(/@/g, '@' + String.fromCharCode(8203));
        } else {
            return text;
        }
    } try {
        let code = args.join(' ');
        let evaled = eval(code);
        if (typeof evaled !== 'string') {evaled = require('util').inspect(evaled);}

        Embed.addField("<:ok:738376486871891998> Código de Saída", "```js\n"+ clean(evaled) +"\n```")
        message.channel.send(Embed);
    }
    catch (err) {
        Embed.addField("<:error:738375981240156180> Código de Saída", "```js\n"+ clean(err) +"\n```")
        message.channel.send(Embed);                 
    }
}