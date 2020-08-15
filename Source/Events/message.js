const Database = require("quick.db");
const talkedRecently = new Set();

module.exports = async (Naomi, message, arg) => {

  var PREFIXO = Database.get("PREFIX["+ message.guild.id +"]");
  
  if (message.author.bot) return;

  if (message.channel.type === "dm") return;

  if (PREFIXO == null) PREFIXO = process.env.PREFIX;

  if (message.content.indexOf(PREFIXO) !== 0) return;
  
  const args = message.content
    .slice(PREFIXO.length)
    .trim()
    .split(/ +/g);
  const command = args.shift().toLowerCase() || args.shift().toUpperCase();

  const cmd = Naomi.Commands.get(command);
  if (!cmd) return message.channel.send('<:error:738375981240156180> • <@'+ message.author +'> Comando não encontrado!')

  if (talkedRecently.has(message.author.id)) {
    message.channel.send('<:error:738375981240156180> • <@'+ message.author.id +'> Tão rápido! Espere um momento, por favor!')
  } else {
    cmd.run(Naomi, message, args);
    
    talkedRecently.add(message.author.id);
    setTimeout(() => {
      talkedRecently.delete(message.author.id)
    }, 1500)
  }

};