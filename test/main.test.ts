import Main from "../src/main";
import "mocha";
import { expect, assert } from 'chai';
//import chai = require('chai');

import { suite, test, slow, timeout, skip, only } from "mocha-typescript";
 
@suite 
class TestFromSite {

    // @test
    // assert_equals() {
    //     //expect(1*1).to.be.equal(1);
    //     assert.equal('bar', 'foo equal `bar`');
    // }
    
    // @test("should pass async tests")
    // assert_pass_async(done: Function) {
    //     setTimeout(() => done(), 1);
    // }
    
    // @test("should fail async when given error")
    // assert_fail_async(done: Function) {
    //     setTimeout(() => done(new Error("Oops...")), 1);
    // }
    
    // @test("should fail async when callback not called")
    // @timeout(100)
    // assert_fail_async_no_callback(done: Function) {
    //     // Never called... t/o intentional.
    // }
    
    // @test("should pass when promise resolved")
    // promise_pass_resolved() {
    //     return new Promise((resolve, reject) => {
    //         setTimeout(() => resolve(), 1);
    //     });
    // }
    
    // @test("should fail when promise rejected")
    // promise_fail_rejected() {
    //     return new Promise((resolve, reject) => {
    //         setTimeout(() => reject(new Error("Ooopsss...")), 1);
    //     });
    // }
}