const express = require('express');
const router = express.Router();

const gardensCtrl = require('../controllers/gardens');
const volunteersCtrl = require('../controllers/volunteers');

router.post('/:gardenId/volunteers', volunteersCtrl.createVolunteer);

// GET /gardens
router.get('/', gardensCtrl.index);
// GET /gardens/new
router.get('/new', gardensCtrl.new);
// POST /gardens
router.get('/:id', gardensCtrl.show);
router.post('/', gardensCtrl.create);



module.exports = router;

