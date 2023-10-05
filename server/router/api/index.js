const express = require("express");
const bannarControllar = require("./bannarRouter.js");
const _ = express.Router();

_.use("/banner", bannarControllar);

module.exports = _;
