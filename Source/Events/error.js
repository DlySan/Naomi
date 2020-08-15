const Discord = require("discord.js");
const Imagens = require("../Utils/Imagens.json")

module.exports = async (Naomi, error) => {

    const Embed = new Discord.MessageEmbed()
    .setColor("RED")
    .addField("<:JS:738301302894886932> **Type of Error**", '```js\n'+ JSON.stringify(error) +'\n}```')
    .setTimestamp()
    .setFooter("Naomi Reports", Imagens.lupa)

    Naomi.channels.cache.get("738235079905509427").send(Embed)

    console.log(JSON.stringify(error));
};
