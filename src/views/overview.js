import m from "mithril";
import L from "leaflet";

import io from "socket.io-client";

import Auth from "../models/auth.js";

import "leaflet/dist/leaflet.css";
import "leaflet/dist/images/marker-icon.png";
import "leaflet/dist/images/marker-icon-2x.png";
import "leaflet/dist/images/marker-shadow.png";
import scooter from "../img/scooter.png";

import Stations from "../models/stations.js";
import Scooters from "../models/scooters.js";

let map;
let markers = {};

const scootersIcon = L.icon({
    iconUrl: scooter,
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

const showStationZones = (results) => {
    results.map((station) => {
        console.log(`../img/${station.zone_type.replace(" Station", "")}.png`);

        const markerIcon = L.icon({
            iconUrl: `../img/${station.zone_type.replace(" Station", "")}.png`,
            iconSize: [24, 24],
            iconAnchor: [12, 12],
            popupAnchor: [0, 0],
        });

        L.marker([station.latitude, station.longitude], {
            icon: markerIcon,
        })
            .bindPopup(
                `
                <p class="station">
                    Station type: ${station.zone_type.replace("Station", "")}
                </p>`
            )
            .addTo(map);
    });
};

const url = "http://localhost:1337";

const socket = io(url);

const showScooters = () => {
    socket.on("simulation", (data) => {
        data.map((scooter) => {
            console.log(scooter);
            if (markers[scooter.id]) {
                markers[scooter.id].setLatLng([
                    scooter.latitude,
                    scooter.longitude,
                ]);
            } else {
                markers[scooter.id] = L.marker(
                    [scooter.latitude, scooter.longitude],
                    {
                        icon: scootersIcon,
                    }
                )
                    .bindPopup(
                        `
                        <p class="scooter">
                            Scooter ID: ${scooter.id}
                        </p>
                        <p class="scooter">
                            Battery: ${scooter.battery}
                        </p>`
                    )
                    .addTo(map);
            }

            m.redraw();
        });
    });
};

const removeLayers = () => {
    map.eachLayer((layer) => {
        if (layer instanceof L.Marker) {
            map.removeLayer(layer);
        }
    });
};

const overview = {
    oninit: () => {
        Auth.checkAuth();
        Stations.getAllStations();
    },
    oncreate: () => {
        showMap();
    },
    view: () => {
        return m("div.container-fluid", [
            m("h3.text-dark.mb-4", "Översikt"),
            m("div.row.mb-4", [
                m("div.col-6", [
                    m(
                        "select.form-select",
                        {
                            onchange: (e) => {
                                e.target.selected = true;

                                const zones = e.target.value
                                    ? e.target.value.includes("Station")
                                    : false;

                                if (zones) {
                                    Stations.getStationByZoneType(
                                        e.target.value
                                    );

                                    removeLayers();
                                    showStationZones(Stations.station);
                                }

                                if (!zones) {
                                    removeLayers();

                                    showScooters();
                                }
                            },
                        },
                        [
                            m(
                                "option",
                                { value: "", disabled: true, selected: true },
                                "Välj typ av data att visa"
                            ),
                            m("option", { value: "Scooters" }, "Scooters"),
                            m(
                                "option",
                                { value: "Charging Station" },
                                "Charging Station"
                            ),
                            m(
                                "option",
                                { value: "Parking Station" },
                                "Parking Station"
                            ),
                            m(
                                "option",
                                { value: "Bike Station" },
                                "Bike Station"
                            ),
                            m(
                                "option",
                                { value: "Maintenance Station" },
                                "Maintenance Station"
                            ),
                        ]
                    ),
                ]),
            ]),
            m("div.map#map", { style: "height: 400px" }),
        ]);
    },
};

export default overview;
