const mongoose = require('mongoose');

module.exports.getSlider = function (req, res) {
    const noSlider = [{
        image: 'bg-1',
        description: 'Дизайн интерьеров',
        tags: ['html', 'css'],
        link: "http://ya.ru"
    }]
    const skill = mongoose.model('slider');

    skill.find().then(items => {
        if(!items.length) {
        res.status(200).json({sliders: noSlider});
    } else {
        res.status(200).json({sliders: items});
    }
})
}

module.exports.createSlider = function (req, res) {
    const Model = mongoose.model('slider');

    let item = new Model({
        image: req.body.image,
        description: req.body.description,
        tags: req.body.tags,
        link: req.body.link
    });
    //сохраняем запись в базе
    item
        .save()
        .then(item => {
        return res.status(201)
            .json({status: 'Работа успешно добавлена'});
}, err => {
        //если есть ошибки, то получаем их список и так же передаем
        const error = Object
            .keys(err.errors)
            .map(key => err.errors[key].message)
    .join(', ');

        //обрабатываем  и отправляем
        res.status(404)
            .json({
                status: 'При добавление работы произошла ошибка: ' + error
            });
    });


}

module.exports.editSlider = function (req, res) {

}

module.exports.deleteSlider = function (req, res) {

}