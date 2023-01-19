import m from "mithril";

import Scooters from "../models/scooters";

const scooters = {
    oninit: () => {
        Scooters.getAllScooters();
    },
    view: function () {
        return m("div.mt-5", [
            m("div.container-fluid", [
                m("div.row", [
                    m("div.col-lg-6", [m("h3.text-dark.mb-4", "Sparkcyklar")]),
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
                                            m("th", "Batterinivå (%)"),
                                            m("th", "Status"),
                                            m("th", "longitud"),
                                            m("th", "latitud"),
                                            m("th", "startavgift"),
                                            m("th", "minutpris"),
                                            m("th", "parkeringskostnad"),
                                            m("th", "Åtgärd"),
                                        ]),
                                    ]),
                                    m("tbody", [
                                        Scooters.allScooters.map((scooter) => {
                                            return m("tr", [
                                                m("td", scooter.id),
                                                m("td", scooter.battery),
                                                m("td", scooter.status.status),
                                                m("td", scooter.longitude),
                                                m("td", scooter.latitude),
                                                m(
                                                    "td",
                                                    scooter.price.start_cost
                                                ),
                                                m(
                                                    "td",
                                                    scooter.price.travel_cost
                                                ),
                                                m(
                                                    "td",
                                                    scooter.price.parking_cost
                                                ),

                                                m("td", [
                                                    m(
                                                        "a.btn.btn-success.btn-sm.me-2",
                                                        {
                                                            onclick: () => {
                                                                m.route.set(
                                                                    `/sparkcyklar/${scooter.id}`
                                                                );
                                                            },
                                                        },
                                                        m("i.fa.fa-eye")
                                                    ),
                                                ]),
                                            ]);
                                        }),
                                    ]),

                                    m("tfoot", [
                                        m("tr", [
                                            m("th", "id"),
                                            m("th", "Batterinivå (%)"),
                                            m("th", "Status"),
                                            m("th", "longitud"),
                                            m("th", "latitud"),
                                            m("th", "startavgift"),
                                            m("th", "minutpris"),
                                            m("th", "parkeringskostnad"),
                                            m("th", "Åtgärd"),
                                        ]),
                                    ]),
                                ]
                            ),
                        ]),
                        m("div.row", [
                            m("div.col-md-6.align-self-center", [
                                m(
                                    "p.dataTables_info",
                                    `Visar 1 till ${Scooters.allScooters.length} av ${Scooters.allScooters.length} scooters`
                                ),
                            ]),
                        ]),
                    ]),
                ]),
            ]),
        ]);
    },
};

export default scooters;
