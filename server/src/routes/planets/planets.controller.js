const planets = require("../../models/planets.model");

function getAllPlanets(req, res) {
  // we use return statament so our function stops exexuting, and only one response is ever set
  return res.status(200).json(planets);
}

module.exports = { getAllPlanets };
