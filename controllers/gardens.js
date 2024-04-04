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
    //console.log(gardens)
    res.render('gardens/index', { title: 'All Gardens', gardens: gardens });
  }

async function list(req, res, next) { 
  const gardens = await Garden.find({});
    res.render('gardens', { title: 'Garden', gardens: gardens  });
}

async function newGarden(req, res, next) {
    console.log("new garden")
    res.render('gardens/new', { title: 'Add Garden' }); 
}

async function create(req, res, next) {
    console.log("here create")

    for (let key in req.body) {
      if (req.body[key] === '') delete req.body[key];
    }
    try {

      const garden = await Garden.create(req.body);
y 
      // res.redirect(`/garden/${garden._id}`);
      res.redirect(`/`);
    } catch (err) {
      // Typically some sort of validation error
      console.log(err);
      res.render('gardens/new', { errorMsg: err.message });
    }
  }

  async function show(req, res) {
    try {
        const garden = await Garden.findById(req.params.id)
        const volunteers = await Volunteer.find({garden:req.params.id})
        const plants = await Plant.find({garden:req.params.id})
        console.log(volunteers)
        console.log(plants)
        // const garden = await Garden.findById(req.params.id).populate('vegetable herb fruit flower');
        res.render('gardens/show', { title: 'Garden', garden: garden, volunteers:volunteers, plants: plants});
    } catch (err) {
        // Handle errors
        console.error(err);
        res.status(500).send('Internal Server Error');
    }
};

async function gardenNewPlant(req, res, next) {
  console.log("create new plant for a given garden");
  const garden = await Garden.findById(req.params.id)
  res.render('plants/new', { title: 'Add Garden', garden: garden }); 
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
