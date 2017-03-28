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
const Dictionary_1 = require("../src/Tools/Dictionary");
require("mocha");
const chai_1 = require("chai");
const mocha_typescript_1 = require("mocha-typescript");
let TestDictionary = class TestDictionary {
    shouldCreateDictionaryStringKey() {
        let dict = new Dictionary_1.default();
        for (let i = 0; i < 5; i++) {
            dict.add("Key" + i, i);
        }
        for (let i = 0; i < 5; i++) {
            let key = `Key` + i;
            chai_1.assert.isTrue(dict.containsKey(key));
            chai_1.assert.equal(dict.get(key), i);
        }
    }
    shouldCreateDictionaryNumberKey() {
        let dict = new Dictionary_1.default();
        for (let i = 0; i < 5; i++) {
            dict.add(i * 100, i);
        }
        for (let i = 0; i < 5; i++) {
            let key = i * 100;
            chai_1.assert.isTrue(dict.containsKey(key));
            chai_1.assert.equal(dict.get(key), i);
        }
    }
    shouldCreateDictionaryEnumKey() {
        var TestEnum;
        (function (TestEnum) {
            TestEnum[TestEnum["Value1"] = 0] = "Value1";
            TestEnum[TestEnum["Value2"] = 1] = "Value2";
            TestEnum[TestEnum["Value3"] = 2] = "Value3";
            TestEnum[TestEnum["Value4"] = 3] = "Value4";
            TestEnum[TestEnum["Value5"] = 4] = "Value5";
        })(TestEnum || (TestEnum = {}));
        let dict = new Dictionary_1.default();
        dict.add(TestEnum.Value1, 1);
        dict.add(TestEnum.Value2, 2);
        dict.add(TestEnum.Value3, 3);
        dict.add(TestEnum.Value4, 4);
        dict.add(TestEnum.Value5, 5);
        chai_1.assert.isTrue(dict.containsKey(TestEnum.Value1));
        chai_1.assert.equal(dict.get(TestEnum.Value1), 1);
        chai_1.assert.isTrue(dict.containsKey(TestEnum.Value2));
        chai_1.assert.equal(dict.get(TestEnum.Value2), 2);
        chai_1.assert.isTrue(dict.containsKey(TestEnum.Value3));
        chai_1.assert.equal(dict.get(TestEnum.Value3), 3);
        chai_1.assert.isTrue(dict.containsKey(TestEnum.Value4));
        chai_1.assert.equal(dict.get(TestEnum.Value4), 4);
        chai_1.assert.isTrue(dict.containsKey(TestEnum.Value5));
        chai_1.assert.equal(dict.get(TestEnum.Value5), 5);
    }
    shouldNotAllowToAddExistingKey() {
        let dict = new Dictionary_1.default();
        dict.add("Key1", "value1");
        chai_1.expect(() => { dict.add("Key1", "value1"); }).to.throw(Error);
    }
    shouldRemoveExistingKey() {
        let dict = new Dictionary_1.default();
        const key = "FirstKey";
        dict.add(key, "value1");
        chai_1.expect(dict.containsKey(key)).to.be.true;
        dict.remove(key);
        chai_1.expect(dict.containsKey(key)).to.be.false;
    }
    shouldThrowErrorIfRemoveAbsentKey() {
        let dict = new Dictionary_1.default();
        const key = "FirstKey";
        dict.add(key, "value1");
        chai_1.expect(dict.containsKey(key)).to.be.true;
        dict.remove(key);
        chai_1.expect(dict.containsKey(key)).to.be.false;
        chai_1.expect(() => { dict.remove(key); }).to.throw(Error);
    }
};
__decorate([
    mocha_typescript_1.test("Should Create Instance of Dictionary with String key"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], TestDictionary.prototype, "shouldCreateDictionaryStringKey", null);
__decorate([
    mocha_typescript_1.test("Should Create Instance of Dictionary with Number key"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], TestDictionary.prototype, "shouldCreateDictionaryNumberKey", null);
__decorate([
    mocha_typescript_1.test("Should Create Instance of Dictionary with Enum key"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], TestDictionary.prototype, "shouldCreateDictionaryEnumKey", null);
__decorate([
    mocha_typescript_1.test("Should Not Allow to Add Existing Key"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], TestDictionary.prototype, "shouldNotAllowToAddExistingKey", null);
__decorate([
    mocha_typescript_1.test("Should Remove Existing Key"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], TestDictionary.prototype, "shouldRemoveExistingKey", null);
__decorate([
    mocha_typescript_1.test("Should Throw Error If Rmeove Absent Key"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], TestDictionary.prototype, "shouldThrowErrorIfRemoveAbsentKey", null);
TestDictionary = __decorate([
    mocha_typescript_1.suite("Testing Generic Dictionay")
], TestDictionary);
//# sourceMappingURL=dictionary.test.js.map