const nodemailer = require('nodemailer');
// Configure and send Mail
module.exports = {

    notify : () => {

        let transporter = nodemailer.createTransport({
            service: 'outlook',
            auth: {
                user: 'aimamovic99@outlook.com',
                pass: '-----'
            }
        });
        
        var mailOptions = {
            from: 'Node Monitoring',
            to: 'aimamovic99@yahoo.com',
            subject: 'arminimamovic.com Warning!',
            html: "<h2><b>WARNING❗❗❗</b></h2> <br> <h3><b>https://arminimamovic.com/ is down!</b></h3>"
        };
        
        transporter.sendMail(mailOptions, function(error, info){
            if (error) {
                console.log(error);
            } else {
                console.log('Email sent: ' + info.response);
            }
        });
    }
}
