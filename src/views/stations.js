import m from "mithril";

import Stations from "../models/stations";

const stations = {
    oncreate: () => {
        Stations.getAllStations();
    },
    view: function () {
        return m("div.mt-5", [
            m("div.container-fluid", [
                m("div.row", [
                    m("div.col-lg-6", [m("h3.text-dark.mb-4", "Stationer")]),
                    m("div.col-lg-6", [
                        m("div.text-lg-end.dataTables_filter", [
                            m(
                                "button.btn.btn-success.shadow-sm.rounded",
                                {
                                    onclick: () => {
                                        m.route.set("/station/skapa");
                                    },
                                },
                                [
                                    m("i.fa.fa-plus.fa-sm.me-2"),
                                    m("span.me-2", "Lägg till station"),
                                ]
                            ),
                        ]),
                    ]),
                ]),
                m("div.card.shadow.bg-white", [
                    m("div.card-header.py-3", [
                        m(
                            "p.text-primary.m-0.font-weight-bold",
                            "Stationslista"
                        ),
                    ]),
                    m("div.card-body", [
                        m("div.row", [
                            m("div.col-md-6.text-nowrap", [
                                m("div.dataTables_length", [
                                    m("label.form-label", [
                                        m("span.me-2", "Visa"),
                                        m(
                                            "select.d-inline-block.form-select.form-select-sm",
                                            [
                                                m("option[value='10']", "10"),
                                                m("option[value='25']", "25"),
                                                m("option[value='50']", "50"),
                                                m("option[value='100']", "100"),
                                            ]
                                        ),
                                    ]),
                                ]),
                            ]),
                            m("div.col-md-6", [
                                m("div.text-md-end.dataTables_filter", [
                                    m("label.form-label", [
                                        m(
                                            "input.form-control.form-control-sm[type='search']",
                                            {
                                                placeholder: "Sök",
                                                "aria-controls": "dataTable",
                                            }
                                        ),
                                    ]),
                                ]),
                            ]),
                        ]),
                        m("div.table-responsive.table.table-hover.mt-2", [
                            m(
                                "table.table.table-striped.table-bordered.table-hover",
                                [
                                    m("thead", [
                                        m("tr", [
                                            m("th", "id"),
                                            m("th", "Stationsnamn"),
                                            m("th", "Stad"),
                                            m("th", "Zon"),
                                            m("th", "longitud"),
                                            m("th", "latitud"),
                                        ]),
                                    ]),
                                    m("tbody", [
                                        Stations.allStations &&
                                            Stations.allStations.map(
                                                (station) => {
                                                    return m(
                                                        "tr",
                                                        {
                                                            key: station.id,
                                                            onclick: () => {
                                                                console.log(
                                                                    "station",
                                                                    station
                                                                );

                                                                Stations.getStatioById(
                                                                    station.id
                                                                );

                                                                console.log(
                                                                    Stations.station
                                                                );
                                                            },
                                                        },
                                                        [
                                                            m("td", station.id),
                                                            m(
                                                                "td",
                                                                station.station_name
                                                            ),
                                                            m(
                                                                "td",
                                                                station.city_name
                                                            ),
                                                            m(
                                                                "td",
                                                                station.zone_type
                                                            ),
                                                            m(
                                                                "td",
                                                                station.longitude
                                                            ),
                                                            m(
                                                                "td",
                                                                station.latitude
                                                            ),
                                                        ]
                                                    );
                                                }
                                            ),
                                    ]),
                                ]
                            ),
                        ]),
                        m("div.row", [
                            m("div.col-md-6.align-self-center", [
                                m(
                                    "p.dataTables_info",
                                    `Visar 1 till 40 av ${Stations.allStations.length} rad(er)`
                                ),
                            ]),
                        ]),
                    ]),
                ]),
            ]),
        ]);
    },
};

export default stations;
