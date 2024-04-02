const Garden = require('../models/garden');

module.exports {
    create
}

const gardensController = {
    createVolunteer: async (req, res) => {
      const garden = await Garden.findById(req.params.id);
      const volunteer = {
        name: req.body.name,
        date: req.body.date,
      };
      garden.volunteers.push(volunteer);
      await garden.save();
      res.redirect(`/gardens/${garden._id}`);
    },
  };