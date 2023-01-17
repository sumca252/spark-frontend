import m from "mithril";

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
                                        m("form", [
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
                                                                type: "email",
                                                                placeholder:
                                                                    "Lösenord",
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
                                                                type: "tel",
                                                                placeholder:
                                                                    "E-post adress",
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
                                                                type: "email",
                                                                placeholder:
                                                                    "Användarnamn",
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
                                                            }
                                                        ),
                                                    ]),
                                                ]),
                                            ]),
                                        ]),
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
