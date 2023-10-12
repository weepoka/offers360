const express = require("express");
const authControllar = require("../../controllar/AuthControllar");
const _ = express.Router();

_.post("/login", authControllar);

module.exports = _;
