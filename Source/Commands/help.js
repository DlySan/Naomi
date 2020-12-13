/* <!--  Requires  !--> */

const { MessageEmbed } = require("discord.js");
const Database = require("quick.db");

/* <!--  Exports  !--> */

exports.run = async (Client, message, args) => {

  /* <!-- Help Settings  !--> */
  
  const Embed = new MessageEmbed().setColor("d772ff")
  
  /* <!--  Help Creating !--> */
  
  try {
    Embed.setAuthor("Help - List", Client.user.avatarURL())
    Embed.setDescription("<:RamDisgusting:750035481399394395> • Olá **"+ message.author.username +"**, todos os meus comandos estão disponíveis abaixo, você também pode pedir ajuda no canal <#738637569193148467>.\n\n<:cfg:760008281384026123> • Prefix: ``"+ process.env.PREFIX +"``")
    Embed.addField("⠀\n<:altpers:760190070023389294> • Módulos [3]", "<:shapphire:738376886232547361> • Cargos Personalizados \n<:silver:738376928515326022> • Comandos de Música\n<:gold:738376113142759525> • Comandos dos Clãs")
    Embed.setThumbnail("https://i.imgur.com/1E5C70u.png")
    Embed.setTimestamp()
    Embed.setFooter(message.author.username, message.author.avatarURL())
    
    message.channel.send(Embed).then(msg => {
      msg.react("738376886232547361").then(r => {
        msg.react("738376928515326022").then(r2 => {
          msg.react("738376113142759525")
        })
      })
      
      /* <!--  Help Filters !--> */
      
      const ExternalFilter = (reaction, user) => reaction.emoji.name === 'shapphire' && user.id === message.author.id;
      const ExternalRole = msg.createReactionCollector(ExternalFilter, { time: 120000 });
      
      const ExternalMFilter = (reaction, user) => reaction.emoji.name === 'silver' && user.id === message.author.id;
      const ExternalMusic = msg.createReactionCollector(ExternalMFilter, { time: 120000 });
      
      const ExternalCFilter = (reaction, user) => reaction.emoji.name === 'gold' && user.id === message.author.id;
      const ExternalClans = msg.createReactionCollector(ExternalCFilter, { time: 120000 });

      /* <!-- Help Filter Settings !--> */

      const ExternalEmbed = new MessageEmbed().setColor("d772ff")

      /* <!-- Help Filter Creation !--> */
      
      ExternalRole.on("collect", r => {
        ExternalEmbed.setAuthor("Help", Client.user.avatarURL())
        ExternalEmbed.setDescription("<:RamDisgusting:750035481399394395> • Olá **"+ message.author.username +"**, todos os meus comandos sobre este módulo estão disponíveis abaixo, você também pode pedir ajuda no canal <#738637569193148467>.\n\n<:cfg:760008281384026123> • Prefix: ``"+ process.env.PREFIX +"``")
        ExternalEmbed.addField("⠀\n<:shapphire:738376886232547361> • Cargos Personalizados [2]", "<:peepolove:750028542783389837> • ``"+ process.env.PREFIX +"custom name``\n<:SayoriHeart:760080080973201418> • ``"+ process.env.PREFIX +"custom color``")
        ExternalEmbed.setThumbnail("https://i.imgur.com/1E5C70u.png")
        ExternalEmbed.setTimestamp()
        ExternalEmbed.setFooter(message.author.username, message.author.avatarURL())
        message.channel.send(ExternalEmbed).then(r => {msg.delete()})
      })
      
      ExternalMusic.on("collect", r => {
        ExternalEmbed.setAuthor("Help", Client.user.avatarURL())
        ExternalEmbed.setDescription("<:RamDisgusting:750035481399394395> • Olá **"+ message.author.username +"**, todos os meus comandos sobre este módulo estão disponíveis abaixo, você também pode pedir ajuda no canal <#738637569193148467>.\n\n<:cfg:760008281384026123> • Prefix: ``"+ process.env.PREFIX +"``")
        ExternalEmbed.addField("⠀\n<:silver:738376928515326022> • Comandos de Música [0]", "<:peepolove:750028542783389837> • Indisponível.")
        ExternalEmbed.setThumbnail("https://i.imgur.com/1E5C70u.png")
        ExternalEmbed.setTimestamp()
        ExternalEmbed.setFooter(message.author.username, message.author.avatarURL())
        message.channel.send(ExternalEmbed).then(r => {msg.delete()})
      })
      
      ExternalClans.on("collect", r => {
        ExternalEmbed.setAuthor("Help", Client.user.avatarURL())
        ExternalEmbed.setDescription("<:RamDisgusting:750035481399394395> • Olá **"+ message.author.username +"**, todos os meus comandos sobre este módulo estão disponíveis abaixo, você também pode pedir ajuda no canal <#738637569193148467>.\n\n<:cfg:760008281384026123> • Prefix: ``"+ process.env.PREFIX +"``")
        ExternalEmbed.addField("⠀\n<:gold:738376113142759525> • Comandos dos Clãs [0]", "<:peepolove:750028542783389837> • Indisponível.")
        ExternalEmbed.setThumbnail("https://i.imgur.com/1E5C70u.png")
        ExternalEmbed.setTimestamp()
        ExternalEmbed.setFooter(message.author.username, message.author.avatarURL())
        message.channel.send(ExternalEmbed).then(r => {msg.delete()})
      })
      
    })
  } catch (error) {
    switch (error.message) {
      case error.messae:
        Embed.setDescription("<:no:759989005659406408> • **"+ message.author.username +"**, Algo deu errado na <@719135519929401374>! Contate nossa equipe de suporte para obter instruções se isso continuar acontecendo.")
        message.channel.send(Embed)
      break;
    }
  }
}