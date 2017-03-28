"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const RegexValidator_1 = require("./RegexValidator");
class EmailValidator extends RegexValidator_1.default {
    constructor() {
        super(new RegExp(/.+@.+/));
    }
}
exports.default = EmailValidator;
//# sourceMappingURL=EmailValidator.js.map