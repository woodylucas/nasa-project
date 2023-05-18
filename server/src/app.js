const express = require("express");

const app = express();

// parse incoming json middlware
app.use(express.json());

module.exports = app;
