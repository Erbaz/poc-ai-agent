require("dotenv").config();
const ngrok = require("ngrok");

async function ngrokInit() {
  console.log("Initializing Ngrok tunnel...");

  // Initialize ngrok using auth token and hostname
  try {
    const url = await ngrok.connect({
      addr: 3001,
      proto: "http",
      authtoken: process.env.NGROK_TOKEN,
    });

    console.log(`Listening on url ${url}`);
    console.log("Ngrok tunnel initialized!");
  } catch (err) {
    console.log(err);
  }
}

module.exports = ngrokInit;
