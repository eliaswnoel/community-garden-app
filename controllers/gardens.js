const Garden = require('../models/garden');
const Plant = require('../models/plant');
const Volunteer = require('../models/volunteer')


module.exports = {
    index,
    list,
    new: newGarden,
    create,
    show
};

async function index(req, res, next) {
    const gardens = await Garden.find({});
    console.log(gardens)
    res.render('gardens/index', { title: 'All Gardens', gardens: gardens });
  }

async function list(req, res, next) {
    res.render('gardens', { title: 'Garden' });
}

async function newGarden(req, res, next) {
    console.log("new garden")
    res.render('gardens/new', { title: 'Add Garden' }); 
}

async function create(req, res, next) {
    console.log("here create")
    // convert nowShowing's checkbox of nothing or "on" to boolean
    //req.body.nowShowing = !!req.body.nowShowing;
    // Remove empty properties so that defaults will be applied
    for (let key in req.body) {
      if (req.body[key] === '') delete req.body[key];
    }
    try {
      // Update this line because now we need the _id of the new movie
      const garden = await Garden.create(req.body);
      // Redirect to the new movie's show functionality 
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
        console.log(volunteers)
        // const garden = await Garden.findById(req.params.id).populate('vegetable herb fruit flower');
        res.render('gardens/show', { title: 'Garden', garden: garden, volunteers:volunteers});
    } catch (err) {
        // Handle errors
        console.error(err);
        res.status(500).send('Internal Server Error');
    }
};
