var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
  const context= {
    title: 'Profile',
    name: 'Rose',
    age: 16,
    grade: 11,
  }
  res.render('profile', context)
});

module.exports = router;
