const AfricasTalking = require('africastalking');

// TODO: Initialize Africa's Talking
const africastalking = AfricasTalking({
    apiKey: '38b0a72d6b24ae8db295c42a70649e279d9659d94c5767e8e589f4b172e4041d', 
    username: 'sandbox'
}); 



module.exports = async function sendSMS() {
    
    // TODO: Send message
    try {
       const result = await africastalking.SMS.send({
        to: '+254791496764', 
        message: 'Hello there. Welcome to Web3', 
        from: 'Web3Dengen'
        }); 
        console.log(result); 
    } catch (ex) {
        console.error(ex); 
    }
};