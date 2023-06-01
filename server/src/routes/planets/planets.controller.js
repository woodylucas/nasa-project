const { getAllPlanets } = require("../../models/planets.model");

function httpGetAllPlanets(req, res) {
  // we use return statament so our function stops exexuting, and only one response is ever set
  return res.status(200).json(getAllPlanets());
}

module.exports = { httpGetAllPlanets };
