const Discord = require("discord.js");
const Database = require("quick.db");

module.exports = (Naomi, guild) => {
    Database.delete("PREFIX["+ guild.id +"]")
}