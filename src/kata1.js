var drivers = [
    { name: "Max Verstappen", bestLap: 1.27 },
    { name: "Charles Leclerc", bestLap: 1.28 },
    { name: "Lewis Hamilton", bestLap: 1.29 }
];

function getFastestDriver(drivers) {
    var bestTime = drivers[0].bestLap;
    var bestDriver = drivers[0];

    for (var i = 1; i < drivers.length; i++) {
        if (drivers[i].bestLap < bestTime) {
            bestTime = drivers[i].bestLap;
            bestDriver = drivers[i];
        }
    }

    return bestDriver.name;
}

console.log("🏎️ Pilote le plus rapide :", getFastestDriver(drivers));
