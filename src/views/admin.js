import m from "mithril";

import Admins from "../models/admins.js";
import Auth from "../models/auth.js";

const admin = {
    oncreate: () => {
        Admins.getAllAdmins();
    },
    view: function () {
        return m("div.mt-5", [
            m("div.container-fluid", [
                m("h3.text-dark.mb-4", "Adminstratörer"),
                m("div.card.shadow.bg-white", [
                    m("div.card-header.py-3", [
                        m("p.text-primary.m-0.font-weight-bold", "Adminslista"),
                    ]),
                    m("div.card-body", [
                        m("div.row", [
                            m("div.col-md-6.text-nowrap", [
                                m("div.dataTables_length", [
                                    m("label.form-label", [
                                        m("span.me-2", "Visa"),
                                        m(
                                            "select.d-inline-block.form-select.form-select-sm",
                                            [m("option[value='5']", "5")]
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
                                        Admins.allAdmins &&
                                            Admins.allAdmins.map((admin) => {
                                                return m("tr.text-center", [
                                                    m("td", admin.id),
                                                    m("td", admin.first_name),
                                                    m("td", admin.last_name),
                                                    m("td", admin.username),
                                                    m("td", admin.email),
                                                    m("td", admin.phone),
                                                    m("td", admin.role),

                                                    m("td", [
                                                        m(
                                                            "a.btn.btn-secondary.btn-sm.me-2",
                                                            {
                                                                href: `/admin/${admin.id}`,
                                                            },
                                                            m("i.fa.fa-eye")
                                                        ),
                                                        m(
                                                            "a.btn.btn-info.btn-sm.me-2",
                                                            {
                                                                href: `/admin/${admin.id}/edit`,
                                                            },
                                                            m("i.fa.fa-edit")
                                                        ),

                                                        m(
                                                            "a.btn.btn-danger.btn-sm",
                                                            {
                                                                href: `/admin/${admin.id}/delete`,
                                                            },
                                                            m("i.fa.fa-trash")
                                                        ),
                                                    ]),
                                                ]);
                                            }),
                                    ]),
                                ]
                            ),
                        ]),
                        m("div.row", [
                            m("div.col-md-6.align-self-center", [
                                m(
                                    "p.dataTables_info",
                                    `Visar 1 till ${Admins.allAdmins.length} av ${Admins.allAdmins.length} rad(er)`
                                ),
                            ]),
                        ]),
                    ]),
                ]),
            ]),
        ]);
    },
};

export default admin;
