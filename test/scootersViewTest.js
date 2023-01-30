/* eslint-disable no-undef */
"use strict";

const mq = require("mithril-query");
const chai = require("chai");
const sinon = require("sinon");
const assert = chai.assert;

// view
const scooters = require("../src/views/scooters");

// models
const Scooters = require("../src/models/scooters");

chai.should();

describe("Test scooters view", () => {
    let scootersMock;

    beforeEach(() => {
        scootersMock = sinon.stub(Scooters, "getAllScooters");

        Scooters.allScooters = [
            {
                id: "1",
                battery: "60",
                status: {
                    status: "Running",
                },
                longitude: "18.06324",
                latitude: "59.334591",
                price: {
                    start_cost: "1",
                    travel_cost: "1",
                    parking_cost: "2",
                }
            }
        ];
    });

    afterEach(() => {
        Scooters.getAllScooters.restore();
        Scooters.allScooters = [];
    });

    it("should render a header and card div", () => {
        const output = mq(scooters);

        assert.isTrue(scootersMock.calledOnce);

        output.should.have("h3");
        output.should.contain("Sparkcyklar");
        output.should.have("div.card-header.py-3 > p");
        output.should.contain("Stationslista");
    });


    it("should render a table with scooters data", () => {
        const output = mq(scooters);

        assert.isTrue(scootersMock.calledOnce);
        output.should.have("table.table > tbody");
        output.find("tr").should.have.length(3);

        output.should.contain("1");
        output.should.contain("60");
        output.should.contain("Running");
        output.should.contain("18.06324");
        output.should.contain("59.334591");
        output.should.contain("1");
        output.should.contain("1");
        output.should.contain("2");
    });
});
