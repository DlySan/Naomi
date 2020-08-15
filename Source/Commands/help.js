const Discord = require("discord.js");
const Imagens = require("../Utils/imagens.json")

exports.run = async (Naomi, message) => {

    if (!message.guild.me.hasPermission("MANAGE_MESSAGES")) {
        return message.channel.send("<:error:738375981240156180> • <@"+ message.author +">, eu estou sem a permissão de ``GERENCIAR MENSAGENS``!")
    }

    const Inicio = new Discord.MessageEmbed()
    .setAuthor(Naomi.user.username +" - Help", Naomi.user.avatarURL())
    .setDescription("• **"+ message.author.username +"**, Se você deseja me ajudar, entre em meu [servidor](https://discord.gg/4N4sGU2)!\n📝 Prefix: ``"+ process.env.PREFIX +"``\n⠀⠀")
    .addField("<:settings:738376782784233562> Reações", "<:peoples:738376564600864798> • Administrator Commands\n<:money:738376386963832843> • Economy Commands\n<:user_card:738377187316727839> • Profile Commands\n<:image:738376146659311636> • Fun Commands\n<:firewall:738376039234797578> • Naomi Creators\n\n<:uteis:738409815969366044> • Dica: Espere todos os emojis carregarem antes de clicar.")
    .setThumbnail(Imagens.Heart)
    .setColor("RED")
    .setTimestamp()

    message.channel.send(Inicio).then(msg => {
        msg.react('738376564600864798').then(r1 => {
            msg.react('738376386963832843').then(r2 => {
                msg.react('738377187316727839').then(r3 => {
                    msg.react('738376146659311636').then(r4 => {
                        msg.react('738376039234797578').then(r5 => {
                        })
                    })
                })
            })
        })

        const cADM = (reaction, user) => reaction.emoji.name === 'peoples' && user.id === message.author.id && reaction.users.remove(message.author.id);
        const ADM = msg.createReactionCollector(cADM, { time: 120000 });

        ADM.on('collect', r => {
            const ADM = new Discord.MessageEmbed()
            .setAuthor(Naomi.user.username +" - Administrator", Naomi.user.avatarURL())
            .setDescription("• **"+ message.author.username +"**, Se você deseja me ajudar, entre em meu [servidor](https://discord.gg/4N4sGU2)!\n📝 Prefix: ``"+ process.env.PREFIX +"``\n⠀⠀\n<:peoples:738376564600864798> • Commands\n``n!example`` | ``n!example``\n⠀⠀")
            .addField("<:settings:738376782784233562> Reações", "<:money:738376386963832843> • Economy Commands\n<:user_card:738377187316727839> • Profile Commands\n<:image:738376146659311636> • Fun Commands\n<:firewall:738376039234797578> • Naomi Creators\n<:debug:738375799287316533> • Come Back")
            .setThumbnail(Imagens.Heart)
            .setColor("RED")
            .setTimestamp()

            msg.edit(ADM).then(msg => {
                msg.react('738375799287316533')
            })
        })

        const cENMY = (reaction, user) => reaction.emoji.name === 'money' && user.id === message.author.id && reaction.users.remove(message.author.id);
        const ENMY = msg.createReactionCollector(cENMY, { time: 120000 });

        ENMY.on('collect', r => {
            const ENMY = new Discord.MessageEmbed()
            .setAuthor(Naomi.user.username +" - Economy", Naomi.user.avatarURL())
            .setDescription("• **"+ message.author.username +"**, Se você deseja me ajudar, entre em meu [servidor](https://discord.gg/4N4sGU2)!\n📝 Prefix: ``"+ process.env.PREFIX +"``\n⠀⠀\n<:money:738376386963832843> • Commands\n``n!example`` | ``n!example``\n⠀⠀")
            .addField("<:settings:738376782784233562> Reações", "<:peoples:738376564600864798> • Administrator Commands\n<:user_card:738377187316727839> • Profile Commands\n<:image:738376146659311636> • Fun Commands\n<:firewall:738376039234797578> • Naomi Creators\n<:debug:738375799287316533> • Come Back")
            .setThumbnail(Imagens.Heart)
            .setColor("RED")
            .setTimestamp()

            msg.edit(ENMY).then(msg => {
                msg.react('738375799287316533')
            })
        })

        const cPRO = (reaction, user) => reaction.emoji.name === 'user_card' && user.id === message.author.id && reaction.users.remove(message.author.id);
        const PRO = msg.createReactionCollector(cPRO, { time: 120000 });

        PRO.on('collect', r => {
            const PRO = new Discord.MessageEmbed()
            .setAuthor(Naomi.user.username +" - Profile", Naomi.user.avatarURL())
            .setDescription("• **"+ message.author.username +"**, Se você deseja me ajudar, entre em meu [servidor](https://discord.gg/4N4sGU2)!\n📝 Prefix: ``"+ process.env.PREFIX +"``\n⠀⠀\n<:user_card:738377187316727839> • Commands\n``n!example`` | ``n!example``\n⠀⠀")
            .addField("<:settings:738376782784233562> Reações", "<:peoples:738376564600864798> • Administrator Commands\n<:money:738376386963832843> • Economy Commands\n<:image:738376146659311636> • Fun Commands\n<:firewall:738376039234797578> • Naomi Creators\n<:debug:738375799287316533> • Come Back")
            .setThumbnail(Imagens.Heart)
            .setColor("RED")
            .setTimestamp()

            msg.edit(PRO).then(msg => {
                msg.react('738375799287316533')
            })
        })

        const cFUN = (reaction, user) => reaction.emoji.name === 'image' && user.id === message.author.id && reaction.users.remove(message.author.id);
        const FUN = msg.createReactionCollector(cFUN, { time: 120000 });

        FUN.on('collect', r => {
            const FUN = new Discord.MessageEmbed()
            .setAuthor(Naomi.user.username +" - Fun", Naomi.user.avatarURL())
            .setDescription("• **"+ message.author.username +"**, Se você deseja me ajudar, entre em meu [servidor](https://discord.gg/4N4sGU2)!\n📝 Prefix: ``"+ process.env.PREFIX +"``\n⠀⠀\n<:image:738376146659311636> • Commands\n``n!example`` | ``n!example``\n⠀⠀")
            .addField("<:settings:738376782784233562> Reações", "<:peoples:738376564600864798> • Administrator Commands\n<:money:738376386963832843> • Economy Commands\n<:user_card:738377187316727839> • Profile Commands\n<:firewall:738376039234797578> • Naomi Creators\n<:debug:738375799287316533> • Come Back")
            .setThumbnail(Imagens.Heart)
            .setColor("RED")
            .setTimestamp()

            msg.edit(FUN).then(msg => {
                msg.react('738375799287316533')
            })
        })

        const cNMC = (reaction, user) => reaction.emoji.name === 'firewall' && user.id === message.author.id && reaction.users.remove(message.author.id);
        const NMC = msg.createReactionCollector(cNMC, { time: 120000 });

        NMC.on('collect', r => {
            const NMC = new Discord.MessageEmbed()
            .setAuthor(Naomi.user.username +" - Naomi Creators", Naomi.user.avatarURL())
            .setDescription("• **"+ message.author.username +"**, Se você deseja me ajudar, entre em meu [servidor](https://discord.gg/4N4sGU2)!\n📝 Prefix: ``"+ process.env.PREFIX +"``\n⠀⠀\n<:firewall:738376039234797578> • Creators\n``DlySän#8746``\n⠀⠀")
            .addField("<:settings:738376782784233562> Reações", "<:peoples:738376564600864798> • Administrator Commands\n<:money:738376386963832843> • Economy Commands\n<:user_card:738377187316727839> • Profile Commands\n<:image:738376146659311636> • Fun Commands\n<:debug:738375799287316533> • Come Back")
            .setThumbnail(Imagens.Heart)
            .setColor("RED")
            .setTimestamp()

            msg.edit(NMC).then(msg => {
                msg.react('738375799287316533')
            })
        })

        const cDBG = (reaction, user) => reaction.emoji.name === 'debug' && user.id === message.author.id;
        const DBG = msg.createReactionCollector(cDBG, { time: 120000 });

        DBG.on('collect', r => {
            msg.reactions.cache.get('738375799287316533').remove().then(
                msg.edit(Inicio)
            )
        })
    })
}   