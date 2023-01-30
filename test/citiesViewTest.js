/* eslint-disable no-undef */
"use strict";

const mq = require("mithril-query");
const chai = require("chai");
const sinon = require("sinon");
const assert = chai.assert;
const expect = chai.expect;


// view
const cities = require("../src/views/cities");

// models
const Cities = require("../src/models/cities");

chai.should();

describe("Test cities view", () => {
    let cityMock;

    beforeEach(() => {
        cityMock = sinon.stub(Cities, "getAllCities");

        Cities.allCitites = [
            {
                id: "1",
                name: "Stockholm",
                country: "Sverige",
                longitude: "18.06324",
                latitude: "59.334591",
                area: "188"
            }
        ];
    });

    afterEach(() => {
        Cities.getAllCities.restore();
        Cities.allCitites = [];
    });


    it("should render a header and card div", () => {
        const output = mq(cities);

        assert.isTrue(cityMock.calledOnce);

        output.should.have("h3");
        output.should.contain("Städer");
        output.should.have("div.card-header.py-3 > p");
        output.should.contain("Städer");
    });



    it("should render a div and button for creating new city", () => {
        const output = mq(cities);

        assert.isTrue(cityMock.calledOnce);

        output.should.have("div.text-lg-end.dataTables_filter");
        output.should.contain("Städer");
        output.should.have("button.btn > span");
        output.should.contain("Lägg till stad");
    });


    it("should render a table with city data", () => {
        const output = mq(cities);

        assert.isTrue(cityMock.calledOnce);

        output.should.have("table.table > tbody");
        output.find("tr").should.have.length(2);

        output.should.contain("1");
        output.should.contain("Stockholm");
        output.should.contain("Sverige");
        output.should.contain("18.06324");
        output.should.contain("59.334591");
        output.should.contain("188 km²");
    });


    describe("Test get city by id", () => {
        let getCityMock;

        beforeEach(() => {
            getCityMock = sinon.stub(Cities, "getCityById").withArgs("2");

            Cities.city = [
                {
                    id: "2",
                    name: "Göteborg",
                    country: "Sverige",
                    longitude: "18.06324",
                    latitude: "59.334591",
                    area: "447.80"
                }
            ];
        });

        afterEach(() => {
            Cities.getCityById.restore();
            Cities.city = [];
        });


        it("should console.log the city data", async () => {
            const output = mq(cities);

            output.should.have("table.table > tbody");
            output.find("tr").should.have.length(2);
            output.click("tr.citydata");

            await getCityMock("2");
            expect(getCityMock.called).to.be.true;
        });
    });
});
