const express = require('express');
const router = express.Router();
const reviewsCtrl = require('../controllers/volunteers');

router.post('/gardens/:gardenId/volunteers', VolunteersController.createVolunteer);

module.exports = router;