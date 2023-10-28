const express = require("express");
const authControllar = require("../../controllar/authControllar.js");
const _ = express.Router();

_.post("/login", authControllar);

module.exports = _;
