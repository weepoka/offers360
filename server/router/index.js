const express = require("express");
const _ = express.Router();
const api = require("./api");
_.use("/api", api);

module.exports = _;
