"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class CompareToValidator {
    constructor(otherId) {
        this.otherId = otherId;
    }
    isValid(value) {
        return this.compareValues(value, this.getOtherValue());
    }
    getOtherValue() {
        return "";
    }
}
exports.default = CompareToValidator;
//# sourceMappingURL=CompreToValidator.js.map