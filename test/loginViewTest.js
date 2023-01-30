/* eslint-disable no-undef */

"use strict";

const mq = require("mithril-query");
const chai = require("chai");
const sinon = require("sinon");
const assert = chai.assert;
const expect = chai.expect;


// view
const login = require("../src/views/login");

// models
const Auth = require("../src/models/auth");


chai.should();

describe("Test login view", () => {
    let loginMock;

    beforeEach(() => {
        loginMock = sinon.stub(Auth, "login").returns();
    });

    afterEach(() => {
        Auth.login.restore();
    });


    it("should render a header and a register form", () => {
        const output  = mq(login);

        output.should.have("h1");
        output.should.contain("Välkommen till Spark!");
        output.should.have("div.text-center > h4");
        output.should.contain("Logga in med ditt konto!");
        output.should.have("form.user");

        assert.isFalse(loginMock.calledOnce);
    });

    it("should login customer", () => {
        const output = mq(login);

        // set values on the inputs
        output.setValue("input[type='email']", "email@example.com");
        output.setValue("input[type='password']", "password");

        output.trigger("form.user", "submit");

        assert.isTrue(loginMock.calledOnce);
        expect(Auth.user.email).to.equal("email@example.com");
        expect(Auth.user.password).to.equal("password");
    });


    it("should navigate to register page on click", () => {
        const output  = mq(login);

        output.should.have("div.text-center > a");
        output.should.contain("Har du inget konto? Registrera dig!");
        output.click('a.small');

        expect(output.has('a.small[href="#!/registrera"]')).to.be.true;

        assert.isFalse(loginMock.calledOnce);
    });



    describe("Test login with Google onclick", () => {
        let googleLoginMock;

        beforeEach(() => {
            googleLoginMock = sinon.stub(Auth, "loginWithGoogle");
        });

        afterEach(() => {
            Auth.loginWithGoogle.restore();
        });

        it("should login customer with Google", () => {
            const output = mq(login);

            output.click(".btn.btn-google");
            assert.isTrue(googleLoginMock.calledOnce);
        });
    });

    describe("Test login with Github onclick", () => {
        let GithubLoginMock;

        beforeEach(() => {
            GithubLoginMock = sinon.stub(Auth, "loginWithGithub");
        });

        afterEach(() => {
            Auth.loginWithGithub.restore();
        });

        it("should login customer with Github", () => {
            const output = mq(login);

            output.click(".btn.btn-github");
            assert.isTrue(GithubLoginMock.calledOnce);
        });
    });
});
