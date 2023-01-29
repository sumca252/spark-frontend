/* eslint-disable no-undef */
"use strict";

const mq = require("mithril-query");
const chai = require("chai");
const sinon = require("sinon");
const assert = chai.assert;

// view
const admin = require("../src/views/admin");

// models
const Admins = require("../src/models/admins");

chai.should();

describe("Test admin view", () => {
    let adminMock;

    beforeEach(() => {
        adminMock = sinon.stub(Admins, "getAllAdmins");

        Admins.allAdmins = [
            {
                id: "1",
                first_name: "firstname",
                last_name: "lastname",
                username: "username",
                email: "test@example.se",
                phone: "0700000000",
                role: "admin",
            }
        ];
    });

    afterEach(() => {
        Admins.getAllAdmins.restore();
        Admins.allAdmins = [];
    });

    it("should render a header and card div", () => {
        const output = mq(admin);

        assert.isTrue(adminMock.calledOnce);

        output.should.have("h3");
        output.should.contain("Adminstratörer");
        output.should.have("div.card-header.py-3 > p");
        output.should.contain("Adminslista");
    });

    it("should render a table with admins data", () => {
        const output = mq(admin);

        assert.isTrue(adminMock.calledOnce);

        output.should.have("table.table > tbody");
        output.should.contain("1");
        output.should.contain("firstname");
        output.should.contain("lastname");
        output.should.contain("username");
        output.should.contain("test@example.se");
        output.should.contain("0700000000");
        output.should.contain("admin");
    });
});
