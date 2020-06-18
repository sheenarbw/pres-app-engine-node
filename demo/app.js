"use strict";

const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.status(200).send("Hello JoziJs! [v1]").end();
});

app.get("/oh-no", (req, res) => {
  this;
  is;
  an;
  error;
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
  console.log("Press Ctrl+C to quit.");
});

module.exports = app;
