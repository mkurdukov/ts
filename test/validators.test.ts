import EmailValidator from "../src/Validation/EmailValidator";
import "mocha";
import { expect, assert } from 'chai';

import { suite, test, slow, timeout, skip, only } from "mocha-typescript";
 
 @suite 
 class ValidatorsTest{

    @test("Should Validate list of emails")
     validateEmail(){

        let emails: Array<string> = ["first@second.com", "max@tula.co", "max@kur", "mdm@ddff.ri"];  
        let validator: EmailValidator;
        validator = new EmailValidator();
        emails.forEach(email => {
            assert.isTrue(validator.isValid(email));    
        });
        
        emails = ["firstsecond.com", "maxtula.co", "maxkur", "mdmddff.ri"];  
       
        emails.forEach(email => {
            assert.isFalse(validator.isValid(email));    
        });

     }
 }