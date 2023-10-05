const express = require("express");

const _ = express.Router();
const {
  bannarDeleteControllar,
  allbannar,
} = require("../../controllar/bannarControllar");

_.post("/bannarDeleteControllar", bannarDeleteControllar);
_.get("/allbannar", allbannar);

module.exports = _;
