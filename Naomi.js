/*===================================*/
/*              REQUIRES             */
/*===================================*/

const FileSystem = require("fs");
const Color = require('colors');
const Enmap = require('enmap');
require('dotenv').config();

/*===================================*/
/*         CLIENT DEFINITIONS        */
/*===================================*/

const Discord = require("discord.js");
const Naomi = new Discord.Client({
    messageCacheMaxSize: 4048,
    messageCacheLifetime: 1680,
    messageSweepInterval: 2600,
    disableEveryone: true,
    fetchAllMembers: false,
    disabledEvents: ['typingStart', 'typingStop', 'guildMemberSpeaking']
});

if (process.env.DEBUG === 'TRUE') {
	console.warn(Color.red('[W]: Running Debug Module.'));
	Naomi.on('error', (e) => console.log(Color.red("[W]: "+ e +"")));
	Naomi.on('warn', (e) => console.log(Color.red("[W]: "+ e +"")));
	Naomi.on('debug', (e) => console.log(Color.red("[W]: "+ e +"")));
}

Naomi.login(process.env.TOKEN).then(
    console.log(Color.yellow('[S]: Naomi was Initiated.'))
)

/*===================================*/
/*         EVENTS DEFINITIONS        */
/*===================================*/

FileSystem.readdir("./Source/Events", (err, files) => {
    if (err) return console.error(err);
    files.forEach(file => {
        const eventos = require(`./Source/Events/${file}`);
        let eventName = file.split(".")[0];
        Naomi.on(eventName, eventos.bind(null, Naomi));
    });
    console.log(Color.green('[A]: The events have started.'))
})

setInterval(() => {
    delete require.cache[require.resolve('./Source/Events/message.js')];
    delete require.cache[require.resolve('./Source/Events/ready.js')];
    console.log(Color.brightMagenta('[W]: Event cache has been cleared.'))
}, 1000000);

/*===================================*/
/*        COMMANDS DEFINITIONS       */
/*===================================*/

Naomi.Commands = new Enmap;

FileSystem.readdir("./Source/Commands", (err, files) => {
    if (err) return console.error(err);
    files.forEach(file => {
        if (!file.endsWith(".js")) return;
        let props = require(`./Source/Commands/${file}`);
        let commandName = file.split(".")[0];
        Naomi.Commands.set(commandName, props);
    });
    console.log(Color.green('[A]: The commands have been started.'))
})

/*======================================*
*          PROCESS EVENT HANDLER        *
*=======================================*/

if (process.version.slice(1).split('.')[0] < 8) throw new Error(colors.red('[W]: É necessário o Node 8.0.0 ou superior. Atualize o Node no sistema.'));

/*process.on('unhandledRejection', function (err) {
    if (!process.mdebug) return;
    console.error(Color.red(err));
    process.exit(1);
})

process.on('uncaughtException', function (err) {
    console.error(Color.red(err));
    process.exit();
})*/
