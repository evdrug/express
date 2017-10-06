module.exports.getAbout = function(req, res, next) {
    res.render('pages/about', { title: 'Обо мне' });
}