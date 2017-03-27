import RegexValidator from "./RegexValidator"

class EmailValidator extends RegexValidator {
    constructor(value: string){
        super(value, new RegExp(/.+@.+/))
    }
}

export default EmailValidator;