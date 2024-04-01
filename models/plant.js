const mongoose = require('mongoose');
// optional shortcut to the mongoose.Schema class
const Schema = mongoose.Schema;

// vegetable
// name
// amount 
// garden-id


const plantSchema = new Schema ({
  plantType: {
      type: String,
      required: true,
      validate: {
          validator: function(value) {
              return ['vegetable', 'fruit', 'herb', 'flower'].includes(value);
          },
          message: props => `${props.value} is not a valid plant type. It must be either 'vegetable', 'fruit', 'flower' or 'herb'.`
      }
  },
  plantName: {
      type: String,
      required: true
  },
});


module.exports = mongoose.model('Plant', plantSchema);