const https = require('https');
const mailer = require('../services/mailer.js');

// Check if website is contactable
module.exports = {
    
    monitor : () => {
    
        https.get('https://arminimamovic.com/', (res) => {
            //console.log(res);
            mailer.notify();
        }).on('error', (e) => {
            //console.log(e);
            mailer.notify();
        })
    
    }

}