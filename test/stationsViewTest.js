/* eslint-disable no-undef */
"use strict";

const mq = require("mithril-query");
const chai = require("chai");
const sinon = require("sinon");
const assert = chai.assert;
const expect = chai.expect;

// view
const stations = require("../src/views/stations");

// models
const Stations = require("../src/models/stations");

chai.should();

describe("Test stations view", () => {
    let stationsMock;

    beforeEach(() => {
        stationsMock = sinon.stub(Stations, "getAllStations");

        Stations.allStations = [
            {
                id: "1",
                station_name: "Charging station",
                city_name: "Stockholm",
                zone_type: "Charging",
                longitude: "18.06324",
                latitude: "59.334591"
            }
        ];
    });

    afterEach(() => {
        Stations.getAllStations.restore();
        Stations.allStations = [];
    });

    it("should render a header and card div", () => {
        const output = mq(stations);

        assert.isTrue(stationsMock.calledOnce);

        output.should.have("h3");
        output.should.contain("Stationer");
        output.should.have("div.card-header.py-3 > p");
        output.should.contain("Stationslista");
    });


    it("should render a table with stations data", () => {
        const output = mq(stations);

        assert.isTrue(stationsMock.calledOnce);
        output.should.have("table.table > tbody");
        output.find("tr").should.have.length(2);

        output.should.contain("1");
        output.should.contain("Charging station");
        output.should.contain("Stockholm");
        output.should.contain("Charging");
        output.should.contain("18.06324");
        output.should.contain("59.334591");
    });


    describe("Test get station by id", () => {
        let getStationMock;

        beforeEach(() => {
            getStationMock = sinon.stub(Stations, "getStatioById").withArgs("4");

            Stations.station = [
                {
                    id: "4",
                    station_name: "Charging station",
                    city_name: "Stockholm",
                    zone_type: "Charging",
                    longitude: "18.06324",
                    latitude: "59.334591"
                }
            ];
        });

        afterEach(() => {
            Stations.getStatioById.restore();
            Stations.station = [];
        });


        it("should console.log the station data", async () => {
            const output = mq(stations);

            output.should.have("table.table > tbody");
            output.find("tr").should.have.length(2);
            output.click("tr.stationdata");

            await getStationMock("4");
            expect(getStationMock.called).to.be.true;
        });
    });
});
