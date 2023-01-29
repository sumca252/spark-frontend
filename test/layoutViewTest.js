/* eslint-disable no-undef */

"use strict";

const mq = require("mithril-query");
const chai = require("chai");
const jsdom = require("jsdom");
const dom = new jsdom.JSDOM();

global.document = dom.window.document;

// view
const layout = require("../src/views/layout");

chai.should();

describe("Test layout view", () => {
    it("should render header, container and footer", () => {
        const output  = mq(layout, { selected: "Översikt" });

        output.should.have("div.container");
        output.should.have("a.navbar-brand.logo");
        output.should.contain("Spark");

        output.should.have("div.wrapper.mt-5 > div.container");
        output.should.have("footer > div.container");
        output.should.contain("© 2023 Spark.");
    });

    it("should render nav with links", () => {
        const output  = mq(layout, { selected: "Översikt" });

        output.should.have("div.collapse.navbar-collapse");
        output.find("li").should.have.length(8);

        // +1 including the logo
        output.find("a").should.have.length(9);
    });
});
