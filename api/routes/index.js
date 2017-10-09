var express = require('express');
var router = express.Router();

const ctrlBlog = require('../controllers/blog');

router.get('/blog', ctrlBlog.getArticles);
router.post('/blog', ctrlBlog.createArticles);
router.put('/blog/:id', ctrlBlog.editArticles);
router.delete('/blog/:id', ctrlBlog.deleteArticles);

const ctrlSkill= require('../controllers/skill');

router.get('/skill', ctrlSkill.getSkilles);
router.post('/skill', ctrlSkill.createSkilles);
router.put('/skill/:id', ctrlSkill.editSkilles);
router.delete('/skill/:id', ctrlSkill.deleteSkilles);

module.exports = router;
