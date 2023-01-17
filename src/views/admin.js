import Auth from "../models/auth.js";
import m from "mithril";

const admin = {
    view: function () {
        return m("div.container", [
            m("h1.title", "Admin Page"),
            m("p", "This is the admin page."),
        ]);
    },
};

export default admin;
