const mongoose = require("mongoose");
const ObjectId = mongoose.Schema.ObjectId;
const Schema = mongoose.Schema;
const policySchema = Schema({
  id: ObjectId,
  key: {
    required: true,
    type: String,
  },
  description: {
    required: true,
    type: String,
  },
  language_code: {
    required: true,
    type: String,
  },
});
module.exports = mongoose.model("Policy", policySchema, "policy");
