const Garden = require('../models/garden');
const Volunteer = require('../models/volunteer');

module.exports = {
  createVolunteer: async (req, res) => {
    const { name, date, timeFrom, timeTo, gardenId } = req.body;
    try {
      const garden = req.params.gardenId;
      const volunteer = new Volunteer({
        name,
        date,
        timeFrom,
        timeTo,
        garden: garden
      });
      await volunteer.save();
      res.redirect(`/gardens/${garden}`);
    } catch (err) {
      return res.status(500).json({ err });
    }
  },

  deleteVolunteer: async (req, res) => {
    try {
      const volunteerId = req.params.volunteerId;
      await Volunteer.findByIdAndDelete(volunteerId);
      res.redirect(`/gardens/${req.params.gardenId}`);
    } catch (err) {
      return res.status(500).json({ err });
    }
  }

};
