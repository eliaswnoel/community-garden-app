
// routes/category.js
const express = require('express');
const router = express.Router();

// Import the plants controller
const plantsCtrl = require('../controllers/plants');

// Define the route to handle GET requests to '/:id/:category'
router.get('/:id/:category', plantsCtrl.getPlantsByCategory);

// Export the router
module.exports = router;