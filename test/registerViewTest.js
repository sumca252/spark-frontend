/* eslint-disable no-undef */

"use strict";

const mq = require("mithril-query");
const chai = require("chai");
const sinon = require("sinon");
const assert = chai.assert;
const expect = chai.expect;


// view
const register = require("../src/views/register");

// models
const Auth = require("../src/models/auth");


chai.should();

describe("Test register view", () => {
    let registerMock;

    beforeEach(() => {
        registerMock = sinon.stub(Auth, "register").returns();
    });

    afterEach(() => {
        Auth.register.restore();
    });


    it("should render a header and a register form", () => {
        const output  = mq(register);

        output.should.have("h4");
        output.should.contain("Skapa ett konto!");
        output.should.have("form.user");

        assert.isFalse(registerMock.calledOnce);
    });


    it("should register new customer", () => {
        const output = mq(register);

        // set values on the inputs
        output.setValue("input[name='username']", "username");
        output.setValue("input[name='firstname']", "firstname");
        output.setValue("input[name='lastname']", "lastname");
        output.setValue("input[name='email']", "email@example.com");
        output.setValue("input[name='phone']", "0700000000");
        output.setValue("input[name='password']", "password");

        output.trigger("form.user", "submit");

        assert.isTrue(registerMock.calledOnce);

        expect(Auth.user.firstName).to.equal("firstname");
        expect(Auth.user.lastName).to.equal("lastname");
        expect(Auth.user.username).to.equal("username");
        expect(Auth.user.email).to.equal("email@example.com");
        expect(Auth.user.password).to.equal("password");
        expect(Auth.user.phone).to.equal("0700000000");
    });
});
