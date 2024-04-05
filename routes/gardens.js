const express = require('express');
const router = express.Router();

const gardensCtrl = require('../controllers/gardens');
const plantsCtrl = require('../controllers/plants');
const volunteersCtrl = require('../controllers/volunteers');

router.get('/:id/plants/new', gardensCtrl.gardenNewPlant);
router.get('/', gardensCtrl.index);
router.get('/new', gardensCtrl.new);
router.get('/:id', gardensCtrl.show);

router.post('/', gardensCtrl.create);
router.delete('/:id', gardensCtrl.deleteGarden); 

router.post('/:id/plants/new', plantsCtrl.create);
router.get('/:id/plants/:category/', plantsCtrl.getPlantsByCategory);
router.delete('/:gardenId/plants/:plantId', plantsCtrl.delete)

router.post('/:gardenId/volunteers', volunteersCtrl.createVolunteer);




module.exports = router;

