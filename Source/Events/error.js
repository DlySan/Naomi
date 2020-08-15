    const Discord = require("discord.js");

module.exports = async (Naomi, error) => {

    const Embed = new Discord.MessageEmbed()
    .setColor("RED")
    .addField("<:JS:738301302894886932> **Type of Error**", '```js\n'+ JSON.stringify(error) +'\n}```')
    .setTimestamp()
    .setFooter("Naomi Reports", "https://cdn.discordapp.com/attachments/727225886528766027/738302260752416818/lupa.webp")

    Naomi.channels.cache.get("738235079905509427").send(Embed)

    console.log(JSON.stringify(error));
};