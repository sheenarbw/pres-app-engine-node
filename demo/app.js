"use strict";

const express = require("express");

const app = express();

app.get("/", (req, res) => {
    res.status(200).send("Hello Google Dev Group! [Foo. v2]").end();
});

app.get("/oh-no", (req, res) => {
    throw new Error("Golly, this was unexpected!")
});

app.get("/oh-no/2", (req, res) => {
    bugger
});
  
const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
  console.log("Press Ctrl+C to quit.");
});

module.exports = app;
