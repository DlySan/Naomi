/*===================================*/
/*              REQUIRES             */
/*===================================*/

const FileSystem = require("fs");
const express = require("express");
const Color = require('colors');
const app = express();
require('dotenv').config();

/*===================================*/
/*         CLIENT DEFINITIONS        */
/*===================================*/

const Discord = require("discord.js");
const Client = new Discord.Client({
    messageCacheMaxSize: 4048,
    messageCacheLifetime: 1680,
    messageSweepInterval: 2600,
    disableEveryone: true,
    fetchAllMembers: false,
    disabledEvents: ['typingStart', 'typingStop', 'guildMemberSpeaking']
});

if (process.env.DEBUG === 'TRUE') {
	console.warn(Color.red('[W]: Running Debug Module.'));
	Client.on('error', (e) => console.log(Color.red("[W]: "+ e +"")));
	Client.on('warn', (e) => console.log(Color.red("[W]: "+ e +"")));
	Client.on('debug', (e) => console.log(Color.red("[W]: "+ e +"")));
}

Client.login(process.env.TOKEN).then(
    console.log(Color.yellow('[S]: Client was Initiated.'))
)

/*===================================*/
/*         EVENTS DEFINITIONS        */
/*===================================*/

FileSystem.readdir("./Source/Events", (err, files) => {
    if (err) return console.error(err);
    files.forEach(file => {
        const eventos = require(`./Source/Events/${file}`);
        let eventName = file.split(".")[0];
        Client.on(eventName, eventos.bind(null, Client));
    });
    console.log(Color.green('[A]: The Events have started.'))
})

/*===================================*/
/*        COMMANDS DEFINITIONS       */
/*===================================*/

Client.Commands = new Map();

FileSystem.readdir("./Source/Commands", (err, files) => {
    if (err) return console.error(err);
    files.forEach(file => {
        if (!file.endsWith(".js")) return;
        let props = require(`./Source/Commands/${file}`);
        let commandName = file.split(".")[0];
        Client.Commands.set(commandName, props);
    });
    console.log(Color.green('[A]: The Commands have been started.'))
})

/*======================================*
*          PROCESS EVENT HANDLER        *
*=======================================*/

if (process.version.slice(1).split('.')[0] < 8) throw new Error(Color.red('[W]: É necessário o Node 8.0.0 ou superior. Atualize o Node no sistema.'));

/*======================================*
*              EXPRESS EVENT            *
*=======================================*/

app.get("/", function(request, response) {
    response.sendStatus(200)
});

app.listen(process.env.PORT);