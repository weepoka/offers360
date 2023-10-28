const express = require("express");
const dbConfig = require("./config/dbConfig");
const cors = require("cors");
const router = require("./router");
const app = express();
const _ = require("./controllar/bannarUpload.js");

app.use(cors());
app.use(express.json());
dbConfig();
app.use(router);
app.use(_);
app.use("/uploads", express.static("uploads"));
app.use("/uploads/job-offer-logos", express.static("uploads"));

app.listen("8000", () => {
  console.log("server running");
});
