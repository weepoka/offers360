const express = require("express");
const {
  aboutController,
  getabout,
} = require("../../controllar/aboutControllar");
const _ = express.Router();

_.post("/aboutController", aboutController);
_.get("/getabout", getabout);

module.exports = _;
