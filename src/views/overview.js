import m from "mithril";
import L from "leaflet";

import Auth from "../models/auth.js";

import "leaflet/dist/leaflet.css";
import "leaflet/dist/images/marker-icon.png";
import "leaflet/dist/images/marker-icon-2x.png";
import "leaflet/dist/images/marker-shadow.png";

import Stations from "../models/stations.js";
import Scooters from "../models/scooters.js";

let map;

const scootersIcon = L.icon({
    iconUrl: "https://img.icons8.com/ios/50/000000/scooter.png",
    iconSize: [24, 24],
    iconAnchor: [12, 12],
    popupAnchor: [0, 0],
});

const showMap = () => {
    map = L.map("map").setView([62.5, 15.5], 6);

    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution:
            '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(map);
};

const showScooters = () => {
    Scooters.scooter.map((scooter) => {
        L.marker([scooter.latitude, scooter.longitude], {
            icon: scootersIcon,
        }).addTo(map);
    });
};

const overview = {
    oninit: () => {
        Auth.checkAuth();
        Stations.getAllStations();
        Scooters.getAllScooters();
    },
    oncreate: () => {
        showMap();
        showScooters();
    },
    view: () => {
        return m("div.container-fluid", [
            m("h3.text-dark.mb-4", "Översikt"),
            m("div.map#map", { style: "height: 400px" }),
        ]);
    },
};

export default overview;
