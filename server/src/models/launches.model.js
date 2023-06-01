const launches = new Map();

const launch = {
  flightNumber: 100,
  mission: "Kepler Exploration X",
  rocket: "Explorer IS1",
  launchDate: new Date("Decemeber 27, 2030"),
  destination: "Kepler-442 b",
  customer: ["ZTM", "NASA"],
  upcoming: true,
  success: true,
};

// we are setting the launch flight number as the id -> to the associated object
launches.set(launch.flightNumber, launch);

function getAllLaunches() {
  return Array.from(launches.values());
}

module.exports = { launches, getAllLaunches };
