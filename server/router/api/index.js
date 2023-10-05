const express = require("express");
const bannarControllar = require("./bannarRouter.js");
const _ = express.Router();
const aboutRouter = require("./aboutRouter.js");
const contactRouter = require("./contackRouter.js");

_.use("/banner", bannarControllar);
_.use("/about", aboutRouter);
_.use("/contact", contactRouter);

module.exports = _;
