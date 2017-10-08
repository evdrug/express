var express = require('express');
var router = express.Router();

const ctrlIndex = require('../controllers/login');
const ctrlBlog = require('../controllers/blog');
const ctrlWorks = require('../controllers/works');
const ctrlAbout = require('../controllers/about');
const ctrlAdmin = require('../controllers/admin');
/* GET home page. */
router.get('/', ctrlIndex.getIndex);
router.get('/blog', ctrlBlog.getBlog);
router.get('/works', ctrlWorks.getWorks);
router.get('/about', ctrlAbout.getAbout);
router.get('/admin', ctrlAdmin.getAdmin);

module.exports = router;
