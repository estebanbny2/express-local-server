import axios from "axios";

interface Driver {
    name: string;
    team : string;
    points : number;
}
const endpoint = "https://crudcrud.com/api/bee8429066fb45f9938105be27b28886/drivers-await"
const drivers : Driver[] = [
    {name: "Grosjean", team: "Ferrari", points: 105},
    {name: "Verstappen", team: "Red Bull", points: 195},
    {name: "Norris", team: "McLaren", points: 85},
    {name: "Perez", team: "Red Bull", points: 125},
    {name: "Hamilton", team: "Mercedes", points: 110},
    {name: "Piastri", team: "McLaren", points: 72}
];

async function play(){
    for (const driver of drivers){
        const response = await axios.post(endpoint, driver)
        console.log("Created ", response.status, response.data)
    }
}
async function readAll(){
    const response = await axios.get<Driver[]>(endpoint)
    console.log("Read", response.status, response.data)
    return response.data

}
async function updateHamilton(name: string){
    const p = await axios.put(endpoint + '/' + '684a8cd374820f03e85dc202', {
        name: name,
        team: 'Mercedes',
        points: 100


    })
    return p;
}


async function execute(){
    await updateHamilton("Jack")
     const list = await readAll()
    list.map(d => d.team)
}

 execute()

//play()
//readAll()
