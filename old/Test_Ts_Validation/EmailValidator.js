"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var RegexValidator_1 = require("./RegexValidator");
var EmailValidator = (function (_super) {
    __extends(EmailValidator, _super);
    function EmailValidator(value) {
        return _super.call(this, value, new RegExp(/.+@.+/)) || this;
    }
    return EmailValidator;
}(RegexValidator_1.default));
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = EmailValidator;
//# sourceMappingURL=EmailValidator.js.map