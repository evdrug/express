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
    function roundDown(number, precision) {
        return Math.floor(number / precision) * precision;
    }
    const sendObj = { title: 'Обо мне' };
    http(requestOptions, function (error, response, body) {
        var objectSkill = {};
        var data ={objectSkill};
        for(var i = 0; i < body.skilles.length; i++) {
            var title = body.skilles[i].title;
            var proc = body.skilles[i].procent;
            proc = roundDown(proc,5);
            if(!objectSkill[body.skilles[i].type]){
                objectSkill[body.skilles[i].type] = {}
                objectSkill[body.skilles[i].type][title]=proc
            } else {
                objectSkill[body.skilles[i].type][title]=proc
            }
        }
        res.render('pages/about', Object.assign(sendObj, data));
        console.log(Object.assign(sendObj, data))
    })
}