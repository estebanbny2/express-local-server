var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import axios from "axios";
const endpoint = "https://crudcrud.com/api/bee8429066fb45f9938105be27b28886/drivers-await";
const drivers = [
    { name: "Grosjean", team: "Ferrari", points: 105 },
    { name: "Verstappen", team: "Red Bull", points: 195 },
    { name: "Norris", team: "McLaren", points: 85 },
    { name: "Perez", team: "Red Bull", points: 125 },
    { name: "Hamilton", team: "Mercedes", points: 110 },
    { name: "Piastri", team: "McLaren", points: 72 }
];
function play() {
    return __awaiter(this, void 0, void 0, function* () {
        for (const driver of drivers) {
            const response = yield axios.post(endpoint, driver);
            console.log("Created ", response.status, response.data);
        }
    });
}
function readAll() {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield axios.get(endpoint);
        console.log("Read", response.status, response.data);
        return response.data;
    });
}
function updateHamilton(name) {
    return __awaiter(this, void 0, void 0, function* () {
        const p = yield axios.put(endpoint + '/' + '684a8cd374820f03e85dc202', {
            name: name,
            team: 'Mercedes',
            points: 100
        });
        return p;
    });
}
function execute() {
    return __awaiter(this, void 0, void 0, function* () {
        yield updateHamilton("Jack");
        const list = yield readAll();
        list.map(d => d.team);
    });
}
execute();
//play()
//readAll()
