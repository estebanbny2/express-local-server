import axios from "axios";
import TurndownService from "turndown";
import {log} from "./log.js";

function fetchStuff() {

    const x = axios.get("http://www.robusta.build").then(res => res.data)
        .then(html => new TurndownService().turndown(html))
        .then(log)

    console.log(x)

}

fetchStuff();
