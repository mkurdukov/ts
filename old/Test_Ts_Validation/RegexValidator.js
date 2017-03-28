"use strict";
var RegexValidator = (function () {
    function RegexValidator(value, expression) {
        this.value = value;
        this.expression = expression;
    }
    RegexValidator.prototype.isValid = function () {
        if (!this.value)
            return false;
        return this.expression.test(this.value);
    };
    return RegexValidator;
}());
exports.RegexValidator = RegexValidator;
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = RegexValidator;
//# sourceMappingURL=RegexValidator.js.map