var drivers2025 = [
    {name: "Sainz", bestLap: 1.31},
    {name: "Alonso", bestLap: 1.28},
    {name: "Norris", bestLap: 1.30},
    {name: "Russell", bestLap: 1.29, favorite: true,}
];
let i = 28

// Fonction de tri à bulles
function newBubble(drivers) {
    let swapped
    do {
        swapped = false
        for (let i = 0; i < drivers.length - 1; i++) {
            if (drivers[i].bestLap > drivers[i + 1].bestLap) {
                let temp = drivers[i];
                drivers[i] = drivers[i + 1]
                drivers[i + 1] = temp;
                swapped = true;
            }
        }
    }
    while (swapped)
}

// On trie les pilotes
newBubble(drivers2025);
let favoriteTime = 0

// On affiche le classement
for (let i = 0; i < drivers.length; i++) {
    console.log(
        (i + 1) + ". " + drivers[i].name + " - " + drivers[i].bestLap + "s"
    );


}
console.log(i)

console.log(favoriteTime);