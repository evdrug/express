'use strict'
const mongoose = require('mongoose');

const Shema = mongoose.Schema;
const SkillShema = new Shema({
    type: {
        type: String,
        required: [true,'Не указан заголовок статьи']
    },
    title: {
        type: String,
        required: [true,'Не указана дата']
    },
    procent: {
        type: Number,
        required: [true,'Нет содержимого статьи']
    }
});

mongoose.model('skill',SkillShema);