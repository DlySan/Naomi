/* <!--  Requires  !--> */

const { MessageEmbed } = require("discord.js");
const Database = require("quick.db");

/* <!--  Exports  !--> */

exports.run = async (Client, message, args) => {
  
  function execute() {
    message.channel.send("(Events Module) OK - 1ms")
  }
  
  /* <!--  Eval Settings  !--> */
  
  const Embed = new MessageEmbed().setColor("d772ff")
  Embed.setAuthor("Eval", Client.user.avatarURL())
  Embed.setDescription("<:altpers:760190070023389294> • Olá **"+ message.author.username +"**, este é o meu módulo Eval, é expressamente recomendável utilizar as [Docs](https://discord.js.org/#/docs/main/stable/general/welcome) da [Discord.js](https://discord.js.org).\n⠀")
  Embed.setThumbnail("https://i.imgur.com/1E5C70u.png")
  Embed.setFooter("© Kenichi 2020", message.author.avatarURL())
  Embed.setTimestamp()
  
  /* <!--  Eval Command  !--> */
  if (message.author.id == "474735645277814795") {
    try {
      var evaled = eval(args.join(" "))
      if (typeof evaled !== "string") evaled = require("util").inspect(evaled);
      Embed.addField("<:yes:759993615082324028> • Output Code", "```js\n"+ clean(evaled) +"\n```")
      message.channel.send(Embed);
    } catch (error) {
      Embed.addField("<:no:759989005659406408> • Output Code", "```js\n"+ clean(evaled) +"\n```")
      message.channel.send(Embed);
    }
  } else {
    return;
  }
  
  /* <!--  Functions  !--> */
  function clean(text) {
    if (typeof(text) == "string") {
      return text.replace(/`/g, "`" + String.fromCharCode(8203)).replace(/@/g, "@" + String.fromCharCode(8203));
    } else {
      return text;
    }
  }
  /* <!--  End  !--> */
  
}