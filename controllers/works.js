const nodemailer = require('nodemailer');
const config = require('../config.json');

module.exports.getWorks = function(req, res) {
    res.render('pages/works', {
        title: 'Мои работы' ,
        msg: reg.query.msg
    });
}

module.exports.sendEmail = function (req,res) {



    let mailOptions = {
        from: `"${req.body.name}" <${req.body.email}>`, // sender address
        to: config.mail.smtp.auth.user, // list of receivers
        subject: config.mail.subject, // Subject line
        text: req.body.text.trim().slice(0,500) + `<br> Отправлено с : ${req.body.email}`
    };
}