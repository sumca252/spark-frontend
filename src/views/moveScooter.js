import m from "mithril";
import Scooters from "../models/scooters";

const moveScooter = {
    oncreate: (vnode) => {
        Scooters.getScooterById(vnode.attrs.id);
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
                                                    Scooters.updateScooter();
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
                                                                "input.form-control",
                                                                {
                                                                    type: "text",
                                                                    placeholder:
                                                                        "Sparkcykel ID",
                                                                    value: Scooters
                                                                        .scooter
                                                                        .id,
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
                                                                "select.form-select",
                                                                [
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
                                                                        .scooter
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
                                                                        .scooter
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
                                                                "Pris per minut"
                                                            ),
                                                            m(
                                                                "select.form-select",
                                                                [
                                                                    m(
                                                                        "option",
                                                                        {
                                                                            value: "1",
                                                                        },
                                                                        "1 kr"
                                                                    ),
                                                                ]
                                                            ),
                                                        ]),
                                                    ]),
                                                    m("div.col", [
                                                        m("div.mb-3", [
                                                            m(
                                                                "label.form-label",
                                                                "Hastighet"
                                                            ),
                                                            m(
                                                                "input.form-control",
                                                                {
                                                                    type: "text",
                                                                    placeholder:
                                                                        "Hastighet",
                                                                    value: Scooters
                                                                        .scooter
                                                                        .speed,
                                                                }
                                                            ),
                                                        ]),
                                                    ]),
                                                ]),
                                            ]
                                        ),

                                        m(
                                            "div.m-3.text-center",
                                            m(
                                                "button.btn.btn-primary.btn-sm",
                                                "Spara ändringar"
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

export default moveScooter;
