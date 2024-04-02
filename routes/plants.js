const express = require('express');
const router = express.Router();
const plantsCtrl = require('../controllers/plants');

// GET /plants/new (new functionality)
router.get('/new', plantsCtrl.new);

// POST /plants (create functionality)
// router.post('/plants', plantsCtrl.create);
// POST /gardens/:id/planys(associate a plant with a garden)
// router.post('/gardens/:id/plants', plantsCtrl.addToGarden);

module.exports = router;