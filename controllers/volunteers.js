const Garden = require('../models/garden');
const Volunteer = require('../models/volunteer');

module.exports = {
  createVolunteer: async (req, res) => {
    const { name, date, timeFrom, timeTo, gardenId } = req.body;
  
    try {
      const garden = await Garden.findById(gardenId);
      const volunteer = new Volunteer({
        name,
        date,
        timeFrom,
        timeTo,
        garden: garden
      });
      await volunteer.save();
      res.redirect(`/gardens/${garden._id}`);
    } catch (err) {
      return res.status(500).json({ err });
    }
  }
};