import Auth from "./models/auth.js";
import admin from "./views/admin.js";
import cities from "./views/cities.js";
import customers from "./views/customers.js";
import layout from "./views/layout.js";
import login from "./views/login.js";
import m from "mithril";
import register from "./views/register.js";
import settings from "./views/settings.js";
import stations from "./views/stations.js";

m.route(document.body, "/", {
    "/": {
        render: () => {
            if (Auth.isAuthenticated) {
                return m(layout, { selected: "Adminstratörer" }, m(admin));
            }
            m.route.set("/logga-in");
        },
    },
    "/kunder": {
        render: () => {
            if (Auth.isAuthenticated) {
                return m(layout, { selected: "Kunder" }, m(customers));
            }
            m.route.set("/logga-in");
        },
    },
    "/stader": {
        render: () => {
            if (Auth.isAuthenticated) {
                return m(layout, { selected: "Städer" }, m(cities));
            }
            m.route.set("/logga-in");
        },
    },
    "/stationer": {
        render: () => {
            if (Auth.isAuthenticated) {
                return m(layout, { selected: "Stationer" }, m(stations));
            }
            m.route.set("/logga-in");
        },
    },
    "/installningar": {
        render: () => {
            if (Auth.isAuthenticated) {
                return m(layout, { selected: "Inställningar" }, m(settings));
            }
            m.route.set("/logga-in");
        },
    },
    "/logga-in": {
        render: () => {
            return m(login);
        },
    },

    "/registrera": {
        render: () => {
            return m(register);
        },
    },

    "/logga-ut": {
        render: () => {
            Auth.isAuthenticated = false;
            Auth.user = null;
            return m(login);
        },
    },
});
