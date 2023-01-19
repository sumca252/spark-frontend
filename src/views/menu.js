import m from "mithril";

import Auth from "../models/auth";

const menu = {
    view: function (vnode) {
        let navLinks = [
            {
                name: "Översikt",
                icon: "fa fa-dashboard",
                class: "Översikt",
                nav: () => {
                    m.route.set("/");
                },
            },
            {
                name: "Adminstratörer",
                icon: "fa fa-user",
                class: "Adminstratörer",
                nav: () => {
                    m.route.set("/admin");
                },
            },
            {
                name: "Kunder",
                icon: "fa fa-users",
                class: "Kunder",
                nav: () => {
                    m.route.set("/kunder");
                },
            },
            {
                name: "Städer",
                icon: "fa fa-map-marker",
                class: "Städer",
                nav: () => {
                    m.route.set("/stader");
                },
            },
            {
                name: "Stationer",
                icon: "fa fa-train",
                class: "Stationer",
                nav: () => {
                    m.route.set("/stationer");
                },
            },
            {
                name: "Inställningar",
                icon: "fa fa-cog",
                class: "Inställningar",
                nav: () => {
                    m.route.set("/installningar");
                },
            },
            {
                name: "Sparkcyklar",
                icon: "fa-solid fa-bicycle",
                class: "Sparkcyklar",
                nav: () => {
                    m.route.set("/sparkcyklar");
                },
            },
            {
                name: "Logga ut",
                icon: "fa fa-sign-out",
                class: "Logga",
                nav: () => {
                    m.route.set("/logga-ut");
                },
            },
        ];

        return navLinks.map((elem) => {
            return m("li.nav-item", [
                m(
                    "a.nav-link",
                    {
                        class:
                            vnode.attrs.selected === elem.class ? "active" : "",
                        onclick: elem.nav,
                    },
                    [
                        m("i", { class: `me-2 ${elem.icon}` }),
                        m("span", elem.name),
                    ]
                ),
            ]);
        });
    },
};

export default menu;
