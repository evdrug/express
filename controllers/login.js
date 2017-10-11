module.exports.getIndex = function (req, res) {
    if (req.session.isAdmin) {
        return res.redirect('pages/admin');
    }
    res.render('pages/index', { title: 'Портфолио' });
}
