import IValidator from "./IValidator"
import Dictionary from "../Tools/Dictionary";

export class CompareValidator implements IValidator{
    private static rules: Dictionary<CompareRule, (first: number, second: number) => boolean>;
    static init(): void {
        CompareValidator.rules = new Dictionary<CompareRule, (first: number, second: number) => boolean>();
        CompareValidator.rules.add(CompareRule.GreatThanOrEqualTo, (first, second)=>{return first >= second;})
        CompareValidator.rules.add(CompareRule.GreaterThan, (first, second)=>{return first > second;})
        CompareValidator.rules.add(CompareRule.LessThan, (first, second)=>{return first < second;})
        CompareValidator.rules.add(CompareRule.LessThanOrEqualTo, (first, second)=>{return first <= second;})
        CompareValidator.rules.add(CompareRule.NotEqualTo, (first, second)=>{return first !== second;})
    }
    constructor(    protected otherValue: number,
                    protected rule: CompareRule){
    }

    isValid(value: any): boolean{
        let numValue = Number(value);
        if(isNaN(numValue))
            return false;

        if(CompareValidator.rules.containsKey(this.rule))
        {
            let compareFunc = CompareValidator.rules[this.rule];
            return compareFunc(numValue, this.otherValue);
        }
        
        return false;
    }
}

CompareValidator.init();

export enum CompareRule {
    GreaterThan,
    GreatThanOrEqualTo,
    LessThan,
    LessThanOrEqualTo,
    NotEqualTo
};

export default CompareValidator;