import Auth from "../models/auth";
import m from "mithril";

const login = {
    view: () => {
        return m("div.container.flex-grow-1", [
            m("div.row.justify-content-center ", [
                m("div.col-md-9.col-lg-12.col-xl-10", [
                    m("div.card.shadow-lg.o-hidden.my-5.border-0", [
                        m("div.card-body.p-0", [
                            m("div.row", [
                                m("div.col-lg-6.d-none.d-lg-flex", [
                                    m("div.p-5", [
                                        m("div.text-center", [
                                            m(
                                                "h4.text-dark.mb-4",
                                                "Logga in med ditt konto!"
                                            ),
                                        ]),
                                        m(
                                            "form.user",
                                            {
                                                onsubmit: (e) => {
                                                    e.preventDefault();
                                                    Auth.login();
                                                },
                                            },
                                            [
                                                m("div.form-group.mb-3", [
                                                    m("label.w-100", [
                                                        "E-post adress",
                                                        m(
                                                            "input.form-control.form-control-user.mt-2",
                                                            {
                                                                type: "email",
                                                                id: "email",
                                                                placeholder:
                                                                    "E-post adress",
                                                                value: Auth.user
                                                                    .email,
                                                                oninput: (e) =>
                                                                    (Auth.user.email =
                                                                        e.target.value),
                                                            }
                                                        ),
                                                    ]),
                                                ]),
                                                m("div.form-group.mb-3", [
                                                    m("label.w-100", [
                                                        "Lösenord",
                                                        m(
                                                            "input.form-control form-control-user.mt-2",
                                                            {
                                                                type: "password",
                                                                id: "password",
                                                                placeholder:
                                                                    "Lösenord",
                                                                value: Auth.user
                                                                    .password,
                                                                oninput: (e) =>
                                                                    (Auth.user.password =
                                                                        e.target.value),
                                                            }
                                                        ),
                                                    ]),
                                                ]),
                                                m(
                                                    "button.btn.btn-primary.btn-block.text-white.btn-user.w-100",
                                                    {
                                                        type: "submit",
                                                    },
                                                    "Logga in"
                                                ),
                                                m("hr"),
                                                m(
                                                    "button.btn.btn-danger.btn-block.text-white.btn-google.btn-user.w-100.mb-2",
                                                    {
                                                        onclick:
                                                            Auth.loginWithGoogle,
                                                    },
                                                    [
                                                        m(
                                                            "i.fa-brands fa-google.me-3"
                                                        ),
                                                        "Registrera med Google",
                                                    ]
                                                ),
                                                m(
                                                    "button.btn.btn-secondary.btn-block.text-white.btn-github.btn-user.w-100",
                                                    {
                                                        onclick:
                                                            Auth.loginWithGithub,
                                                    },
                                                    [
                                                        m(
                                                            "i.fa-brands fa-github.me-3"
                                                        ),
                                                        "Registrera med Github",
                                                    ]
                                                ),
                                            ]
                                        ),
                                        m("hr"),
                                        m("div.text-center", [
                                            m("a.small", "Glömt lösenord?"),
                                        ]),
                                        m("div.text-center", [
                                            m(
                                                "a.small",
                                                {
                                                    href: "#!/registrera",
                                                },
                                                "Har du inget konto? Registrera dig!"
                                            ),
                                        ]),
                                    ]),
                                ]),
                                m(
                                    "div.col-lg-6",
                                    m("div.flex-grow-1.bg-register-image", {
                                        style: "",
                                        alt: "image",
                                    })
                                ),
                            ]),
                        ]),
                    ]),
                ]),
            ]),
        ]);
    },
};

export default login;
