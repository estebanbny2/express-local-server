var names = ["Sainz", "Alonso", "Norris", "Russell"];
var bestLaps = [1.31, 1.28, 1.30, 1.29];

var drivers = [];

for (var i = 0; i < names.length; i++) {
    drivers.push({
        name: names[i],
        bestLap: bestLaps[i]
    });
}

function f(array, callback) {
    for (var i = 0; i < array.length; i++) {
        const d = callback(array[i], i);
        console.log(d);
    }
}

function displayDriver(driver, index) {
    console.log("Pilote #" + (index + 1) + " : " + driver.name + " (tour : " + driver.bestLap + "s)");
}

let copy = driver => driver.name


// Fonction anonyme pour afficher chaque pilote
f(drivers, copy)


const fastDrivers = drivers.filter(driver => driver.bestLap < 1.30).map(driver => driver.name)
console.log(fastDrivers);