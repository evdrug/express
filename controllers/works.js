const nodemailer = require('nodemailer');
const config = require('../config.json');

module.exports.getWorks = function(req, res) {
    res.render('pages/works', {
        title: 'Мои работы' ,
        msg: req.query.msg
    });
}

module.exports.sendEmail = function (req,res) {
if (!req.body.name || !req.body.email || !reg.body.text) {
    return res.redirect('/works?msg=Все поля необходимо заполнить!');
}
console.log(config)

// const transporter = nodemailer.createTransport(config.mail.smtp);
//     let mailOptions = {
//         from: `"${req.body.name}" <${req.body.email}>`, // sender address
//         to: config.mail.smtp.auth.user, // list of receivers
//         subject: config.mail.subject, // Subject line
//         text: req.body.text.trim().slice(0,500) + `<br> Отправлено с : ${req.body.email}`
//     };
//     transporter.sendMail(mailOptions, function (error, info) {
//         if (error) {
//             return res.redirect('/works?msg=При отправке письма произошла ошибка!')
//         }
//         res.redirect('/works?msg=Письмо успешно отправвлено')
//     });
}