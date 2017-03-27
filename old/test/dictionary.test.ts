import Dictionary from "../src/Tools/Dictionary";
import "mocha";
import { expect, assert } from 'chai';

import { suite, test, slow, timeout, skip, only } from "mocha-typescript";
 
@suite("Testing Generic Dictionay")
class TestDictionary {

    @test("Should Create Instance of Dictionary with String key")
    shouldCreateDictionaryStringKey():void{
        let dict: Dictionary<string, number> = new Dictionary<string, number>();
        for(let i = 0; i< 5; i++){
            dict.add("Key" + i, i);
        }

        for(let i = 0; i< 5; i++){
            let key =`Key` + i;
            assert.isTrue(dict.containsKey(key));
            assert.equal(dict.get(key), i);
        }
    }

    @test("Should Create Instance of Dictionary with Number key")
    shouldCreateDictionaryNumberKey():void{
        let dict: Dictionary<number, number> = new Dictionary<number, number>();
        for(let i = 0; i< 5; i++){
            dict.add(i * 100, i);
        }

        for(let i = 0; i< 5; i++){
            let key = i * 100;
            assert.isTrue(dict.containsKey(key));
            assert.equal(dict.get(key), i);
        }
    }

     @test("Should Create Instance of Dictionary with Enum key")
    shouldCreateDictionaryEnumKey():void{

        enum TestEnum {
            Value1,
            Value2,
            Value3,
            Value4,
            Value5,
        }
        let dict: Dictionary<TestEnum, number> = new Dictionary<TestEnum, number>();
        dict.add(TestEnum.Value1, 1);
        dict.add(TestEnum.Value2, 2);
        dict.add(TestEnum.Value3, 3);
        dict.add(TestEnum.Value4, 4);
        dict.add(TestEnum.Value5, 5);

        assert.isTrue(dict.containsKey(TestEnum.Value1));
        assert.equal(dict.get(TestEnum.Value1), 1);

        assert.isTrue(dict.containsKey(TestEnum.Value2));
        assert.equal(dict.get(TestEnum.Value2), 2);

        assert.isTrue(dict.containsKey(TestEnum.Value3));
        assert.equal(dict.get(TestEnum.Value3), 3);

        assert.isTrue(dict.containsKey(TestEnum.Value4));
        assert.equal(dict.get(TestEnum.Value4), 4);

        assert.isTrue(dict.containsKey(TestEnum.Value5));
        assert.equal(dict.get(TestEnum.Value5), 5);
    }


    @test("Should Not Allow to Add Existing Key")
    shouldNotAllowToAddExistingKey():void{
        let dict: Dictionary<string, string> = new Dictionary<string, string>();
        dict.add("Key1", "value1");
        expect(()=>{dict.add("Key1", "value1");}).to.throw(Error);
    }

    @test("Should Remove Existing Key")
    shouldRemoveExistingKey(): void{
        let dict: Dictionary<string, string> = new Dictionary<string, string>();
        const key = "FirstKey";
        dict.add(key, "value1");
        expect(dict.containsKey(key)).to.be.true;
        dict.remove(key);
        expect(dict.containsKey(key)).to.be.false;
    }

    @test("Should Throw Error If Rmeove Absent Key")
    shouldThrowErrorIfRemoveAbsentKey(): void{
        let dict: Dictionary<string, string> = new Dictionary<string, string>();
        const key = "FirstKey";
        dict.add(key, "value1");
        expect(dict.containsKey(key)).to.be.true;
        dict.remove(key);
        expect(dict.containsKey(key)).to.be.false;
        expect(()=>{dict.remove(key);}).to.throw(Error);
    }
}