const http = require('request');

const apiOptions = {
    server: "http://localhost:3000"
}

module.exports.getBlog = function(req, res, next) {
    const pathApi = '/api/blog';
    const requestOptions = {
        url: apiOptions.server + pathApi,
        method: "GET",
        json: {}
    }

    const sendObj = { title: 'Блог' };
    http(requestOptions, function (error, response, body) {
        res.render('pages/blog', Object.assign(sendObj, body));
    })

}

