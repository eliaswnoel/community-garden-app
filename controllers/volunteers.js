const Garden = require('../models/garden');
const Volunteer = require('../models/volunteer');

module.exports = {
  createVolunteer: async (req, res) => {
    const { name, date, timeFrom, timeTo, gardenId } = req.body;
    console.log(req.params)
    try {
      const garden = req.params.gardenId;
      const volunteer = new Volunteer({
        name,
        date,
        timeFrom,
        timeTo,
        garden: garden
      });
      console.log(volunteer)
      await volunteer.save();
      res.redirect(`/gardens/${garden}`);
    } catch (err) {
      return res.status(500).json({ err });
    }
  }
};
