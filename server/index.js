const express = require("express");
const dbConfig = require("./config/dbConfig");
const cors = require("cors");
const router = require("./router");
const app = express();
const _ = require("./controllar/bannarControllar.js");

app.use(express.json());
app.use(cors());
dbConfig();
app.use(router);
app.use(_);
app.use("/uploads", express.static("uploads"));

app.listen("8000", () => {
  console.log("server running");
});
