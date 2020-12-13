/* <!--  Requires  !--> */

const { MessageEmbed } = require("discord.js");
const Database = require("quick.db");

/* <!--  Exports  !--> */

exports.run = async (Client, message, args) => {

  try {
    if (args[0] == "aux") {
      if (message.member.roles.cache.has("737118581632008272")) {
        message.channel.send(Aux()).then(msg => {
          msg.react("738376886232547361").then(ms => {
            const filter = (reaction, user) => reaction.emoji.name == "shapphire" && user.id == message.author.id;
            const collector = msg.createReactionCollector(filter, { time: 150000 });
    
            collector.on("collect", ms => {
              message.channel.send(StartEvent()).then(ms => {
                Database.add("@["+ message.guild.id +"]", 1)
                TrueChannel()
              })
            })
          })
        })
      } else {
        message.channel.send(Reject())
      }
    } else if (args[0] == "mod") {
      if (message.member.roles.cache.has("473389376169312278")) {
        message.channel.send(Mod()).then(msg => {
          msg.react("738376886232547361")
        })
      } else {
        message.channel.send(Reject())
      }
    } else if (args[0] == "adm") {
      if (message.member.roles.cache.has("511610359422124056")) {
        message.channel.send(Adm()).then(msg => {
          msg.react("738376886232547361")
        })
      } else {
        message.channel.send(Reject())
      }
    }
  } catch (error) {
    switch (error.message) {
      case error.message:
        message.channel.send(Error())
      break;
    }
  }
  
  /* <!--  Completion  !--> */
  
  function Error() {
    const Embed = new MessageEmbed()
    .setDescription("<:no:759989005659406408> • **"+ message.author.username +"**, Algo deu errado na <@719135519929401374>! Contate nossa equipe de suporte para obter instruções se isso continuar acontecendo.")
    .setColor("d772ff")
    return Embed;
  }
  
  function Reject() {
    const Embed = new MessageEmbed()
    .setDescription("<:no:759989005659406408> • **"+ message.author.username +"**, você não possui o cargo necessário para executar esse comando.")
    .setColor("d772ff")
    return Embed;
  }

  function StartEvent() {
    const Embed = new MessageEmbed()
    .setDescription("<:yes:759993615082324028> • **"+ message.author.username +"**, você iniciou o evento.")
    .setColor("d772ff")
    return Embed;
  }

  function TrueChannel() {
    const Channel = message.guild.channels.cache.get("713571999741378560")
    Channel.updateOverwrite(Channel.guild.roles.everyone, { SEND_MESSAGES: true })
  }

  function FalseChannel() {
    const Channel = message.guild.channels.cache.get("713571999741378560")
    Channel.updateOverwrite(Channel.guild.roles.everyone, { SEND_MESSAGES: false })
  }
  
  function Aux() {
    const Embed = new MessageEmbed()
    .setAuthor("Painel - Auxiliar", Client.user.avatarURL())
    .setDescription("<:RamDisgusting:750035481399394395> • Olá **"+ message.author.username +"**, todos os meus comandos estão disponíveis abaixo, você também pode pedir ajuda no canal <#738637569193148467>.\n\n<:cfg:760008281384026123> • Prefix: ``"+ process.env.PREFIX +"``")
    .addField("⠀\n<:altpers:760190070023389294> • Módulos [1]", "<:shapphire:738376886232547361> • Iniciar Evento")
    .setThumbnail("https://i.imgur.com/1E5C70u.png")
    .setTimestamp()
    .setColor("d772ff")
    .setFooter(message.author.username, message.author.avatarURL())
    return Embed;
  }
  
  function Mod() {
    const Embed = new MessageEmbed()
    .setAuthor("Painel - Auxiliar", Client.user.avatarURL())
    .setDescription("<:RamDisgusting:750035481399394395> • Olá **"+ message.author.username +"**, todos os meus comandos estão disponíveis abaixo, você também pode pedir ajuda no canal <#738637569193148467>.\n\n<:cfg:760008281384026123> • Prefix: ``"+ process.env.PREFIX +"``")
    .addField("⠀\n<:altpers:760190070023389294> • Módulos [1]", "<:shapphire:738376886232547361> • Iniciar Evento")
    .setThumbnail("https://i.imgur.com/1E5C70u.png")
    .setTimestamp()
    .setColor("d772ff")
    .setFooter(message.author.username, message.author.avatarURL())
    return Embed;
  }
  
  function Adm() {
    const Embed = new MessageEmbed()
    .setAuthor("Painel - Auxiliar", Client.user.avatarURL())
    .setDescription("<:RamDisgusting:750035481399394395> • Olá **"+ message.author.username +"**, todos os meus comandos estão disponíveis abaixo, você também pode pedir ajuda no canal <#738637569193148467>.\n\n<:cfg:760008281384026123> • Prefix: ``"+ process.env.PREFIX +"``")
    .addField("⠀\n<:altpers:760190070023389294> • Módulos [1]", "<:shapphire:738376886232547361> • Iniciar Evento")
    .setThumbnail("https://i.imgur.com/1E5C70u.png")
    .setTimestamp()
    .setColor("d772ff")
    .setFooter(message.author.username, message.author.avatarURL())
    return Embed;
  }
  
}