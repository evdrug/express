const mongoose = require('mongoose');

module.exports.getSkilles = function (req, res) {
    const skillText = [{
        "error": "Не удалось найти знания."
    }]
    const skill = mongoose.model('skill');

    skill.find().then(items => {
        if(!items.length) {
        res.status(200).json({skilles: skillText});
        } else {
            res.status(200).json({skilles: items});
        }
    })
}

module.exports.createSkilles = function (req, res) {

    const Model = mongoose.model('skill');

    let item = new Model({
        type: req.body.type,
        title: req.body.title,
        procent: req.body.procent
    });
    //сохраняем запись в базе
    item
        .save()
        .then(item => {
        return res.status(201)
            .json({status: 'Знания успешно добавлены'});
    }, err => {
            //если есть ошибки, то получаем их список и так же передаем
            const error = Object
                .keys(err.errors)
                .map(key => err.errors[key].message)
        .join(', ');

        //обрабатываем  и отправляем
        res.status(404)
            .json({
                status: 'При добавление знания произошла ошибка: ' + error
            });
    });

}

module.exports.editSkilles = function (req, res) {
    const id = req.params.id;

    let data = {
        type: req.body.type,
        title: req.body.title,
        procent: req.body.procent
    };

    const Model = mongoose.model('skill');

    Model
        .findByIdAndUpdate(id, {$set: data} )
        .then((item) => {
        if (!!item) {
            res
                .status(200)
                .json({status: 'Знание успешно обновлено'});
        } else {
            res
                .status(404)
                .json({status: 'Знание в БД не обнаружено'});
        }
    })
    .catch((err) => {
            res
            .status(404)
            .json({
                status: 'При обновлении знания произошла ошибка: ' + err
            });
    });

}

module.exports.deleteSkilles = function (req, res) {
    const id = req.params.id;
    const Model = mongoose.model('skill');

    Model
        .findByIdAndRemove(id)
        .then((item) => {
        if (!!item) {
            res.status(200).json({status: 'Запись успешно удалена'});
        } else {
            res.status(404).json({status: 'Запись в БД не обнаружена'});
        }
    }, (err) => {
            res.status(404).json({
                status: 'При удалении записи произошла ошибка: ' + err
            });
        });

}

