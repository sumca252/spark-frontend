import m from "mithril";

import Auth from "./models/auth.js";

import layout from "./views/layout.js";

import admin from "./views/admin.js";

import cities from "./views/cities.js";
import addCity from "./views/addCity.js";

import stations from "./views/stations.js";
import addStation from "./views/addStation.js";

import customers from "./views/customers.js";
import CustomerDetails from "./views/customerDetails.js";
import editCustomer from "./views/editCustomer.js";

import login from "./views/login.js";
import register from "./views/register.js";

import settings from "./views/settings.js";

import overview from "./views/overview.js";

m.route(document.body, "/", {
    "/": {
        render: () => {
            if (Auth.isAuthenticated) {
                return m(layout, { selected: "Översikt" }, m(overview));
            }

            m.route.set("/logga-in");
        },
    },
    "/admin": {
        render: () => {
            if (Auth.isAuthenticated === true) {
                return m(layout, { selected: "Adminstratörer" }, m(admin));
            }
            m.route.set("/logga-in");
        },
    },
    "/admin/:id": {
        render: () => {
            if (Auth.isAuthenticated === true) {
                return m(layout, { selected: "Adminstratörer" }, m(admin));
            }
            m.route.set("/logga-in");
        },
    },
    "/kunder": {
        render: () => {
            if (Auth.isAuthenticated === true) {
                return m(layout, { selected: "Kunder" }, m(customers));
            }
            m.route.set("/logga-in");
        },
    },
    "/kunder/granska/:id": {
        render: () => {
            if (Auth.isAuthenticated === true) {
                return m(
                    layout,
                    { selected: "Kunder" },
                    m(CustomerDetails, { id: m.route.param("id") })
                );
            }
            m.route.set("/logga-in");
        },
    },
    "/kunder/redigera/:id": {
        render: () => {
            if (Auth.isAuthenticated === true) {
                return m(
                    layout,
                    { selected: "Kunder" },
                    m(editCustomer, { id: m.route.param("id") })
                );
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
    "/stader/skapa": {
        render: () => {
            if (Auth.isAuthenticated) {
                return m(layout, { selected: "Städer" }, m(addCity));
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
    "/station/skapa": {
        render: () => {
            if (Auth.isAuthenticated) {
                return m(layout, { selected: "Stationer" }, m(addStation));
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
            Auth.logout();
        },
    },
});
