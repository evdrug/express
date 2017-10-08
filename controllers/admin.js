module.exports.getAdmin = function(req, res, next) {
    res.render('pages/admin', { title: 'Обо мне' });
}