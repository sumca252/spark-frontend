/* eslint-disable no-undef */

"use strict";

const mq = require("mithril-query");
const chai = require("chai");
const sinon = require("sinon");
const assert = chai.assert;
const expect = chai.expect;


// view
const editCustomer = require("../src/views/editCustomer");

// models
const Customers = require("../src/models/customers");


chai.should();

describe("Test editCustomer view", () => {
    let editCustomerMock, customerMock;

    beforeEach(() => {
        customerMock = sinon.stub(Customers, "getCustomerById").withArgs("1");
        editCustomerMock = sinon.stub(Customers, "updateCustomer");
    });

    afterEach(() => {
        Customers.getCustomerById.restore();
        Customers.updateCustomer.restore();
    });


    it("should render a header and add customer form", () => {
        const output  = mq(editCustomer, { id: "1" });

        output.should.have("h3");
        output.should.contain("Kund Detaljer");
        output.should.have("div.card-header.py-3 > p");
        output.should.contain("Personuppgifter");
        output.should.have("form");

        assert.isTrue(customerMock.calledOnce);
        assert.isFalse(editCustomerMock.calledOnce);
    });


    it("should update a specific customer", () => {
        const output = mq(editCustomer, { id: "1" });

        // set values on the inputs
        output.setValue("input[name='firstname']", "firstname");
        output.setValue("input[name='lastname']", "lastname");
        output.setValue("input[type='email']", "test@example.se");
        output.setValue("input[name='username']", "username");
        output.setValue("input[type='tel']", "0700000000");

        output.trigger("form", "submit");

        assert.isTrue(customerMock.calledOnce);
        assert.isTrue(editCustomerMock.calledOnce);

        expect(Customers.newCustomer.first_name).to.equal("firstname");
        expect(Customers.newCustomer.last_name).to.equal("lastname");
        expect(Customers.newCustomer.email).to.equal("test@example.se");
        expect(Customers.newCustomer.username).to.equal("username");
        expect(Customers.newCustomer.phone).to.equal("0700000000");
    });
});
