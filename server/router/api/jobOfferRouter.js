const express = require("express");
const jobOfferControllar = require("../../controllar/jobOfferControllar");
const _ = express.Router();

_.post(
  "/create",
  jobOfferControllar.createJobOffer,
  jobOfferControllar.handleCreateJobOffer
);
_.get("/getAll", jobOfferControllar.getAllJobOffers);
_.post("/delete", jobOfferControllar.deleteJobOffer);

module.exports = _;
