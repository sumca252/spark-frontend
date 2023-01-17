import m from "mithril";
import Auth from "../models/auth";

/* import Stations from "../models/stations.js";
import Scooters from "../models/scooters.js";
 */

const overview = {
    oninit: () => {
        /* Stations.getAllStations();
        Scooters.getAllScooters(); */
    },
    view: () => {
        return m("div.container-fluid", [
            m("h3.text-dark.mb-4", "Översikt"),
            m("div#map", { style: "height: 400px" }),
        ]);
    },
};

export default overview;
