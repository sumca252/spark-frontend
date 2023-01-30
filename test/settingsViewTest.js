/* eslint-disable no-undef */

"use strict";

const mq = require("mithril-query");
const chai = require("chai");
const sinon = require("sinon");
const assert = chai.assert;
const expect = chai.expect;


// view
const settings = require("../src/views/settings");

// models
const Auth = require("../src/models/auth");
const User = require("../src/models/user");


chai.should();

describe("Test settings view", () => {
    let userMock;

    beforeEach(() => {
        userMock = sinon.stub(User, "updateUser");
    });

    afterEach(() => {
        userMock.restore();
    });


    it("should render a header and settings form", () => {
        const output  = mq(settings);

        output.should.have("h3");
        output.should.contain("Profil");
        output.should.have("div.card-header.py-3 > p");
        output.should.contain("Personuppgifter");
        output.should.have("form");

        assert.isFalse(userMock.calledOnce);
    });


    it("should update user", () => {
        const output = mq(settings);

        // set values on the inputs
        output.setValue("input[name='firstname']", "firstname");
        output.setValue("input[name='lastname']", "lastname");
        output.setValue("input[type='password']", "password");
        output.setValue("input[type='email']", "test@example.se");
        output.setValue("input[name='username']", "username");
        output.setValue("input[type='tel']", "0700000000");

        output.trigger("form", "submit");

        assert.isTrue(userMock.calledOnce);

        expect(Auth.user.firstName).to.equal("firstname");
        expect(Auth.user.lastName).to.equal("lastname");
        expect(Auth.user.password).to.equal("password");
        expect(Auth.user.email).to.equal("test@example.se");
        expect(Auth.user.username).to.equal("username");
        expect(Auth.user.phone).to.equal("0700000000");
    });
});
