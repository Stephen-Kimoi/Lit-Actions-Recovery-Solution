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

module.exports = function generateOTP(phoneNumber) {
    const otp = Math.floor(1000 + Math.random() * 900000).toString(); 
    const message = `Your verification code is ${otp}. Enter this code in PKP to complete your login.`; 

    const options = {
        to: [phoneNumber], 
        message: message
    }

    return sms.send(options)
        .then((response) => {
            console.log(response)
        })
        .catch((error) => {
            console.error(error)
            return null; 
        })
}