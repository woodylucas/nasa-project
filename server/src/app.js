const express = require("express");
const path = require("path");
const cors = require("cors");
const morgan = require("morgan");

const planetsRouter = require("./routes/planets/planets.router");
const launchesRouter = require("./routes/launches/launches.router");

const app = express();

// middleware chain

// fix our cors issue: we are only going to accep request from this specific port
app.use(
  cors({
    origin: "http://localhost:3000",
  })
);

// track incoming request w/ morgan
app.use(morgan("combined"));

// check for the express content-type parse incoming data json middlware
app.use(express.json());
app.use(express.static(path.join(__dirname, "..", "public")));
// express allows us to mount our middleware on a specfic path
app.use("/planets", planetsRouter);
app.use("/launches", launchesRouter);
// serving application w/ client side routing we add an asterick
app.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "public", "index.html"));
});
module.exports = app;
