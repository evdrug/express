module.exports.getBlog = function(req, res, next) {
    res.render('pages/blog', { title: 'Блог' });
}