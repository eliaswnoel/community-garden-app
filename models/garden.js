const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const gardenSchema = new Schema ({
  name: {
    type:String, 
    required: true
  },
  address: {
    type: String, 
    required: true
  },
  yearFounded: {
    type: Date,
    required: true
  },
    imagePath: {
      type: String, 
      required: true
} 
}, {
    timestamps: true
});






module.exports = mongoose.model('Garden', gardenSchema);