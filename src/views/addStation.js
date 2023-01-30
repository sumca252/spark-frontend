const m = require("mithril");

const Cities = require("../models/cities");
const Stations = require("../models/stations");

const addStation = {
    oninit: () => {
        Cities.getAllCities();
    },
    view: function () {
        return m("div.mt-5", [
            m("div.container-fluid", [
                m("h3.text-dark.mb-4", "Lägg till station"),
                m("div.row.mb-3", [
                    m("div.col-lg", [
                        m("div.row", [
                            m("div.col", [
                                m("div.card.shadow.mb-3", [
                                    m("div.card-header.py-3", [
                                        m(
                                            "p.text-primary.m-0.font-weight-bold",
                                            "Station"
                                        ),
                                    ]),
                                    m("div.card-body", [
                                        m(
                                            "form",
                                            {
                                                onsubmit: function (e) {
                                                    e.preventDefault();
                                                    Stations.addStation();
                                                },
                                            },
                                            [
                                                m("div.row", [
                                                    m("div.col", [
                                                        m("div.mb-3", [
                                                            m(
                                                                "label.form-label",
                                                                "Namn"
                                                            ),
                                                            m(
                                                                "input.form-control",
                                                                {
                                                                    type: "text",
                                                                    name: "stationName",
                                                                    placeholder:
                                                                        "Namn",
                                                                    oninput: (
                                                                        e
                                                                    ) => {
                                                                        Stations.newStation.name =
                                                                            e.target.value;
                                                                    },
                                                                }
                                                            ),
                                                        ]),
                                                    ]),
                                                    m("div.col", [
                                                        m("div.mb-3", [
                                                            m(
                                                                "label.form-label",
                                                                "Zone"
                                                            ),
                                                            m(
                                                                "select.form-select[name=zoneId]",
                                                                {
                                                                    onchange: (
                                                                        e
                                                                    ) => {
                                                                        Stations.newStation.zoneId =
                                                                            e.target.value;
                                                                    },
                                                                },
                                                                [
                                                                    m(
                                                                        "option",
                                                                        "Välj zon"
                                                                    ),
                                                                    m(
                                                                        "option",
                                                                        {
                                                                            value: "1",
                                                                        },
                                                                        "Charging Station"
                                                                    ),
                                                                    m(
                                                                        "option",
                                                                        {
                                                                            value: "2",
                                                                        },
                                                                        "Parking station"
                                                                    ),
                                                                    m(
                                                                        "option",
                                                                        {
                                                                            value: "3",
                                                                        },
                                                                        "Bike station"
                                                                    ),
                                                                    m(
                                                                        "option",
                                                                        {
                                                                            value: "4",
                                                                        },
                                                                        "Maintainance station"
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
                                                                    name: "longitude",
                                                                    placeholder:
                                                                        "Longitud",
                                                                    oninput: (
                                                                        e
                                                                    ) => {
                                                                        Stations.newStation.longitude =
                                                                            e.target.value;
                                                                    },
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
                                                                    name: "latitude",
                                                                    placeholder:
                                                                        "Latitud",
                                                                    oninput: (
                                                                        e
                                                                    ) => {
                                                                        Stations.newStation.latitude =
                                                                            e.target.value;
                                                                    },
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
                                                                "select.form-select[name=cityId]",
                                                                {
                                                                    onchange: (
                                                                        e
                                                                    ) => {
                                                                        Stations.newStation.cityId =
                                                                            e.target.value;
                                                                    },
                                                                },
                                                                [
                                                                    m(
                                                                        "option",
                                                                        "Välj stad"
                                                                    ),
                                                                    Cities.allCitites &&
                                                                        Cities.allCitites.map(
                                                                            (
                                                                                city
                                                                            ) => {
                                                                                return m(
                                                                                    "option",
                                                                                    {
                                                                                        value: city.id,
                                                                                    },
                                                                                    city.name
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
                                                    "input[type=submit][value=Lägg till station].btn.btn-primary"
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

module.exports = addStation;
