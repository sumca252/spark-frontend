import m from "mithril";

import Auth from "../models/auth";
import User from "../models/user";

const settings = {
    view: () => {
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
                                                onsubmit: (e) => {
                                                    e.preventDefault();
                                                    User.updateUser();
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
                                                                    oninput: (
                                                                        e
                                                                    ) => {
                                                                        Auth.user.firstName =
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
                                                                    value: Auth
                                                                        .user
                                                                        .lastName,
                                                                    oninput: (
                                                                        e
                                                                    ) => {
                                                                        Auth.user.lastName =
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
                                                                    oninput: (
                                                                        e
                                                                    ) => {
                                                                        Auth.user.password =
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
                                                                    oninput: (
                                                                        e
                                                                    ) => {
                                                                        Auth.user.email =
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
                                                                    value: Auth
                                                                        .user
                                                                        .username,
                                                                    oninput: (
                                                                        e
                                                                    ) => {
                                                                        Auth.user.username =
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
                                                                    value: Auth
                                                                        .user
                                                                        .phone,
                                                                    oninput: (
                                                                        e
                                                                    ) => {
                                                                        Auth.user.phone =
                                                                            e.target.value;
                                                                    },
                                                                }
                                                            ),
                                                        ]),
                                                    ]),
                                                ]),
                                                m(
                                                    "div.m-3.text-center",
                                                    m(
                                                        "input[type=submit][value=Spara ändringar].btn.btn-primary.btn-sm"
                                                    )
                                                ),
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

export default settings;
