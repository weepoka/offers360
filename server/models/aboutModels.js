const mongoose = require("mongoose");
const Shcema = mongoose.Schema;

const aboutModels = new Shcema({
  about: {
    type: String,
  },
  mission: {
    type: String,
  },
});

module.exports = mongoose.model("About", aboutModels);
