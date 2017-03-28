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
const EmailValidator_1 = require("../src/Validation/EmailValidator");
const CompareValidator_1 = require("../src/Validation/CompareValidator");
require("mocha");
const chai_1 = require("chai");
const mocha_typescript_1 = require("mocha-typescript");
let ValidatorsTest = class ValidatorsTest {
    validateEmail() {
        ["first@second.com", "max@tula.co", "max@kur", "mdm@ddff.ri"].forEach(email => {
            chai_1.assert.isTrue(new EmailValidator_1.default(email).isValid());
        });
        ["firstsecond.com", "maxtula.co", "maxkur", "mdmddff.ri"].forEach(email => {
            chai_1.assert.isFalse(new EmailValidator_1.default(email).isValid());
        });
    }
    shouldValidate2IntValues() {
        let validator;
        validator = new CompareValidator_1.CompareValidator(5, 1, CompareValidator_1.CompareRule.GreaterThan);
        chai_1.assert.isTrue(validator.isValid());
    }
};
__decorate([
    mocha_typescript_1.test("Should Validate list of emails"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ValidatorsTest.prototype, "validateEmail", null);
__decorate([
    mocha_typescript_1.test("Should Validate two integer values"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ValidatorsTest.prototype, "shouldValidate2IntValues", null);
ValidatorsTest = __decorate([
    mocha_typescript_1.suite
], ValidatorsTest);
//# sourceMappingURL=validators.test.js.map