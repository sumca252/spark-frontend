/* eslint-disable no-undef */
"use strict";

const mq = require("mithril-query");
const chai = require("chai");
const sinon = require("sinon");
const assert = chai.assert;

// view
const CustomerDetails = require("../src/views/customerDetails");

// models
const Customers = require("../src/models/customers");

chai.should();

describe("Test CustomerDetails view", () => {
    let customerMock;

    beforeEach(() => {
        customerMock = sinon.stub(Customers, "getCustomerById").withArgs("1");

        Customers.customer = [
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
        Customers.getCustomerById.restore();
        Customers.customer = [];
    });

    it("should render a header and card div", () => {
        const output = mq(CustomerDetails, { id: "1" });

        assert.isTrue(customerMock.calledOnce);

        output.should.have("h3");
        output.should.contain("Kund Detaljer");
        output.should.have("div.card-header.py-3 > p");
        output.should.contain("Kund Detaljer");
    });


    it("should render a table with customers data", () => {
        const output = mq(CustomerDetails, { id: "1" });

        assert.isTrue(customerMock.calledOnce);
        output.find("tr").should.have.length(2);

        output.should.have("table.table > tbody");
        output.should.contain("1");
        output.should.contain("firstname");
        output.should.contain("lastname");
        output.should.contain("username");
        output.should.contain("test@example.se");
        output.should.contain("0700000000");
        output.should.contain("customer");
    });
});
