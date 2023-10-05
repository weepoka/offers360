const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const contackModels = Schema({
  category: { type: String },
  email: { type: String },
  number: { type: String },
});

module.exports = mongoose.model("Contact", contackModels);
