const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const DealSchema = Schema({
  url: {
    type: String,
    require: [true, 'please add URL'],
  },
  html: {
    type: String,
    require: [true, 'please add HTML'],
  },
});

module.exports = mongoose.model('Deals', DealSchema);