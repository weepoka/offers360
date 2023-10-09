const mongoose = require("mongoose");
const { Schema } = mongoose;

const jobOffer = new Schema({
  jobTitle: {
    type: String,
  },
  logo: {
    type: String,
  },
  jobDescription: {
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
