import IValidator from "./IValidator";
import Dictionary from "../Tools/Dictionary";

enum CompareRule {
    GreaterThan,
    GreatThanOrEqualTo,
    LessThan,
    LessThanOrEqualTo,
    NotEqualTo
};

class CompareValidator implements IValidator{
    private static rules: Dictionary<CompareRule, (first: number, second: number) => boolean>;
    static init(): void {
         CompareValidator.rules = new Dictionary<CompareRule, (first: number, second: number) => boolean>();
         CompareValidator.rules.add(CompareRule.GreatThanOrEqualTo, (first, second)=>{return first >= second;});
         CompareValidator.rules.add(CompareRule.GreaterThan, (first, second)=>{return first > second;});
         CompareValidator.rules.add(CompareRule.LessThan, (first, second)=>{return first < second;});
         CompareValidator.rules.add(CompareRule.LessThanOrEqualTo, (first, second)=>{return first <= second;});
         CompareValidator.rules.add(CompareRule.NotEqualTo, (first, second)=>{return first !== second;});
    }
    constructor(    protected first: number,
                    protected second: number,
                    protected rule: CompareRule){
    }

    isValid(): boolean{
        let compareFunc = CompareValidator.rules.tryGet(this.rule);
        if(compareFunc)
            return compareFunc(this.first, this.second);

        return false;
    }
}

CompareValidator.init();

export { CompareRule, CompareValidator }