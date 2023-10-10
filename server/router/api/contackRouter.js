const express = require("express");
const {
  contactControllar,
  getContactControllar,
} = require("../../controllar/contactControllar");
const _ = express.Router();

_.post("/contactControllar", contactControllar);
_.get("/getContact", getContactControllar);

module.exports = _;
