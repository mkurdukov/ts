"use strict";
var Dictionary_1 = require("../Tools/Dictionary");
var CompareRule;
(function (CompareRule) {
    CompareRule[CompareRule["GreaterThan"] = 0] = "GreaterThan";
    CompareRule[CompareRule["GreatThanOrEqualTo"] = 1] = "GreatThanOrEqualTo";
    CompareRule[CompareRule["LessThan"] = 2] = "LessThan";
    CompareRule[CompareRule["LessThanOrEqualTo"] = 3] = "LessThanOrEqualTo";
    CompareRule[CompareRule["NotEqualTo"] = 4] = "NotEqualTo";
})(CompareRule || (CompareRule = {}));
exports.CompareRule = CompareRule;
;
var CompareValidator = (function () {
    function CompareValidator(first, second, rule) {
        this.first = first;
        this.second = second;
        this.rule = rule;
    }
    CompareValidator.init = function () {
        CompareValidator.rules = new Dictionary_1.default();
        CompareValidator.rules.add(CompareRule.GreatThanOrEqualTo, function (first, second) { return first >= second; });
        CompareValidator.rules.add(CompareRule.GreaterThan, function (first, second) { return first > second; });
        CompareValidator.rules.add(CompareRule.LessThan, function (first, second) { return first < second; });
        CompareValidator.rules.add(CompareRule.LessThanOrEqualTo, function (first, second) { return first <= second; });
        CompareValidator.rules.add(CompareRule.NotEqualTo, function (first, second) { return first !== second; });
    };
    CompareValidator.prototype.isValid = function () {
        var compareFunc = CompareValidator.rules.tryGet(this.rule);
        if (compareFunc)
            return compareFunc(this.first, this.second);
        return false;
    };
    return CompareValidator;
}());
exports.CompareValidator = CompareValidator;
CompareValidator.init();
//# sourceMappingURL=CompareValidator.js.map