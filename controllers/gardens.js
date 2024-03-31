const Garden = require('../models/garden');
const Plant = require('../models/plant');


module.exports = {
    index,
    list,
    new: newGarden
};

async function index(req, res, next) {
    res.render('index', { title: 'Garden' });
  }

async function list(req, res, next) {
    res.render('gardens', { title: 'Garden' });
}

async function newGarden(req, res, next) {
    res.render('gardens/new', { title: 'Add Garden' }); 
}