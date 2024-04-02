const mongoose = require('mongoose');
// optional shortcut to the mongoose.Schema class
const Schema = mongoose.Schema;

// vegetable
// name
// amount 
// garden-id


const plantSchema = new Schema ({
  plantType: {
    category: {
        type: String,
        required: true,
        enum: ['vegetable', 'fruit', 'herb', 'flower']
      }
  },
  name: {
      type: String,
      required: true
  },
  lifeCycle: {
    type: String,
    required: true,
    enum: ['annual', 'biennial', 'perennial']
}
});


module.exports = mongoose.model('Plant', plantSchema);