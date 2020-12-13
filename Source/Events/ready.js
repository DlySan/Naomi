const Check = require('uptime-check');
const Color = require('colors');

module.exports = async (Client) => {

  console.log(Color.cyan("[C]: Client was connected to the discord's servers."))
    
  let status = [
    {name: 'SuperAnimes', type: 'STREAMING', url: 'https://twitch.tv/DlySan'},
    {name: 'SuperMangás', type: 'STREAMING', url: 'https://twitch.tv/DlySan'}
  ];
      
  //STREAMING = TRANSMITINDO
  //LISTENING = OUVINDO
  //PLAYING = JOGANDO
  //WATCHING = ASSISTINDO
  
  function setStatus() {
    let randomStatus = status[Math.floor(Math.random() * status.length)];
    Client.user.setActivity(randomStatus);
  }
    
  setStatus();
  setInterval(() => setStatus(), 20000);
 
  setInterval(() => {
    Check({
      url: 'https://startup-ss.glitch.me',
      keyword: 'Startup-SS',
      redirectsLimit: 0
    })
  }, 100000)
}