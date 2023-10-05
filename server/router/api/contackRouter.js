const express = require("express");
const contactControllar = require("../../controllar/contactControllar");
const _ = express.Router();

_.post("/contactControllar", contactControllar);

module.exports = _;
