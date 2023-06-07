const { getAllLaunches, addNewLaunch } = require("../../models/launches.model");

function httpGetAllLaunches(req, res) {
  res.status(200).json(getAllLaunches());
}

function httpCreateLaunches(req, res) {}

module.exports = { httpGetAllLaunches };
