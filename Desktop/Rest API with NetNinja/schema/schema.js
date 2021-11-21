const mongoose = require('mongoose');
const Schema = mongoose.Schema;

ninjaSchema = new Schema({
  name: {
    type: String,
    required: [true, 'name field is required'],
  },

  rank: {
    type: String,
  },

  available: {
    type: Boolean,
    default: false,
  },

  //   add in geo-location
});

const Ninja = mongoose.model('ninja', ninjaSchema);

module.exports = Ninja;
