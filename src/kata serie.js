import {log} from "./log.js";

const drivers = [
    {name: "Leclerc", team: "Ferrari", points: 105},
    {name: "Verstappen", team: "Red Bull", points: 195},
    {name: "Norris", team: "McLaren", points: 85},
    {name: "Perez", team: "Red Bull", points: 125},
    {name: "Hamilton", team: "Mercedes", points: 110},
    {name: "Piastri", team: "McLaren", points: 72}
];

//drivers.filter(driver => driver.points > 100).forEach(driver => console.log(driver));
//drivers.map(driver => driver.name.toUpperCase()).forEach(log);
//drivers.forEach(driver => console.log(driver.name, ' marque ', driver.points, ' pour ', driver.team))

//drivers.sort()
//console.log(drivers[0].toString())
console.log(drivers)
const sorted = drivers.slice().sort((a, b) => a.name < b.name ? -1 : 1);
console.log(drivers, sorted);