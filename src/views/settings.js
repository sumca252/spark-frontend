import m from "mithril";

import Auth from "../models/auth";

const settings = {
    view: function () {
        return m("div.mt-5", [
            m("div.container-fluid", [
                m("h3.text-dark.mb-4", "Profil"),
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
                                                    Auth.updateUser();
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
                                                                    value: Auth
                                                                        .user
                                                                        .firstName,
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
                                                                    value: Auth
                                                                        .user
                                                                        .lastName,
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
                                                                "Lösenord"
                                                            ),
                                                            m(
                                                                "input.form-control",
                                                                {
                                                                    type: "password",
                                                                    placeholder:
                                                                        "Lösenord",
                                                                    value: Auth
                                                                        .user
                                                                        .password,
                                                                }
                                                            ),
                                                        ]),
                                                    ]),
                                                    m("div.col", [
                                                        m("div.mb-3", [
                                                            m(
                                                                "label.form-label",
                                                                "E-post adress"
                                                            ),
                                                            m(
                                                                "input.form-control",
                                                                {
                                                                    type: "email",
                                                                    placeholder:
                                                                        "E-post adress",
                                                                    value: Auth
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
                                                                    value: Auth
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
                                                                    value: Auth
                                                                        .user
                                                                        .phone,
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

export default settings;
