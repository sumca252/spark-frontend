import m from "mithril";
import menu from "./menu.js";

const layout = {
    view: function (vnode) {
        return m("div", [
            m(
                "div.navbar.navbar-dark.navbar-expand-lg.bg-primary.clean-navbar.mb-5",
                [
                    m("div.container", [
                        m("a.navbar-brand.logo", { href: "/" }, "Spark"),
                        m(
                            "button.navbar-toggler",
                            {
                                type: "button",
                                "data-toggle": "collapse",
                                "data-target": "#navcol-1",
                                "aria-controls": "navcol-1",
                                "aria-expanded": "false",
                                "aria-label": "Toggle navigation",
                            },
                            [
                                m("span.sr-only", "Toggle navigation"),
                                m("span.navbar-toggler-icon"),
                            ]
                        ),
                        m(
                            "div.collapse.navbar-collapse",
                            {
                                id: "navcol-1",
                            },
                            [
                                m("ul.navbar-nav.ms-auto", [
                                    m(menu, { selected: vnode.attrs.selected }),
                                ]),
                            ]
                        ),
                    ]),
                ]
            ),
            m("div.wrapper.mt-5", [m("div.container", [vnode.children])]),
        ]);
    },
};

export default layout;
