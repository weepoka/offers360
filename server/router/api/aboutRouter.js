const express = require("express");
const aboutController = require("../../controllar/aboutControllar");
const _ = express.Router();

_.post("/aboutController", aboutController);

module.exports = _;
