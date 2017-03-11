import IValidator from "./IValidator"

abstract class CompareToValidator implements IValidator{
    constructor(protected otherId: string){
    }

    isValid(value: any): boolean{
        return this.compareValues(value, this.getOtherValue());
    }

    getOtherValue(): any {
        return "";
    }

    abstract compareValues(value: any, other: any) : boolean;
}

export default CompareToValidator;