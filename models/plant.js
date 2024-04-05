const mongoose = require('mongoose');
// optional shortcut to the mongoose.Schema class
const Schema = mongoose.Schema;



const plantSchema = new Schema ({
  category: {
        type: String,
        required: true,
        enum: ['vegetable', 'fruit', 'herb', 'flower']
    },
  name: {
      type: String,
      required: true
  },
  garden: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Garden',
    required: true
  },
  lifeCycle: {
    type: String,
    required: true,
    enum: ['annual', 'biennial', 'perennial']
  },
  imagePath: {
    type: String, 
    required: false
} 

});


module.exports = mongoose.model('Plant', plantSchema);