const Color = require('colors');

module.exports = async (Naomi) => {

  console.log(Color.cyan("[C]: Naomi was connected to the discord's servers."))
    
  let status = [
    {name: ''+ Naomi.users.cache.size +' Usuários', type: 'STREAMING', url: 'https://twitch.tv/DlySan'},
    {name: ''+ Naomi.guilds.cache.size +' Servidores', type: 'STREAMING', url: 'https://twitch.tv/DlySan'}
  ];
      
  //STREAMING = TRANSMITINDO
  //LISTENING = OUVINDO
  //PLAYING = JOGANDO
  //WATCHING = ASSISTINDO
  
  function setStatus() {
    let randomStatus = status[Math.floor(Math.random() * status.length)];
    Naomi.user.setActivity(randomStatus);
  }
    
  setStatus();
  setInterval(() => setStatus(), 20000);
  
}
