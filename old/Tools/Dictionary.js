"use strict";
var md5_1 = require("ts-md5/dist/md5");
var Dictionary = (function () {
    function Dictionary(init) {
        this._keys = new Array();
        this._keyHashes = new Array();
        this._values = new Array();
        if (!init)
            return;
        for (var x = 0; x < init.length; x++) {
            this[this.getKey(init[x].key)] = init[x].value;
            this._keys.push(init[x].key);
            this._keyHashes.push(this.getKey(init[x].key));
            this._values.push(init[x].value);
        }
    }
    Dictionary.prototype.add = function (key, value) {
        if (this.containsKey(key))
            throw Error("key \"" + key + "\" exists");
        this[this.getKey(key)] = value;
        this._keys.push(key);
        this._keyHashes.push(this.getKey(key));
        this._values.push(value);
    };
    Dictionary.prototype.get = function (key) {
        var result = this.tryGet(key);
        if (result != null)
            return result;
        throw Error("Key " + key + " could not be found");
    };
    Dictionary.prototype.tryGet = function (key) {
        if (this.containsKey(key))
            return this[this.getKey(key)];
        return null;
    };
    Dictionary.prototype.remove = function (key) {
        var index = this._keys.indexOf(key, 0);
        if (index < 0)
            throw Error("key \"" + key + "\" doesn't exists");
        this._keys.splice(index, 1);
        this._keyHashes.splice(index, 1);
        this._values.splice(index, 1);
        delete this[this.getKey(key)];
    };
    Dictionary.prototype.keys = function () {
        return this._keys;
    };
    Dictionary.prototype.values = function () {
        return this._values;
    };
    Dictionary.prototype.containsKey = function (key) {
        return typeof this[this.getKey(key)] !== "undefined";
    };
    Dictionary.prototype.toLookup = function () {
        return this;
    };
    Dictionary.prototype.getKey = function (key) {
        return md5_1.Md5.hashStr(JSON.stringify(key));
    };
    return Dictionary;
}());
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Dictionary;
//# sourceMappingURL=Dictionary.js.map