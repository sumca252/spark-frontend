/* eslint-disable no-undef */

"use strict";

const mq = require("mithril-query");
const chai = require("chai");
const sinon = require("sinon");
const assert = chai.assert;
const expect = chai.expect;


// view
const addCity = require("../src/views/addCity");

// models
const Cities = require("../src/models/cities");


chai.should();

describe("Test addCity view", () => {
    let addCityMock;

    beforeEach(() => {
        addCityMock = sinon.stub(Cities, "addCity");
    });

    afterEach(() => {
        Cities.addCity.restore();
    });


    it("should render a header and a add city form", () => {
        const output  = mq(addCity);

        output.should.have("h3");
        output.should.contain("Lägg till stad");
        output.should.have("div.card-header.py-3 > p");
        output.should.contain("Stad");

        assert.isFalse(addCityMock.calledOnce);
    });

    it("should create new city", () => {
        const output = mq(addCity);

        // set values on the inputs
        output.setValue("input[name='cityName']", "city");
        output.setValue("input[name='country']", "Sweden");
        output.setValue("input[name='longitude']", "59.888");
        output.setValue("input[name='latitude']", "59.888");
        output.setValue("input[name='area']", "56");

        output.trigger("form", "submit");

        assert.isTrue(addCityMock.calledOnce);

        expect(Cities.newCity.name).to.equal("city");
        expect(Cities.newCity.country).to.equal("Sweden");
        expect(Cities.newCity.longitude).to.equal("59.888");
        expect(Cities.newCity.latitude).to.equal("59.888");
        expect(Cities.newCity.area).to.equal("56");
    });
});
