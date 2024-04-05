const Garden = require('../models/garden');
const Plant = require('../models/plant');
const Volunteer = require('../models/volunteer')


module.exports = {
    index,
    list,
    new: newGarden,
    create,
    show,
    gardenNewPlant,
    deleteGarden
};

async function index(req, res, next) {
    const gardens = await Garden.find({});
    res.render('gardens/index', { title: 'Neighborhood Gardens', gardens: gardens });
  }

async function list(req, res, next) { 
  const gardens = await Garden.find({});
    res.render('gardens', { title: 'Neighborhood Gardens', gardens: gardens  });
}

async function newGarden(req, res, next) {
    res.render('gardens/new', { title: 'Add Garden' }); 
}

async function create(req, res, next) {

    for (let key in req.body) {
      if (req.body[key] === '') delete req.body[key];
    }

    let title = "New Garden";

    try {
      const garden = await Garden.create(req.body);
      res.redirect('/')
    } catch (err) {
      console.error(err);
      res.status(500).send('Internal Server Error');
    }
  }

async function show(req, res) {
    try {
        const garden = await Garden.findById(req.params.id)
        const volunteers = await Volunteer.find({garden:req.params.id})
        const plants = await Plant.find({garden:req.params.id})
        res.render('gardens/show', { title: 'Neighborhood Gardens', garden: garden, volunteers:volunteers, plants: plants});
    } catch (err) {
        console.error(err);
        res.status(500).send('Internal Server Error');
    }
};

async function gardenNewPlant(req, res, next) {
  const garden = await Garden.findById(req.params.id)
  res.render('plants/new', { title: 'Add Plant', garden: garden }); 
};

async function deleteGarden(req, res, next) {
  try {
    const { id } = req.params;
    await Garden.findByIdAndDelete(id);
    res.redirect('/gardens');
  } catch (err) {
    console.error(err);
    res.status(500).send('Internal Server Error');
  }
}
