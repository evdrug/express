'use strict'
const mongoose = require('mongoose');

const Shema = mongoose.Schema;
const SliderShema = new Shema({
    image: {
        type: String,
        required: [true,'Не указано имя картинки']
    },
    description: {
        type: String,
        required: [true,'Не указано название работы']
    },
    tags: {
        type: [],
        required: [true,'Не указаны технологии']
    },
    link: {
        type: String,
        required: [true,'Нет ссылки на работу']
    }
});

mongoose.model('slider',SliderShema);