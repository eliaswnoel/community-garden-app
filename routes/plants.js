const express = require('express');
const router = express.Router();
const plantsCtrl = require('../controllers/plants');

// GET /plants/new (new functionality)
router.get('/new', plantsCtrl.new);

// POST /plants (create functionality)
router.post('/:gardenId/plants', plantsCtrl.create);








module.exports = router;