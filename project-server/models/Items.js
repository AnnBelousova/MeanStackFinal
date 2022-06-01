const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const itemSchema = Schema({
  name: {
    type: String,
    require: [true, 'please add name'],
  },
  price: {
    type: Number,
    require: [true, 'please add price'],
  },
  quantity: {
    type: Number,
    require: [true, 'please add quantity'],
  },
  img_url: {
    type: String,
    require: [true, 'please add URL'],
  },
});

module.exports = mongoose.model('Items', itemSchema);