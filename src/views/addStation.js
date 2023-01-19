import m from "mithril";

import Auth from "../models/auth";
import Citites from "../models/cities";

import Stations from "../models/stations";

const addStation = {
    oncreate: () => {
        Citites.getAllCities();
        Citites.allCitites;
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
                                                                    placeholder:
                                                                        "Namn",
                                                                    value: Stations
                                                                        .newStation
                                                                        .name,
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
                                                                "select.form-select",
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
                                                                    placeholder:
                                                                        "Longitud",
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
                                                                    value: Stations
                                                                        .newStation
                                                                        .latitud,
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
                                                                "select.form-select",
                                                                [
                                                                    m(
                                                                        "option",
                                                                        "Välj stad"
                                                                    ),
                                                                    Citites.allCitites.map(
                                                                        (
                                                                            city
                                                                        ) => {
                                                                            console.log(
                                                                                city
                                                                            );

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
                                            ]
                                        ),

                                        m(
                                            "div.m-3.text-center",
                                            m("button.btn.btn-primary.btn-sm", [
                                                m("i.fa.fa-plus.fa-sm.me-2"),
                                                m(
                                                    "span.me-2",
                                                    "Lägg till station"
                                                ),
                                            ])
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

export default addStation;
