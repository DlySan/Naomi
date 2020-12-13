/* <!--  Requires  !--> */

const { MessageEmbed } = require("discord.js");
const Database = require("quick.db");

/* <!--  Exports  !--> */

exports.run = async (Client, message, args) => {

  /* <!--  Role Settings  !--> */
  
  const TargetUser = message.mentions.users.first() || message.guild.members.cache.get(args[1])
  const ExternalRole = Database.get("$["+ message.author.id +"]")
  const FetchRole = message.guild.roles.cache.get(ExternalRole)
  const Embed = new MessageEmbed().setColor("d772ff")
    
  /* <!--  Role Creating  !--> */
  
  try {
    if (args[0] == "register") {
      if (!message.member.permissions.has("MANAGE_ROLES")) {
        Embed.setDescription("<:no:759989005659406408> • **"+ message.author.username +"**, você não tem permissão para executar esse comando.")
        message.channel.send(Embed)
      } else {
        if (!TargetUser) {
          Embed.setDescription("<:no:759989005659406408> • **"+ message.author.username +"**, você precisa mencionar um usuário.")
          message.channel.send(Embed)
        } else {
          message.guild.roles.create({data: { name: TargetUser.tag, position: Position()+1}}).then(ms => {
            const TargetRole = message.guild.roles.cache.find(role => role.name === TargetUser.tag)
            Embed.setDescription("<:yes:759993615082324028> • **"+ message.author.username+"**, você registrou o usuário (a) **"+ TargetUser.username +"**")
            message.channel.send(Embed).then(r => {
              Database.set("$["+TargetUser.id+"]", TargetRole.id)
              message.guild.members.cache.get(TargetUser.id).roles.add([TargetRole.id])
            })
          })
        }
      }
    } else if (args[0] == "name") {
      if (!message.member.permissions.has("USE_EXTERNAL_EMOJIS")) {
        Embed.setDescription("<:no:759989005659406408> • **"+ message.author.username +"**, você não tem permissão para executar esse comando.")
        message.channel.send(Embed)
      } else {
        if (!message.guild.roles.cache.get(ExternalRole)) {
          Embed.setDescription("<:no:759989005659406408> • **"+ message.author.username +"**, você não foi registrado no sistema.")
          message.channel.send(Embed)
        } else {
          if (!args[1]) {
            Embed.setDescription("<:no:759989005659406408> • **"+ message.author.username +"**, você não colocou um nome para seu cargo personalizado.")
            message.channel.send(Embed)
          } else {
            Embed.setDescription("<:yes:759993615082324028> • **"+ message.author.username +"**, o nome do seu cargo personalizado foi alterado para ``"+ args.join(" ").slice(5) +"``")
            message.channel.send(Embed).then(r => {
              FetchRole.setName(args.join(" ").slice(5))
            })
          }
        }
      }
    } else if (args[0] == "color") {
      if (!message.member.permissions.has("USE_EXTERNAL_EMOJIS")) {
        Embed.setDescription("<:no:759989005659406408> • **"+ message.author.username +"**, você não tem permissão para executar esse comando.")
        message.channel.send(Embed)
      } else {
        if (!message.guild.roles.cache.get(ExternalRole)) {
          Embed.setDescription("<:no:759989005659406408> • **"+ message.author.username +"**, você não foi registrado no sistema.")
          message.channel.send(Embed)
        } else {
          if (args[1] == "random") {
              Embed.setDescription("<:yes:759993615082324028> • **"+ message.author.username +"**, a cor do seu cargo personalizado foi alterado para uma cor aleatória.")
              message.channel.send(Embed).then(r => {
                FetchRole.setColor(getRandomColor())
              })
          } else {
            if (!args[1]) {
              Embed.setDescription("<:no:759989005659406408> • **"+ message.author.username +"**, você não digitou uma cor para seu cargo personalizado.")
              message.channel.send(Embed)
            } else {
              Embed.setDescription("<:yes:759993615082324028> • **"+ message.author.username +"**, a cor do seu cargo personalizado foi alterado.")
              message.channel.send(Embed).then(r => {
                FetchRole.setColor(args.join(" ").slice(6))
              })
            }
          }
        }
      }
    } else if (args[0] == "remove") {
      if (!message.member.permissions.has("MANAGE_ROLES")) {
        Embed.setDescription("<:no:759989005659406408> • **"+ message.author.username +"**, você não tem permissão para executar esse comando.")
        message.channel.send(Embed)
      } else {
        if (!TargetUser) {
          Embed.setDescription("<:no:759989005659406408> • **"+ message.author.username +"**, você precisa mencionar um usuário.")
          message.channel.send(Embed)
        } else {
          if (!FetchRole) {
            Embed.setDescription("<:no:759989005659406408> • **"+ message.author.username +"**, o cargo personalizado não foi encontrado em meu banco de dados deste usuário.")
            message.channel.send(Embed)
          } else {
            Embed.setDescription("<:yes:759993615082324028> • **"+ message.author.username +"**, o cargo personalizado do usuário foi excluído.")
            message.channel.send(Embed).then(r => {
              FetchRole.delete("Author: "+ message.author.tag +"")
            })
          }
        }
      }
    } else {
      Embed.setAuthor("Custom - Help", Client.user.avatarURL())
      Embed.setDescription("<:RamDisgusting:750035481399394395> • Olá **"+ message.author.username +"**, todos os meus comandos sobre este módulo estão disponíveis abaixo, você também pode pedir ajuda no canal <#738637569193148467>.\n\n<:cfg:760008281384026123> • Prefix: ``"+ process.env.PREFIX +"``")
      Embed.addField("<:OwOSmug:750030779991589035> • Custom Colors", "eg. ``"+ process.env.PREFIX +"custom color #FF0000``")
      Embed.addField("<:SayoriHeart:760080080973201418> • Random Color", "eg. ``"+ process.env.PREFIX +"custom color Random``")
      Embed.addField("<:KyaWoo:750035481605046426> • Custom Names", "eg. ``"+ process.env.PREFIX +"custom name Kenichi``")
      Embed.setThumbnail("https://i.imgur.com/1E5C70u.png")
      Embed.setTimestamp()
      message.channel.send(Embed)
    }
  } catch (error) {
    switch (error.message) {
      case error.message:
        Embed.setDescription("<:no:759989005659406408> • **"+ message.author.username +"**, Algo deu errado na <@719135519929401374>! Contate nossa equipe de suporte para obter instruções se isso continuar acontecendo.")
        message.channel.send(Embed)
      break;
    }
  }
  
  /* <!--  Completion  !--> */
  
  function getRandomColor() {
    var Letters = "0123456789ABCDEF";
    var Color = "#";

    for (var i = 0; i < 6; i++) {
      Color += Letters[Math.floor(Math.random() * 16)];
    }

    return Color;
  }
  
  function Position() {
    const Role = message.guild.roles.cache.get("476602380687769600")
    return Role.position;
  }
  
}