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
    const id = req.params.id;

    let data = {
        image: req.body.image,
        description: req.body.description,
        tags: req.body.tags,
        link: req.body.link
    };

    const Model = mongoose.model('slider');

    Model
        .findByIdAndUpdate(id, {$set: data} )
        .then((item) => {
        if (!!item) {
        res
            .status(200)
            .json({status: 'Запись успешно обновлена'});
    } else {
        res
            .status(404)
            .json({status: 'Запись в БД не обнаружена'});
    }
})
.catch((err) => {
        res
        .status(404)
        .json({
            status: 'При обновлении записи произошла ошибка: ' + err
        });
});
}

module.exports.deleteSlider = function (req, res) {
    const id = req.params.id;
    const Model = mongoose.model('slider');

    Model
        .findByIdAndRemove(id)
        .then((item) => {
        if (!!item) {
        res.status(200).json({status: 'Работа успешно удалена'});
    } else {
        res.status(404).json({status: 'Работа в БД не обнаружена'});
    }
}, (err) => {
        res.status(404).json({
            status: 'При удалении работы произошла ошибка: ' + err
        });
    });

}