"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class RegexValidator {
    isValid(value) {
        if (!value)
            return false;
        return this.regExpression.test(value.toString());
    }
    constructor(expression) {
        this.regExpression = expression;
    }
}
exports.RegexValidator = RegexValidator;
exports.default = RegexValidator;
//# sourceMappingURL=RegexValidator.js.map