var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('about',{title: 'express'});
});
// router.get('/test', function(req, res, next) {
//   res.render('about',{title: 'express test'});
// });
// router.get('/', function(req, res, next) {
//   res.render('PROFILE',{title: 'PERFIL'});
// });
module.exports = router;
