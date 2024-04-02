const Plant = require('../models/plant');
const Garden = require('../models/garden');

module.exports = {
    new: newPlant,
};

async function newPlant(req, res) {
    res.render('plants/new', {title: 'add new plant'});  
}
