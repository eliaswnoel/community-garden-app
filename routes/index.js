var express = require('express');
var router = express.Router();

const gardensCtrl = require('../controllers/gardens');

/* GET home page. */
router.get('/', gardensCtrl.index);

router.get('/gardens', gardensCtrl.list);

router.get('/add-garden', gardensCtrl.new);


module.exports = router;
