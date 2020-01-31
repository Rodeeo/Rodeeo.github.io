
const SlackBot = require('slackbots');
const axios = require('axios');
const bot = new SlackBot({
  token:
    "xoxb-52546450567-800388896743-po2jZAUp4zUlZubI1lPHVOOj",
  name: "portabilly"
});

bot.on("start", () => {
  bot.postMessageToChannel("general", "Porting bot Activate");
});

bot.on("error", err => console.log(err));

// Message Handler
bot.on("message", data => {
  if (data.type != "message") {
    return;
  }
  handleMessage(data.text);
});

function handleMessage(message) {
  if (
    message.includes(" +18016029001") ||
    message.includes(" joke") ||
    message.includes(" another")
  ) {
    portability();
  }
}
//var Bandwidth = require("node-bandwidth");
//var client = new Bandwidth({
//	userId    : "5001811", // <-- note, this is not the same as the username you used to login to the portal
//	apiToken  : "rodeeo",
//	apiSecret : "RooRoo16"
//}); 
// Get Joke from the API
function portability() {
  axios.post("https://dashboard.bandwidth.com/api/accounts/{5001811}/importTnChecker").then(res => {
           const check = res.data.value.check;
    
            bot.postMessageToChannel('general', `${check}`);
        });
}
                                                                                           
// server.POST('route',callback);