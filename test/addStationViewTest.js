/* eslint-disable no-undef */

"use strict";

const mq = require("mithril-query");
const chai = require("chai");
const sinon = require("sinon");
const assert = chai.assert;
const expect = chai.expect;


// view
const addStation = require("../src/views/addStation");

// models
const Stations = require("../src/models/stations");
const Cities = require("../src/models/cities");


chai.should();

describe("Test addStation view", () => {
    let citiesMock, stationsMock;

    beforeEach(() => {
        citiesMock = sinon.stub(Cities, "getAllCities");
        stationsMock = sinon.stub(Stations, "addStation");

        Cities.allCitites = [
            {
                id: "1",
                name: "Stockholm"
            }
        ];
    });

    afterEach(() => {
        citiesMock.restore();
        stationsMock.restore();
    });


    it("should render a header and add stations form", () => {
        const output  = mq(addStation);

        output.should.have("h3");
        output.should.contain("Lägg till station");
        output.should.have("div.card-header.py-3 > p");
        output.should.contain("Station");
        output.should.have("form");

        assert.isTrue(citiesMock.calledOnce);
        assert.isFalse(stationsMock.calledOnce);
    });


    it("should create a new station", () => {
        const output = mq(addStation);

        // set values on the inputs
        output.setValue("input[name='stationName']", "station");
        output.setValue("select[name='zoneId']", "2");
        output.setValue("input[name='longitude']", "34.444");
        output.setValue("input[name='latitude']", "34.444");
        output.setValue("select[name='cityId']", "1");

        output.trigger("form", "submit");

        assert.isTrue(citiesMock.calledOnce);
        assert.isTrue(stationsMock.calledOnce);

        expect(Stations.newStation.name).to.equal("station");
        expect(Stations.newStation.zoneId).to.equal("2");
        expect(Stations.newStation.longitude).to.equal("34.444");
        expect(Stations.newStation.latitude).to.equal("34.444");
        expect(Stations.newStation.cityId).to.equal("1");
    });
});
