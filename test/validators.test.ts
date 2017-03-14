import EmailValidator from "../src/Validation/EmailValidator";
import { CompareValidator, CompareRule }  from "../src/Validation/CompareValidator";

import "mocha";
import { expect, assert } from 'chai';

import { suite, test, slow, timeout, skip, only } from "mocha-typescript";
 
 @suite 
 class ValidatorsTest{

    @test("Should Validate list of emails")
     validateEmail(){
        ["first@second.com", "max@tula.co", "max@kur", "mdm@ddff.ri"].forEach(email => {
            assert.isTrue(new EmailValidator(email).isValid());
        });
       
        ["firstsecond.com", "maxtula.co", "maxkur", "mdmddff.ri"].forEach(email => {
            assert.isFalse(new EmailValidator(email).isValid());    
        });
     }

     @test("Should Validate two integer values")
     shouldValidate2IntValues(){
         let validator: CompareValidator;
         validator = new CompareValidator(5, 1, CompareRule.GreaterThan);
         assert.isTrue(validator.isValid());
     }
 }