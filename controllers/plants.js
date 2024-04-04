const Plant = require('../models/plant');
const Garden = require('../models/garden');

module.exports = {
    new: newPlant,
    create,
    getPlantsByCategory
};
//render new plant form when button is clicked
async function newPlant(req, res) {
    res.render('plants/new', {title: 'add new plant'});  
}
//create new plant for a garden
async function create(req,res) {
    //get plant date from the request body
    const plantData = req.body;
    //Find the garden and add the plant to it 
    const garden = await Garden.findById(req.params.id)
    try {
        //create a new plant
        const plant = new Plant(plantData);
        await plant.save();

        
        // garden.plants.push(plant);
        // await garden.save();

        //reditect to the garden page
        res.redirect(`/gardens/${garden._id}`);
    } catch (err) {
        // Typically some sort of validation error
        console.log(err);

        res.render('plants/new', { title: 'Add Garden', garden: garden, errorMsg: err.message});
    }
}


async function getPlantsByCategory(req, res, next) {
    try {
        const gardenId = req.params.id;
        const category = req.params.category;
        console.log( {garden: gardenId, category: category })
        const plants = await Plant.find({ garden: gardenId, category: category });
        const garden = await Garden.findById(gardenId);
        console.log(plants)
        res.render('plants/index', { plants: plants, categoryTitle: category + 's', category: category, title: "Plants", garden: garden });
    } catch (error) {
        next(error);
    }
};

