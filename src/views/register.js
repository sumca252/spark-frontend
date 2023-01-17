import Auth from "../models/auth.js";
import m from "mithril";

const register = {
    view: () => {
        return m("div.container.flex-grow-1.mt-5", [
            m("div.row.justify-content-center ", [
                m("div.col-md-9.col-lg-12.col-xl-10", [
                    m("div.card.shadow-lg.o-hidden.my-5.border-0", [
                        m("div.card-body.p-0", [
                            m("div.row", [
                                m("div.col-lg-6", [
                                    m("div.p-5", [
                                        m("div.text-center", [
                                            m(
                                                "h4.text-dark.mb-4",
                                                "Skapa ett konto!"
                                            ),
                                        ]),
                                        m(
                                            "form.user",
                                            {
                                                onsubmit: (e) => {
                                                    e.preventDefault();
                                                    Auth.register();
                                                },
                                            },
                                            [
                                                m("div.form-group.mb-3", [
                                                    m("label.w-100", [
                                                        "Användarnamn",
                                                        m(
                                                            "input.form-control.form-control-user.mt-2",
                                                            {
                                                                type: "text",
                                                                id: "username",
                                                                placeholder:
                                                                    "Användarnamn",
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
                                                m("div.form-group.mb-3", [
                                                    m("label.w-100", [
                                                        "Förnamn",
                                                        m(
                                                            "input.form-control.form-control-user.mt-2",
                                                            {
                                                                type: "text",
                                                                id: "firstName",
                                                                placeholder:
                                                                    "Förnamn",
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
                                                m("div.form-group.mb-3", [
                                                    m("label.w-100", [
                                                        "Efternamn",
                                                        m(
                                                            "input.form-control.form-control-user.mt-2",
                                                            {
                                                                type: "text",
                                                                id: "lastName",
                                                                placeholder:
                                                                    "Efternamn",
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
                                                m("div.form-group.mb-3", [
                                                    m("label.w-100", [
                                                        "Mobilnummer",
                                                        m(
                                                            "input.form-control.form-control-user.mt-2",
                                                            {
                                                                type: "text",
                                                                id: "phone",
                                                                placeholder:
                                                                    "0712345678",
                                                                pattern:
                                                                    "[0-9]{10}",

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
                                                m(
                                                    "button.btn.btn-primary.btn-block.text-white.w-100",
                                                    {
                                                        type: "submit",
                                                    },
                                                    "Skapa konto"
                                                ),
                                                m("hr"),
                                                m(
                                                    "button.btn.btn-danger.btn-block.text-white.btn-google.w-100.mb-2",
                                                    {
                                                        onclick:
                                                            Auth.loginWithGoogle,
                                                    },
                                                    [
                                                        m(
                                                            "i.fa-brands.fa-google.me-3"
                                                        ),
                                                        "Registrera med Google",
                                                    ]
                                                ),
                                                m(
                                                    "button.btn.btn-secondary.btn-block.text-white.btn-github.w-100",
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
                                                    href: "#!/logga-in",
                                                },
                                                "Har du redan ett konto? Logga in!"
                                            ),
                                        ]),
                                    ]),
                                ]),
                                m("div.col-lg-6.d-none.d-lg-flex", [
                                    m("img.img-fluid.bg-register-image", {
                                        // eslint-disable-next-line max-len
                                        src: "https://images.unsplash.com/photo-1597260491619-bab87197869f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=926&q=80",
                                        alt: "Bild på en sparkcykel",
                                        style: {
                                            width: "100%",
                                            height: "901px",
                                            objectFit: "cover",
                                        },
                                    }),
                                ]),
                            ]),
                        ]),
                    ]),
                ]),
            ]),
        ]);
    },
};

export default register;
