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
require("mocha");
const chai_1 = require("chai");
const mocha_typescript_1 = require("mocha-typescript");
let ValidatorsTest = class ValidatorsTest {
    validateEmail() {
        let emails = ["first@second.com", "max@tula.co", "max@kur", "mdm@ddff.ri"];
        let validator;
        validator = new EmailValidator_1.default();
        emails.forEach(email => {
            chai_1.assert.isTrue(validator.isValid(email));
        });
        emails = ["firstsecond.com", "maxtula.co", "maxkur", "mdmddff.ri"];
        emails.forEach(email => {
            chai_1.assert.isFalse(validator.isValid(email));
        });
    }
};
__decorate([
    mocha_typescript_1.test("Should Validate list of emails"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ValidatorsTest.prototype, "validateEmail", null);
ValidatorsTest = __decorate([
    mocha_typescript_1.suite
], ValidatorsTest);
//# sourceMappingURL=validators.test.js.map