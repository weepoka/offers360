const mongoose = require("mongoose");

function dbConfig() {
  mongoose
    .connect(
      "mongodb+srv://joboffer360:joboffer360@cluster0.becp0tw.mongodb.net/joboffers360?retryWrites=true&w=majority"
    )
    .then(() => console.log("Connected!"));
}

module.exports = dbConfig;
