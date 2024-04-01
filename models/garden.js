const mongoose = require('mongoose');
// optional shortcut to the mongoose.Schema class
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

// const plantSchema = new Schema ({
//   plantType: {
//       type: String,
//       required: true,
//       validate: {
//           validator: function(value) {
//               return ['vegetable', 'fruit', 'herb', 'flower'].includes(value);
//           },
//           message: props => `${props.value} is not a valid plant type. It must be either 'vegetable', 'fruit', 'flower' or 'herb'.`
//       }
//   },
//   plantName: {
//       type: String,
//       required: true
//   },
// });




module.exports = mongoose.model('Garden', gardenSchema);