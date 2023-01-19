import m from "mithril";

import Customers from "../models/customers.js";

const editCustomer = {
    oninit: (vnode) => {
        Customers.getCustomerById(vnode.attrs.id);
        console.log("edit", Customers.customer[0]);
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
                                                    // Customers.updateUser();
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
                                                                        .customer[0]
                                                                        .user
                                                                        .first_name,
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
                                                                        .customer[0]
                                                                        .user
                                                                        .last_name,
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
                                                                        .customer[0]
                                                                        .user
                                                                        .email,
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
                                                                        .customer[0]
                                                                        .user
                                                                        .username,
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
                                                                        .customer[0]
                                                                        .user
                                                                        .phone,
                                                                }
                                                            ),
                                                        ]),
                                                    ]),
                                                ]),
                                            ]
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
