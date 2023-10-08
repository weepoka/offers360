const mongoose = require("mongoose");
const { Schema } = mongoose;

const jobOffer = new Schema({
  jobTitel: {
    type: String,
  },
  logo: {
    type: String,
  },
  jobDiscription: {
    type: String,
  },
  salary: {
    type: String,
  },
  link: {
    type: String,
  },
});

module.exports = mongoose.model("JobOffer", jobOffer);
