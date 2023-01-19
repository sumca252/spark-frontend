import m from "mithril";

import Customers from "../models/customers";

const customers = {
    oncreate: () => {
        Customers.getAllCustomers();
    },
    view: () => {
        return m("div.mt-5", [
            m("div.container-fluid", [
                m("h3.text-dark.mb-4", "Kunder"),
                m("div.card.shadow.bg-white", [
                    m("div.card-header.py-3", [
                        m("p.text-primary.m-0.font-weight-bold", "Kundlista"),
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
                                            m("th", "#"),
                                            m("th", "Förnamn"),
                                            m("th", "Efternamn"),
                                            m("th", "Användarnamn"),
                                            m("th", "E-post"),
                                            m("th", "Telefon"),
                                            m("th", "Roll"),
                                            m("th", "Åtgärd"),
                                        ]),
                                    ]),
                                    m("tbody", [
                                        Customers.allCustomers &&
                                            Customers.allCustomers.map(
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
                                                        m("td", [
                                                            m(
                                                                "a.btn.btn-success.btn-sm.me-2",
                                                                {
                                                                    href: `#!/kunder/granska/${customer.id}`,
                                                                },
                                                                m("i.fa.fa-eye")
                                                            ),

                                                            m(
                                                                "a.btn.btn-info.btn-sm.me-2",
                                                                {
                                                                    href: `#!/kunder/redigera/${customer.id}`,
                                                                },
                                                                m(
                                                                    "i.fa.fa-edit"
                                                                )
                                                            ),
                                                        ]),
                                                    ]);
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
                                    `Visar 1 till ${Customers.allCustomers.length} av ${Customers.allCustomers.length} rad(er)`
                                ),
                            ]),
                        ]),
                    ]),
                ]),
            ]),
        ]);
    },
};

export default customers;
