const m = require("mithril");

// models
const Auth = require("./models/auth.js");


// views
const layout = require("./views/layout.js");
const admin = require("./views/admin.js");
const settings = require("./views/settings.js");

const cities = require("./views/cities.js");
const addCity = require("./views/addCity.js");

const stations = require("./views/stations.js");
const addStation = require("./views/addStation.js");

const customers = require("./views/customers.js");
const CustomerDetails = require("./views/customerDetails.js");
const editCustomer = require("./views/editCustomer.js");

const login = require("./views/login.js");
const register = require("./views/register.js");

const scooters = require("./views/scooters.js");
const moveScooter = require("./views/moveScooter.js");

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
    "/sparkcyklar": {
        render: () => {
            if (Auth.isAuthenticated) {
                return m(layout, { selected: "sparkcyklar" }, m(scooters));
            }
            m.route.set("/logga-in");
        },
    },
    "/sparkcyklar/:id": {
        render: () => {
            if (Auth.isAuthenticated) {
                return m(
                    layout,
                    { selected: "sparkcyklar" },
                    m(moveScooter, { id: m.route.param("id") })
                );
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
