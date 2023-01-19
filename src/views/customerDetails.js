import m from "mithril";

import Customers from "../models/customers";

const CustomerDetails = {
    oncreate: (vnode) => {
        Customers.getCustomerById(vnode.attrs.id);
    },
    view: function (vnode) {
        return m("div.mt-5", [
            m("div.container-fluid", [
                m("h3.text-dark.mb-4", "Kund Detaljer"),
                m("div.card.shadow.bg-white", [
                    m("div.card-header.py-3", [
                        m(
                            "p.text-primary.m-0.font-weight-bold",
                            "Kund Detaljer"
                        ),
                    ]),
                    m("div.card-body", [
                        m("div.table-responsive.table.table-hover.mt-2", [
                            m(
                                "table.table.table-striped.table-bordered.table-hover",
                                [
                                    m("thead", [
                                        m("tr", [
                                            m("th", "#"),
                                            m("th", "Förnamn"),
                                            m("th", "Efternamn"),
                                            m("th", "Användarnamn"),
                                            m("th", "E-post"),
                                            m("th", "Telefon"),
                                            m("th", "Roll"),
                                        ]),
                                    ]),
                                    m("tbody", [
                                        Customers.customer &&
                                            Customers.customer.map(
                                                (customer) => {
                                                    return m("tr.text-center", [
                                                        m("td", customer.id),
                                                        m(
                                                            "td",
                                                            customer.user
                                                                .first_name
                                                        ),
                                                        m(
                                                            "td",
                                                            customer.user
                                                                .last_name
                                                        ),
                                                        m(
                                                            "td",
                                                            customer.user
                                                                .username
                                                        ),
                                                        m(
                                                            "td",
                                                            customer.user.email
                                                        ),
                                                        m(
                                                            "td",
                                                            customer.user.phone
                                                        ),
                                                        m(
                                                            "td",
                                                            customer.user
                                                                .role ===
                                                                "Customer"
                                                                ? "Kund"
                                                                : ""
                                                        ),
                                                    ]);
                                                }
                                            ),
                                    ]),
                                ]
                            ),
                        ]),
                    ]),
                ]),
            ]),
        ]);
    },
};

export default CustomerDetails;
