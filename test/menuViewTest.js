/* eslint-disable no-undef */
"use strict";

const mq = require("mithril-query");
const chai = require("chai");
const expect = chai.expect;

// view
const menu = require("../src/views/menu");

chai.should();

describe("Test menu view", () => {
    it("should have active class name when navigating to Översikt page", () => {
        const output  = mq(menu, { selected: "Översikt" });

        output.should.have("a.nav-link");
        output.should.have("span");
        output.should.contain("Översikt");

        expect(output.has("a.active")).to.be.true;
        output.find("a.active").should.have.length(1);
    });

    it("should have active class name when navigating to Adminstratörer page", () => {
        const output  = mq(menu, { selected: "Adminstratörer" });

        output.should.have("a.nav-link");
        output.should.have("span");
        output.should.contain("Adminstratörer");

        expect(output.has("a.active")).to.be.true;
        output.find("a.active").should.have.length(1);
    });

    it("should have active class name when navigating to Kunder page", () => {
        const output  = mq(menu, { selected: "Kunder" });

        output.should.have("a.nav-link");
        output.should.have("span");
        output.should.contain("Kunder");

        expect(output.has("a.active")).to.be.true;
        output.find("a.active").should.have.length(1);
    });

    it("should have active class name when navigating to Städer page", () => {
        const output  = mq(menu, { selected: "Städer" });

        output.should.have("a.nav-link");
        output.should.have("span");
        output.should.contain("Städer");

        expect(output.has("a.active")).to.be.true;
        output.find("a.active").should.have.length(1);
    });

    it("should have active class name when navigating to Stationer page", () => {
        const output  = mq(menu, { selected: "Stationer" });

        output.should.have("a.nav-link");
        output.should.have("span");
        output.should.contain("Stationer");

        expect(output.has("a.active")).to.be.true;
        output.find("a.active").should.have.length(1);
    });

    it("should have active class name when navigating to Inställningar page", () => {
        const output  = mq(menu, { selected: "Stationer" });

        output.should.have("a.nav-link");
        output.should.have("span");
        output.should.contain("Inställningar");

        expect(output.has("a.active")).to.be.true;
        output.find("a.active").should.have.length(1);
    });

    it("should have active class name when navigating to Sparkcyklar page", () => {
        const output  = mq(menu, { selected: "Sparkcyklar" });

        output.should.have("a.nav-link");
        output.should.have("span");
        output.should.contain("Sparkcyklar");

        expect(output.has("a.active")).to.be.true;
        output.find("a.active").should.have.length(1);
    });

    it("should have active class name when navigating to Logga ut page", () => {
        const output  = mq(menu, { selected: "Logga" });

        output.should.have("a.nav-link");
        output.should.have("span");
        output.should.contain("Logga ut");

        expect(output.has("a.active")).to.be.true;
        output.find("a.active").should.have.length(1);
    });
});
