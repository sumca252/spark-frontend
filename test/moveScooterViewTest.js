/* eslint-disable no-undef */

"use strict";

const mq = require("mithril-query");
const chai = require("chai");
const sinon = require("sinon");
const assert = chai.assert;
const expect = chai.expect;


// view
const moveScooter = require("../src/views/moveScooter");

// models
const Scooters = require("../src/models/scooters");
const Stations = require("../src/models/stations");


chai.should();

describe("Test moveScooter view", () => {
    let getScooterMock, stationsMock, moveScooterMock;

    beforeEach(() => {
        getScooterMock = sinon.stub(Scooters, "getScooterById").withArgs("1");
        stationsMock = sinon.stub(Stations, "getAllStations");
        moveScooterMock = sinon.stub(Scooters, "moveScooter");

        Stations.allStations = [
            {
                id: "5",
                station_name: "Testing station"
            }
        ];
    });

    afterEach(() => {
        Scooters.getScooterById.restore();
        Stations.getAllStations.restore();
        Scooters.moveScooter.restore();
        Stations.allStations = [];
    });


    it("should render a header and move scooter form", () => {
        const output  = mq(moveScooter, { id: "1" });

        output.should.have("h3");
        output.should.contain("Flytta sparkcykel");
        output.should.have("div.card-header.py-3 > p");
        output.should.contain("Sparkcykel");
        output.should.have("form");

        assert.isTrue(getScooterMock.calledOnce);
        assert.isTrue(stationsMock.calledOnce);
        assert.isFalse(moveScooterMock.calledOnce);
    });


    it("should move a scooter", () => {
        const output = mq(moveScooter, { id: "2" });

        // set values on the inputs
        output.setValue("select[name='statusId']", "1");
        output.setValue("select[name='stationId']", "5");

        output.trigger("form", "submit");
        assert.isTrue(moveScooterMock.calledOnce);

        expect(Scooters.updateScooter.statusId).to.equal("1");
        expect(Scooters.updateScooter.stationId).to.equal("5");
    });
});
