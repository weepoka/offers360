const express = require("express");
const _ = express.Router();
const multer = require("multer");
const bannarModels = require("../models/bannarModels");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads");
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(null, file.fieldname + "-" + uniqueSuffix + "." + file.originalname);
  },
});

const upload = multer({ storage: storage });

_.post("/imgupload", upload.single("img"), async function (req, res) {
  const bannerimg = req.file.filename;
  const url = req.body.url;
  const mng = await bannarModels({
    link: url,
    img: `uploads/${bannerimg}`,
  });
  mng.save();
  res.json({ succesfully: "bannar uploaded successfully", data: mng });
});

module.exports = _;
