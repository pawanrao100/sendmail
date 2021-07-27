//The Nodemailer module makes it easy to send emails from your computer.
var nodemailer = require('nodemailer');
var transporter = new nodemailer.createTransport({
service: 'gmail',
auth :{
user: 'cmyuva12@gmail.com',
pass: 'mywbccjrixlbettz'
}
});

var mailOptions = {
    from : 'cmyuva12@gmail.com',
    to : 'lavish.softech@gmail.com',
    subject : 'send mail with node js',
    text : 'test mail from node js'
};

transporter.sendMail(mailOptions, function(err , info){
    if(err)
    {
        console.log(err)
    }else{
        console.log(`send mail ${info.response}`);
    }
});