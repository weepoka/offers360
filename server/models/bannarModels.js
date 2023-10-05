const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bannar = new Schema({
  link: {
    type: String,
  },
  img: {
    type: String,
  },
});

module.exports = mongoose.model("Banar", bannar);
