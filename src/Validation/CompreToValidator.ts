import IValidator from "./IValidator"
import Dictionary from "../Tools/Dictionary";

abstract class CompareToValidator implements IValidator{
    static rules: Dictionary<CompareRule, (first: number | string, second: number | string) => boolean>;
    static init(): void {
        CompareToValidator.rules = new Dictionary<CompareRule, (first: number | string, second: number | string) => boolean>();
        CompareToValidator.rules.add(CompareRule.GreatThanOrEqualTo, ())
    }
    constructor(    protected otherValue: string,
                    protected rule: CompareRule, 
                    protected memberType: string, 
                    protected isEnum: boolean){
    }

    isValid(value: any): boolean{
        return this.compareValues(value, this.getOtherValue());
    }

    getOtherValue(): any {
        return "";
    }

    abstract compareValues(value: any, other: any) : boolean;
}

interface ICompareTo
{

}

class CompareToNumbers implements ICompareTo {

}
CompareToValidator.init();

export enum CompareRule{
    GreaterThan,
    GreatThanOrEqualTo,
    LessThan,
    LessThanOrEqualTo,
    NotEqualTo
};

export default CompareToValidator;