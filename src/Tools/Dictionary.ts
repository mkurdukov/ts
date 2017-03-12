import {Md5} from 'ts-md5/dist/md5'

interface IDictionary<TKey, TValue> {
    add(key: TKey, value: TValue): void;
    get(key: TKey): TValue;
    tryGet(key: TKey): TValue;
    remove(key: TKey): void;
    containsKey(key: TKey): boolean;
    keys(): TKey[];
    values(): TValue[];
}


class Dictionary<TKey, TValue> implements IDictionary<TKey, TValue>  {

    _keys: Array<TKey> = new Array<TKey>();
    _keyHashes: Array<string> = new Array<string>();
    _values: Array< TValue> = new Array<TValue>();

    constructor();
    constructor(init?: { key: TKey; value: TValue; }[]) {
        if(!init)
            return;

        for (var x = 0; x < init.length; x++) {
            this[this.getKey(init[x].key)] = init[x].value;
            this._keys.push(init[x].key);
            this._keyHashes.push(this.getKey(init[x].key));
            this._values.push(init[x].value);
        }
    }

    add(key: TKey, value: TValue) {
        if(this.containsKey(key))
            throw Error(`key "${key}" exists`);

        this[this.getKey(key)] = value;
        this._keys.push(key);
        this._keyHashes.push(this.getKey(key));
        this._values.push(value);
    }

    get(key: TKey) : TValue {
        let result = this.tryGet(key);
        if(result != null)
            return result; 
        throw Error(`Key ${key} could not be found`);
    }

    tryGet(key: TKey) : TValue {
        if(this.containsKey(key))
            return this[this.getKey(key)];
        return null;
    }

    remove(key: TKey) {
        var index = this._keys.indexOf(key, 0);
        if(index < 0)
            throw Error(`key "${key}" doesn't exists`);

        this._keys.splice(index, 1);
        this._keyHashes.splice(index, 1);
        this._values.splice(index, 1);

        delete this[this.getKey(key)];
    }

    keys(): TKey[] {
        return this._keys;
    }

    values(): TValue[] {
        return this._values;
    }

    containsKey(key: TKey) {
        return typeof this[this.getKey(key)] !== "undefined";
    }

    toLookup(): IDictionary<TKey, TValue> {
        return this;
    }

    private getKey(key: TKey) : string{
        return Md5.hashStr(JSON.stringify(key)) as string;
    }
}

export default Dictionary;