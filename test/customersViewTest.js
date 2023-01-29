/* eslint-disable no-undef */
"use strict";

const mq = require("mithril-query");
const chai = require("chai");
const sinon = require("sinon");
const assert = chai.assert;

// view
const customers = require("../src/views/customers");

// models
const Customers = require("../src/models/customers");

chai.should();

describe("Test customers view", () => {
    let customersMock;

    beforeEach(() => {
        customersMock = sinon.stub(Customers, "getAllCustomers");

        Customers.allCustomers = [
            {
                id: "1",
                user: {
                    first_name: "firstname",
                    last_name: "lastname",
                    username: "username",
                    email: "test@example.se",
                    phone: "0700000000",
                    role: "customer",
                }
            }
        ];
    });

    afterEach(() => {
        Customers.getAllCustomers.restore();
        Customers.allCustomers = [];
    });

    it("should render a header and card div", () => {
        const output = mq(customers);

        assert.isTrue(customersMock.calledOnce);

        output.should.have("h3");
        output.should.contain("Kunder");
        output.should.have("div.card-header.py-3 > p");
        output.should.contain("Kundlista");
    });


    it("should render a table with customers data", () => {
        const output = mq(customers);

        assert.isTrue(customersMock.calledOnce);

        output.should.have("table.table > tbody");
        output.find("tr").should.have.length(2);

        output.should.contain("1");
        output.should.contain("firstname");
        output.should.contain("lastname");
        output.should.contain("username");
        output.should.contain("test@example.se");
        output.should.contain("0700000000");
        output.should.contain("Kund");
    });
});
