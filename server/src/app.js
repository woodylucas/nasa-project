const express = require("express");
const path = require("path");
const cors = require("cors");
const morgan = require("morgan");

const planetsRouter = require("./routes/planets/planets.router");
const launchesRouter = require("./routes/launches/launches.router");

const app = express();

app.use(
  cors({
    origin: "http://localhost:3000",
  })
);

// track incoming request w/ morgan
app.use(morgan());

// parse incoming json middlware
app.use(express.json());
app.use(express.static(path.join(__dirname, "..", "public")));

app.use("/planets", planetsRouter);
app.use("/launches", launchesRouter);
// serving application w/ client side routing we add an asterick
app.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "public", "index.html"));
});
module.exports = app;
