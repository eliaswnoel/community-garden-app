const express = require('express');
const router = express.Router();

const gardensCtrl = require('../controllers/gardens');

// GET /gardens
router.get('/', gardensCtrl.index);
// GET /gardens/new
router.get('/new', gardensCtrl.new);
// POST /gardens
router.get('/:id', gardensCtrl.show);
router.post('/', gardensCtrl.create);



module.exports = router;
