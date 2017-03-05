"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
require("mocha");
const chai_1 = require("chai");
//import chai = require('chai');
const mocha_typescript_1 = require("mocha-typescript");
let TestFromSite = class TestFromSite {
    assert_equals() {
        //expect(1*1).to.be.equal(1);
        chai_1.assert.equal('bar', 'foo equal `bar`');
    }
    assert_pass_async(done) {
        setTimeout(() => done(), 1);
    }
    assert_fail_async(done) {
        setTimeout(() => done(new Error("Oops...")), 1);
    }
    assert_fail_async_no_callback(done) {
        // Never called... t/o intentional.
    }
    promise_pass_resolved() {
        return new Promise((resolve, reject) => {
            setTimeout(() => resolve(), 1);
        });
    }
    promise_fail_rejected() {
        return new Promise((resolve, reject) => {
            setTimeout(() => reject(new Error("Ooopsss...")), 1);
        });
    }
};
__decorate([
    mocha_typescript_1.test,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], TestFromSite.prototype, "assert_equals", null);
__decorate([
    mocha_typescript_1.test("should pass async tests"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Function]),
    __metadata("design:returntype", void 0)
], TestFromSite.prototype, "assert_pass_async", null);
__decorate([
    mocha_typescript_1.test("should fail async when given error"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Function]),
    __metadata("design:returntype", void 0)
], TestFromSite.prototype, "assert_fail_async", null);
__decorate([
    mocha_typescript_1.test("should fail async when callback not called"),
    mocha_typescript_1.timeout(100),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Function]),
    __metadata("design:returntype", void 0)
], TestFromSite.prototype, "assert_fail_async_no_callback", null);
__decorate([
    mocha_typescript_1.test("should pass when promise resolved"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], TestFromSite.prototype, "promise_pass_resolved", null);
__decorate([
    mocha_typescript_1.test("should fail when promise rejected"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], TestFromSite.prototype, "promise_fail_rejected", null);
TestFromSite = __decorate([
    mocha_typescript_1.suite
], TestFromSite);
//# sourceMappingURL=main.test.js.map