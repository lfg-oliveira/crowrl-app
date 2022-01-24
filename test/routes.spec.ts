import { expect } from "chai";
import { describe, it } from "mocha";
import { assertHttp } from "../src/middleware/routes.middleware";


describe('testing if assertHttp is working', function () {
    it('should be true', function () {
        expect(assertHttp('test')).to.be.equal("http://test");
    })

    it('should be true', function () {
        expect(assertHttp("http")).to.be.equal("http")
    })
})