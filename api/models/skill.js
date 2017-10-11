'use strict'
const mongoose = require('mongoose');

const Shema = mongoose.Schema;
const SkillShema = new Shema({
    type: {
        type: String,
        required: [true,'Не указан тип знаний']
    },
    title: {
        type: String,
        required: [true,'Не указано название знания']
    },
    procent: {
        type: Number,
        required: [true,'Не указан процент знания']
    }
});

mongoose.model('skill',SkillShema);