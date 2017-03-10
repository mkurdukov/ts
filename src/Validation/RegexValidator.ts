import IValidator from "./IValidator"

export abstract class RegexValidator implements IValidator {
    
    isValid(value: any): boolean {
        if(!value)
            return false;
        return this.regExpression.test(value.toString());
    }

    regExpression: RegExp;
    
    constructor(expression: RegExp){
        this.regExpression = expression;
    }
}

export default RegexValidator;