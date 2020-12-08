const Discord = require("discord.js");
const config = require("./config.json");
const request = require('request');
const steamAPIKey = config.steamAPIKey;

const client = new Discord.Client();
client.login(config.BOT_TOKEN);

const prefix = "[";

client.on("message", function(message) {
    if(analyzeReplies(message)){
        action = message.content.toLowerCase();

        if(action === "[getgames")
        {
            var gamesCount = getOwnedGames();
        }
}
    
});

//Helper Methods
function analyzeReplies(message){
    if (message.author.bot)
    {
        return false;
    }
    else if (!message.content.startsWith(prefix))
    {
        return false;
    }
    else{
        return true;
    }
}

//Http Requets
async function getOwnedGames() {
    await request('http://api.steampowered.com/IPlayerService/GetOwnedGames/v0001/?key=' + steamAPIKey + '&steamid=76561197960434622&format=json', { json: true }, (err, res, body) => {
    if (err) { return err; }
        return body.response.game_count;
    });
}

function successCallback(result) {
    message.channel.send(result);
  }

function failureCallback(error) {
    console.error(error);
  }

