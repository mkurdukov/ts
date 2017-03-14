import IValidator from "./IValidator"

export abstract class RegexValidator implements IValidator {
    constructor(protected value: string, protected expression: RegExp){
    }

        isValid(): boolean {
        if(!this.value)
            return false;
        return this.expression.test(this.value);
    }

}

export default RegexValidator;