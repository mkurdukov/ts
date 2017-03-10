import RegexValidator from "./RegexValidator"

class EmailValidator extends RegexValidator {
    constructor(){
        super(new RegExp(/.+@.+/))
    }
}

export default EmailValidator;