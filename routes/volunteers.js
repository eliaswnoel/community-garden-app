const express = require('express');
const router = express.Router();
const volunteersCtrl = require('../controllers/volunteers');

router.post('/gardens/:gardenId/volunteers', volunteersCtrl.createVolunteer);

module.exports = router;