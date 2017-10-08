'use strict'
const mongoose = require('mongoose');

const Shema = mongoose.Schema;
const BlogShema = new Shema({
    title: {
        type: String,
        required: [true,'Не указан заголовок статьи']
    },
    date: {
        type: Date,
        default: Date.now(),
        required: [true,'Не указана дата']
    },
    text: {
        type: String,
        required: [true,'Нет содержимого статьи']
    }
});

mongoose.model('blog',BlogShema);