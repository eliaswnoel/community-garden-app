var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Garden' });
});

router.get('/gardens', function(req, res, next) {
  res.render('gardens', { title: 'Garden' });
});


module.exports = router;
