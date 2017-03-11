import EmailValidator from "../src/Validation/EmailValidator";
import "mocha";
import { expect, assert } from 'chai';

import { suite, test, slow, timeout, skip, only } from "mocha-typescript";
 
 @suite 
 class ValidatorsTest{

    @test("Should Validate list of emails")
     validateEmail(){
        let validator = new EmailValidator();
        ["first@second.com", "max@tula.co", "max@kur", "mdm@ddff.ri"].forEach(email => {
            assert.isTrue(validator.isValid(email));    
        });
       
        ["firstsecond.com", "maxtula.co", "maxkur", "mdmddff.ri"].forEach(email => {
            assert.isFalse(validator.isValid(email));    
        });
     }

     @test("Should Validate two integer values")
     shouldValidate2IntValues(){
         
     }

 }