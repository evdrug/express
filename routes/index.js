var express = require('express');
var router = express.Router();

const ctrlIndex = require('../controllers/login');
const ctrlBlog = require('../controllers/blog');
const ctrlWorks = require('../controllers/works');
const ctrlAbout = require('../controllers/about');
/* GET home page. */
router.get('/', ctrlIndex.getIndex);
router.get('/blog', ctrlBlog.getBlog);
router.get('/works', ctrlWorks.getWorks);
router.get('/about', ctrlAbout.getAbout);

module.exports = router;
