const m = require("mithril");

const Cities = require("../models/cities.js");

const cities = {
    oncreate: () => {
        Cities.getAllCities();
    },
    view: function () {
        return m("div.mt-5", [
            m("div.container-fluid", [
                m("div.row", [
                    m("div.col-lg-6", [m("h3.text-dark.mb-4", "Städer")]),
                    m("div.col-lg-6", [
                        m("div.text-lg-end.dataTables_filter", [
                            m(
                                "button.btn.btn-success.shadow-sm.rounded",
                                {
                                    onclick: () => {
                                        m.route.set("/stader/skapa");
                                    },
                                },
                                [
                                    m("i.fa.fa-plus.fa-sm.me-2"),
                                    m("span.me-2", "Lägg till stad"),
                                ]
                            ),
                        ]),
                    ]),
                ]),
                m("div.card.shadow.bg-white", [
                    m("div.card-header.py-3", [
                        m("p.text-primary.m-0.font-weight-bold", "Städer"),
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
                                                m("option[value='25']", "20"),
                                                m("option[value='50']", "30"),
                                                m("option[value='100']", "40"),
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
                                            m("th", "#"),
                                            m("th", "Stad"),
                                            m("th", "Land"),
                                            m("th", "longitud"),
                                            m("th", "latitud"),
                                            m("th", "Yta"),
                                        ]),
                                    ]),
                                    m("tbody", [
                                        Cities.allCitites &&
                                            Cities.allCitites.map((city) => {
                                                return m(
                                                    "tr.citydata",
                                                    {
                                                        key: city.id,
                                                        onclick: () => {
                                                            Cities.getCityById(
                                                                city.id
                                                            );

                                                            console.log(
                                                                Cities.city
                                                            );
                                                        },
                                                    },
                                                    [
                                                        m("td", city.id),
                                                        m("td", city.name),
                                                        m("td", city.country),
                                                        m("td", city.longitude),
                                                        m("td", city.latitude),
                                                        m(
                                                            "td",
                                                            `${city.area} km²`
                                                        ),
                                                    ]
                                                );
                                            }),
                                    ]),
                                ]
                            ),
                        ]),
                        m("div.row", [
                            m("div.col-md-6.align-self-center", [
                                m(
                                    "p.dataTables_info",
                                    "Visar 1 till 10 av 10 rad(er)"
                                ),
                            ]),
                        ]),
                    ]),
                ]),
            ]),
        ]);
    },
};

module.exports = cities;
