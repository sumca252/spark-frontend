import Auth from "../models/auth";
import m from "mithril";

const login = {
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
                                                        oncreate: (vnode) => {
                                                            vnode.dom.addEventListener(
                                                                "click",
                                                                () => {
                                                                    Auth.loginWithGoogle();
                                                                    Auth.checkAuth();
                                                                }
                                                            );
                                                        },
                                                    },
                                                    [
                                                        m(
                                                            "i.fa-brands fa-google.me-3"
                                                        ),
                                                        "Logga in med Google",
                                                    ]
                                                ),
                                                m(
                                                    "button.btn.btn-secondary.btn-block.text-white.btn-github.btn-user.w-100",
                                                    {
                                                        oncreate: (vnode) => {
                                                            vnode.dom.addEventListener(
                                                                "click",
                                                                () => {
                                                                    Auth.loginWithGithub();
                                                                    Auth.checkAuth();
                                                                }
                                                            );
                                                        },
                                                    },
                                                    [
                                                        m(
                                                            "i.fa-brands fa-github.me-3"
                                                        ),
                                                        "Logga in med Github",
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
                                m("div.col-lg-6.d-none.d-lg-flex", [
                                    m("img.img-fluid.bg-register-image", {
                                        // eslint-disable-next-line max-len
                                        src: "https://images.unsplash.com/photo-1597260491619-bab87197869f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=926&q=80",
                                        alt: "Bild på en sparkcykel",
                                        style: {
                                            width: "100%",
                                            height: "560px",
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

export default login;
