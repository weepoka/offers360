const express = require("express");
const jobOfferControllar = require("../../controllar/jobOfferControllar");
const _ = express.Router();

_.post(
  "/create",
  jobOfferControllar.createJobOffer,
  jobOfferControllar.handleCreateJobOffer
);
_.get("/getAll", jobOfferControllar.createJobOffer);

module.exports = _;
