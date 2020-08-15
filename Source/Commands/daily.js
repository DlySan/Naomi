const Discord = require("discord.js");
const Database = require("quick.db");
const ms = require('parse-ms');
const Imagens = require("../Utils/imagens.json");

exports.run = async (Naomi, message) => {

    if (!message.guild.me.hasPermission("MANAGE_MESSAGES")) {
        return message.channel.send("<:error:738375981240156180> • <@"+ message.author +">, eu estou sem a permissão de ``GERENCIAR MENSAGENS``!")
    }

    const DailyTime = Database.get("D$["+ message.author.id +"]")

    const Embed = new Discord.MessageEmbed()
    .setAuthor(Naomi.user.username +" - Daily", Naomi.user.avatarURL())
    .setDescription("• **"+ message.author.username +"**, Se você deseja me ajudar, entre em meu [servidor](https://discord.gg/4N4sGU2)!\n📝 Prefix: ``"+ process.env.PREFIX +"``\n⠀⠀")
    .addField("<:settings:738376782784233562> Reações", "<:money:738376386963832843> • Daily Normal\n<:CLOVER:740927822016675900> • Daily por Sorte\n<:info:738376185066684457> • Informações\n\n<:uteis:738409815969366044> • Dica: Espere todos os emojis carregarem antes de clicar.")
    .setThumbnail(Imagens.Heart)
    .setColor("RED")
    .setTimestamp()

    message.channel.send(Embed).then(msg => {
        msg.react('738376386963832843').then(r1 => {
            msg.react('740927822016675900').then(r2 => {
                msg.react('738376185066684457').then(r3 => {
                })
            })
        })

        const cDN = (reaction, user) => reaction.emoji.name === 'money' && user.id === message.author.id && reaction.users.remove(message.author.id);
        const DN = msg.createReactionCollector(cDN, { time: 120000 });

        DN.on('collect', r => {
            const DLYN = new Discord.MessageEmbed()
            .setDescription("• **"+ message.author.username +"**, Se você deseja me ajudar, entre em meu [servidor](https://discord.gg/4N4sGU2)!\n📝 Prefix: ``"+ process.env.PREFIX +"``\n⠀⠀")
            .setThumbnail(Imagens.Heart)
            .setColor("RED")
            .setTimestamp()

            if (DailyTime !== undefined && 86400000 - (Date.now() - DailyTime) > 0) {
                var Time = ms(86400000 - (Date.now() - DailyTime));
                
                DLYN.setAuthor(Naomi.user.username +" - Cooldown", Naomi.user.avatarURL())
                DLYN.addField("<:timer:738377157243306015> • Bônus Diário", "<@"+ message.author +">, você só pode pegar o bônus diário daqui a ``"+ Time.hours +" Horas``.")
                
                msg.reactions.removeAll()
                msg.edit(DLYN)
            } else {
                DLYN.setAuthor(Naomi.user.username +" - Daily Normal", Naomi.user.avatarURL())
                DLYN.addField("<:money:738376386963832843> • Daily Normal", "<:COIN:740931987807797289> • <@"+ message.author +"> você ganhou ``500`` Lídios.")
                msg.reactions.removeAll()
                msg.edit(DLYN).then(
                    Database.add("$["+ message.author.id +"]", 500),
                    Database.set("D$["+ message.author.id +"]", Date.now())
                )
            }
        })

        const cDS = (reaction, user) => reaction.emoji.name === 'CLOVER' && user.id === message.author.id && reaction.users.remove(message.author.id);
        const DS = msg.createReactionCollector(cDS, { time: 120000 });

        DS.on('collect', r => {
            const Value = Math.floor(Math.random() * 650)

            const DLYN = new Discord.MessageEmbed()
            .setDescription("• **"+ message.author.username +"**, Se você deseja me ajudar, entre em meu [servidor](https://discord.gg/4N4sGU2)!\n📝 Prefix: ``"+ process.env.PREFIX +"``\n⠀⠀")
            .setThumbnail(Imagens.Heart)
            .setColor("RED")
            .setTimestamp()

            if (DailyTime !== undefined && 86400000 - (Date.now() - DailyTime) > 0) {
                var Time = ms(86400000 - (Date.now() - DailyTime));
                
                DLYN.setAuthor(Naomi.user.username +" - Cooldown", Naomi.user.avatarURL())
                DLYN.addField("<:timer:738377157243306015> • Bônus Diário", "<@"+ message.author +">, você só pode pegar o bônus diário daqui a ``"+ Time.hours +" Horas``.")
                
                msg.reactions.removeAll()
                msg.edit(DLYN)
            } else {
                DLYN.setAuthor(Naomi.user.username +" - Daily por Sorte", Naomi.user.avatarURL())
                DLYN.addField("<:CLOVER:740927822016675900> • Daily por Sorte", "<:COIN:740931987807797289> • <@"+ message.author +"> você ganhou ``"+ Value +"`` Lídios.")
                msg.reactions.removeAll()
                msg.edit(DLYN).then(
                    Database.add("$["+ message.author.id +"]", Value),
                    Database.set("D$["+ message.author.id +"]", Date.now())
                )
            }
        })

        const cIF = (reaction, user) => reaction.emoji.name === 'info' && user.id === message.author.id && reaction.users.remove(message.author.id);
        const IF = msg.createReactionCollector(cIF, { time: 120000 });

        IF.on('collect', r => {
            const EmIF = new Discord.MessageEmbed()
            .setAuthor(Naomi.user.username +" - Informações", Naomi.user.avatarURL())
            .setDescription("• **"+ message.author.username +"**, Se você deseja me ajudar, entre em meu [servidor](https://discord.gg/4N4sGU2)!\n📝 Prefix: ``"+ process.env.PREFIX +"``\n⠀⠀")
            .addField("<:info:738376185066684457> • Informações de Dailys", "⠀⠀\n<:money:738376386963832843> • Daily Normal: Você Ganhará ``500`` Lídios normalmente.\n<:CLOVER:740927822016675900> • Daily por Sorte: Você poderá arriscar o seu Daily e ganhar até ``650+`` Lídios.\n\n<:debug:738375799287316533> • Come Back")
            .setThumbnail(Imagens.Heart)
            .setColor("RED")
            .setTimestamp()

            msg.reactions.removeAll()
            msg.edit(EmIF).then(
                msg.react('738375799287316533')
            )
        })

        const cDBG = (reaction, user) => reaction.emoji.name === 'debug' && user.id === message.author.id && reaction.users.remove(message.author.id);
        const DBG = msg.createReactionCollector(cDBG, { time: 120000 });

        DBG.on('collect', r => {
            msg.reactions.cache.get('738375799287316533').remove().then(
                msg.edit(Embed).then(msg => {
                    msg.react('738376386963832843').then(r1 => {
                        msg.react('740927822016675900').then(r2 => {
                            msg.react('738376185066684457').then(r3 => {
                            })
                        })
                    })
                })
            )
        })
    })
}