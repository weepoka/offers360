const express = require("express");
const bannarControllar = require("../../controllar/bannarControllar");
const _ = express.Router();
const imageUp = require("../../controllar/bannarControllar.js");
_.post("/bannarControllar", bannarControllar);

module.exports = _;
