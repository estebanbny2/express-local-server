import axios from "axios";

const endpoint = "https://crudcrud.com/api/bee8429066fb45f9938105be27b28886/drivers"
const drivers = [
    {name: "Leclerc", team: "Ferrari", points: 105},
    {name: "Verstappen", team: "Red Bull", points: 195},
    {name: "Norris", team: "McLaren", points: 85},
    {name: "Perez", team: "Red Bull", points: 125},
    {name: "Hamilton", team: "Mercedes", points: 110},
    {name: "Piastri", team: "McLaren", points: 72}
];

function play() {
    for (const driver of drivers) {
        axios.post(endpoint, driver)
            .then(response => console.log("Created", response.status, response.data))


    }

}

function readAll() {
    const promise = axios.get(endpoint).then(response => console.log("Read", response.status, response.data))
    console.log(promise)
}

function updateHamilton() {
    const p = axios.put(endpoint + '/' + '6849e31974820f03e85dc089', {
        name: 'Hamilton',
        team: 'Mercedes',
        points: 50
    })
    return p;
}

//readAll()u
updateHamilton().then(readAll)
const win = axios.get(endpoint)
    .then(response => {

        console.log("Created", response.status, response.data)

        for (const driver of response.data) {
            console.log(driver)
            if (driver.name === 'Perez') {

                axios.put(endpoint + '/' + '6849e31974820f03e85dc088', {
                        name: 'Perez',
                        team: 'Red Bull',
                        points: driver.points + 25


                    }
                ).then(readAll)

            }
        }
    })
