const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = Schema({
  fName: {
    type: String,
    require: [true, "please add first name"],
  },
  lName: {
    type: String,
    require: [true, "please add  last name"],
  },
  email: {
    type: String,
    require: [true, "please add email"],
    unique: true,
  },
  phoneNumber: {
    type: Number,
    require: false,
  },
  address: {
    type: String,
    require: [true, "please add address"],
  },
  city: {
    type: String,
    require: [true, "please add city"],
    unique: true,
  },
  country: {
    type: String,
    require: [true, "please add country"],
  },
  postalCode: {
    type: String,
    require: [true, "please add postal code"],
  },
  password: {
    type: String,
    require: [true, "please add password"],
    unique: true,
  },
  date: {
    type: Date,
    default: Date.now(),
  },
});

module.exports = mongoose.model("users", userSchema);
