const Plant = require('../models/plant');
const Garden = require('../models/garden');

module.exports = {
    new: newPlant,
    create
};
//render new plant form when button is clicked
async function newPlant(req, res) {
    res.render('plants/new', {title: 'add new plant'});  
}
//create new plant for a garden
async function create(req,res) {
    //get plant date from the request body
    const plantData = req.body;
    plantData.gardenId = req.params.gardenId;


    //create a new plant
    const plant = new Plant(plantData);
    await plant.save();

    //Find the garden and add the plant to it 
    const garden = await Garden.findById(plantData.gardenId);
    garden.plants.push(plant);
    await garden.save();

    //reditect to the garden page
    res.redirect(`/gardens/${plantData.gardenId}`);
}
