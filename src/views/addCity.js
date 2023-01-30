const m = require("mithril");

const Cities = require("../models/cities.js");

const addCity = {
    view: function () {
        return m("div.mt-5", [
            m("div.container-fluid", [
                m("h3.text-dark.mb-4", "Lägg till stad"),
                m("div.row.mb-3", [
                    m("div.col-lg", [
                        m("div.row", [
                            m("div.col", [
                                m("div.card.shadow.mb-3", [
                                    m("div.card-header.py-3", [
                                        m(
                                            "p.text-primary.m-0.font-weight-bold",
                                            "Stad"
                                        ),
                                    ]),
                                    m("div.card-body", [
                                        m(
                                            "form",
                                            {
                                                onsubmit: function (e) {
                                                    e.preventDefault();
                                                    Cities.addCity();
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
                                                                    name: "cityName",
                                                                    placeholder:
                                                                        "Namn",
                                                                    oninput: (
                                                                        e
                                                                    ) => {
                                                                        Cities.newCity.name =
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
                                                                "Land"
                                                            ),
                                                            m(
                                                                "input.form-control",
                                                                {
                                                                    type: "text",
                                                                    name: "country",
                                                                    placeholder:
                                                                        "Land",
                                                                    oninput: (
                                                                        e
                                                                    ) => {
                                                                        Cities.newCity.country =
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
                                                                        Cities.newCity.longitude =
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
                                                                        Cities.newCity.latitude =
                                                                            e.target.value;
                                                                    },
                                                                }
                                                            ),
                                                        ]),
                                                    ]),
                                                ]),
                                                m("div.row", [
                                                    m("div.col-12", [
                                                        m("div.mb-3", [
                                                            m(
                                                                "label.form-label",
                                                                "Yta (km2)"
                                                            ),
                                                            m(
                                                                "input.form-control",
                                                                {
                                                                    type: "text",
                                                                    name: "area",
                                                                    placeholder:
                                                                        "Yta (km2)",
                                                                    oninput: (
                                                                        e
                                                                    ) => {
                                                                        Cities.newCity.area =
                                                                            e.target.value;
                                                                    },
                                                                }
                                                            ),
                                                        ]),
                                                    ]),
                                                ]),
                                            ],
                                            m(
                                                "div.m-3.text-center",
                                                m(
                                                    "input[type=submit][value=Lägg till stad].btn.btn-primary.btn-sm"
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

module.exports = addCity;
