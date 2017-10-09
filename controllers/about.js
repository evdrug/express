const http = require('request');

const apiOptions = {
    server: "http://localhost:3000"
}
module.exports.getAbout = function(req, res, next) {

    const pathApiSkill = '/api/skill';
    const requestOptions = {
        url: apiOptions.server + pathApiSkill,
        method: "GET",
        json: {}
    }

    const sendObj = { title: 'Обо мне' };
    http(requestOptions, function (error, response, body) {
        var objectSkill = [];

        for(var i = 0; i < body.skilles.length; i++) {
            objectSkill[body.skilles[i].type] = [`${body.skilles[i].title}: ${body.skilles[i].procent}`]
        }
        console.log(objectSkill)
        res.render('pages/about', Object.assign(sendObj, body));
    })
}