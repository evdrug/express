var express = require('express');
var router = express.Router();
var utils = require('../utils');

var Auth = utils.basicAuth('test', 'qwerty1')

const ctrlBlog = require('../controllers/blog');

router.get('/blog', ctrlBlog.getArticles);
router.post('/blog', ctrlBlog.createArticles);
router.put('/blog/:id', ctrlBlog.editArticles);
router.delete('/blog/:id', ctrlBlog.deleteArticles);

const ctrlSkill= require('../controllers/skill');

router.get('/skill',  ctrlSkill.getSkilles);
router.post('/skill', ctrlSkill.createSkilles);
router.put('/skill/:id', ctrlSkill.editSkilles);
router.delete('/skill/:id',Auth , ctrlSkill.deleteSkilles);


const ctrlSlider= require('../controllers/slider');

router.get('/slider', ctrlSlider.getSlider);
router.post('/slider', ctrlSlider.createSlider);




const ctrlUser = require('../controllers/user');
router.post('/user', ctrlUser.isAuth);

module.exports = router;

