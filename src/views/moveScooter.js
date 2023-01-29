const m = require("mithril");
const Scooters = require("../models/scooters");
const Stations = require("../models/stations");

const moveScooter = {
    oninit: (vnode) => {
        Scooters.getScooterById(vnode.attrs.id);
        Stations.getAllStations();
    },
    view: function () {
        return m("div.mt-5", [
            m("div.container-fluid", [
                m("h3.text-dark.mb-4", "Flytta sparkcykel"),
                m("div.row.mb-3", [
                    m("div.col-lg", [
                        m("div.row", [
                            m("div.col", [
                                m("div.card.shadow.mb-3", [
                                    m("div.card-header.py-3", [
                                        m(
                                            "p.text-primary.m-0.font-weight-bold",
                                            "Sparkcykel"
                                        ),
                                    ]),
                                    m("div.card-body", [
                                        m(
                                            "form",
                                            {
                                                onsubmit: function (e) {
                                                    e.preventDefault();
                                                    Scooters.moveScooter();
                                                },
                                            },
                                            [
                                                m("div.row", [
                                                    m("div.col", [
                                                        m("div.mb-3", [
                                                            m(
                                                                "label.form-label",
                                                                "Sparkcykel ID"
                                                            ),
                                                            m(
                                                                "input.form-control[readonly]",
                                                                {
                                                                    type: "text",
                                                                    placeholder:
                                                                        "Sparkcykel ID",
                                                                    value: Scooters
                                                                        .updateScooter
                                                                        .scooterId,
                                                                }
                                                            ),
                                                        ]),
                                                    ]),
                                                    m("div.col", [
                                                        m("div.mb-3", [
                                                            m(
                                                                "label.form-label",
                                                                "Status ID"
                                                            ),
                                                            m(
                                                                "select[required].form-select[name=statusId]",
                                                                {
                                                                    onchange: (
                                                                        e
                                                                    ) => {
                                                                        Scooters.updateScooter.statusId =
                                                                            e.target.value;
                                                                    },
                                                                },
                                                                [
                                                                    m(
                                                                        "option",
                                                                        "Välj status"
                                                                    ),
                                                                    m(
                                                                        "option",
                                                                        {
                                                                            value: "1",
                                                                        },
                                                                        "Tillgänglig"
                                                                    ),
                                                                    m(
                                                                        "option",
                                                                        {
                                                                            value: "2",
                                                                        },
                                                                        "Inte tillgänglig"
                                                                    ),
                                                                    m(
                                                                        "option",
                                                                        {
                                                                            value: "3",
                                                                        },
                                                                        "Underhållas"
                                                                    ),
                                                                    m(
                                                                        "option",
                                                                        {
                                                                            value: "4",
                                                                        },
                                                                        "Laddas"
                                                                    ),
                                                                    m(
                                                                        "option",
                                                                        {
                                                                            value: "5",
                                                                        },
                                                                        "Parkeras"
                                                                    ),
                                                                    m(
                                                                        "option",
                                                                        {
                                                                            value: "6",
                                                                        },
                                                                        "Raderade"
                                                                    ),
                                                                    m(
                                                                        "option",
                                                                        {
                                                                            value: "7",
                                                                        },
                                                                        "Körs"
                                                                    ),
                                                                    m(
                                                                        "option",
                                                                        {
                                                                            value: "8",
                                                                        },
                                                                        "Uthyrd"
                                                                    ),
                                                                ]
                                                            ),
                                                        ]),
                                                    ]),
                                                ]),
                                                m("div.row", [
                                                    m("div.col", [
                                                        m("div.mb-3", [
                                                            m(
                                                                "label.form-label",
                                                                "Longitud"
                                                            ),
                                                            m(
                                                                "input.form-control",
                                                                {
                                                                    type: "text",
                                                                    placeholder:
                                                                        "Longitud",
                                                                    value: Scooters
                                                                        .updateScooter
                                                                        .longitude,
                                                                }
                                                            ),
                                                        ]),
                                                    ]),
                                                    m("div.col", [
                                                        m("div.mb-3", [
                                                            m(
                                                                "label.form-label",
                                                                "Latitud"
                                                            ),
                                                            m(
                                                                "input.form-control",
                                                                {
                                                                    type: "text",
                                                                    placeholder:
                                                                        "Latitud",
                                                                    value: Scooters
                                                                        .updateScooter
                                                                        .latitude,
                                                                }
                                                            ),
                                                        ]),
                                                    ]),
                                                ]),
                                                m("div.row", [
                                                    m("div.col", [
                                                        m("div.mb-3", [
                                                            m(
                                                                "label.form-label",
                                                                "Stad"
                                                            ),
                                                            m(
                                                                "select[required].form-select[name=stationId]",
                                                                {
                                                                    onchange: (
                                                                        e
                                                                    ) => {
                                                                        Scooters.updateScooter.stationId =
                                                                            e.target.value;
                                                                    },
                                                                },
                                                                [
                                                                    m(
                                                                        "option",
                                                                        "Välj station att flytta sparkcykeln till"
                                                                    ),
                                                                    Stations.allStations &&
                                                                        Stations.allStations.map(
                                                                            (
                                                                                station
                                                                            ) => {
                                                                                return m(
                                                                                    "option",
                                                                                    {
                                                                                        value: station.id,
                                                                                    },
                                                                                    station.station_name
                                                                                );
                                                                            }
                                                                        ),
                                                                ]
                                                            ),
                                                        ]),
                                                    ]),
                                                ]),
                                            ],
                                            m(
                                                "div.m-3.text-center",
                                                m(
                                                    "input[type=submit][value=Spara ändringar].btn.btn-primary.btn-sm"
                                                )
                                            )
                                        ),
                                    ]),
                                ]),
                            ]),
                        ]),
                    ]),
                ]),
            ]),
        ]);
    },
};

module.exports = moveScooter;
