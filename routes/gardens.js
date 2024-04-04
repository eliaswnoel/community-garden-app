const express = require('express');
const router = express.Router();

const gardensCtrl = require('../controllers/gardens');
const plantsCtrl = require('../controllers/plants');
const volunteersCtrl = require('../controllers/volunteers');

router.post('/:gardenId/volunteers', volunteersCtrl.createVolunteer);
router.get('/:id/plants/new', gardensCtrl.gardenNewPlant);
router.post('/:id/plants/new', plantsCtrl.create);
// GET /gardens
router.get('/', gardensCtrl.index);
// GET /gardens/new
router.get('/new', gardensCtrl.new);
// POST /gardens
router.get('/:id', gardensCtrl.show);
router.post('/', gardensCtrl.create);
router.get('/:id/plants/:category/', plantsCtrl.getPlantsByCategory);
router.delete('/:id/plants/:id', plantsCtrl.delete);




module.exports = router;

