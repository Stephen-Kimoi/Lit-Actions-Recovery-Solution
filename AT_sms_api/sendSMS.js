require("dotenv").config(); 

// Set your app credentials
const credentials = {
    apiKey: process.env.AT_API_KEY,
    username: 'Trial_1',
}

// Initialize the SDK
const AfricasTalking = require('africastalking')(credentials);

// Get the SMS service
const sms = AfricasTalking.SMS;

module.exports = function sendSMS() {
    const options = {
        // Set the numbers you want to send to in international format
        to: ['+254711308538'],
        // Set your message
        message: "Welcome to the next evolution of the web. Web3!!",
        // Set your shortCode or senderId
        // from: 'XXYYZZ'
    }

    // That’s it, hit send and we’ll take care of the rest
    sms.send(options)
        .then((response) => console.log(response))
        .catch((error) => console.log(error));
}