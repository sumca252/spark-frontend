import m from "mithril";

import Customers from "../models/customers.js";

const editCustomer = {
    oninit: (vnode) => {
        Customers.getCustomerById(vnode.attrs.id);
    },
    view: () => {
        return m("div.mt-5", [
            m("div.container-fluid", [
                m("h3.text-dark.mb-4", "Kund Detaljer"),
                m("div.row.mb-3", [
                    m("div.col-lg", [
                        m("div.row", [
                            m("div.col", [
                                m("div.card.shadow.mb-3", [
                                    m("div.card-header.py-3", [
                                        m(
                                            "p.text-primary.m-0.font-weight-bold",
                                            "Personuppgifter"
                                        ),
                                    ]),
                                    m("div.card-body", [
                                        m(
                                            "form",
                                            {
                                                onsubmit: function (e) {
                                                    e.preventDefault();
                                                    Customers.updateCustomer();
                                                },
                                            },
                                            [
                                                m("div.row", [
                                                    m("div.col", [
                                                        m("div.mb-3", [
                                                            m(
                                                                "label.form-label",
                                                                "Förnamn"
                                                            ),
                                                            m(
                                                                "input.form-control",
                                                                {
                                                                    type: "text",
                                                                    placeholder:
                                                                        "Förnamn",
                                                                    value: Customers
                                                                        .newCustomer
                                                                        .first_name,
                                                                    oninput: (
                                                                        e
                                                                    ) => {
                                                                        Customers.newCustomer.first_name =
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
                                                                "Efternamn"
                                                            ),
                                                            m(
                                                                "input.form-control",
                                                                {
                                                                    type: "text",
                                                                    placeholder:
                                                                        "Efternamn",
                                                                    value: Customers
                                                                        .newCustomer
                                                                        .last_name,

                                                                    oninput: (
                                                                        e
                                                                    ) => {
                                                                        Customers.newCustomer.last_name =
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
                                                                "E-post adress"
                                                            ),
                                                            m(
                                                                "input.form-control",
                                                                {
                                                                    type: "tel",
                                                                    placeholder:
                                                                        "E-post adress",
                                                                    value: Customers
                                                                        .newCustomer
                                                                        .email,
                                                                    oninput: (
                                                                        e
                                                                    ) => {
                                                                        Customers.newCustomer.email =
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
                                                                "Användarnamn"
                                                            ),
                                                            m(
                                                                "input.form-control",
                                                                {
                                                                    type: "text",
                                                                    placeholder:
                                                                        "Användarnamn",
                                                                    value: Customers
                                                                        .newCustomer
                                                                        .username,

                                                                    oninput: (
                                                                        e
                                                                    ) => {
                                                                        Customers.newCustomer.username =
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
                                                                "Telefonnummer"
                                                            ),
                                                            m(
                                                                "input.form-control",
                                                                {
                                                                    type: "tel",
                                                                    placeholder:
                                                                        "Telefonnummer",
                                                                    value: Customers
                                                                        .newCustomer
                                                                        .phone,
                                                                    oninput: (
                                                                        e
                                                                    ) => {
                                                                        Customers.newCustomer.phone =
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

export default editCustomer;
