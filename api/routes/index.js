var express = require('express');
var router = express.Router();

const ctrlBlog = require('../controllers/blog');

router.get('/blog', ctrlBlog.getArticles);
router.post('/blog', ctrlBlog.createArticles);
router.put('/blog/:id', ctrlBlog.editArticles);
router.delete('/blog/:id', ctrlBlog.deleteArticles);

module.exports = router;
