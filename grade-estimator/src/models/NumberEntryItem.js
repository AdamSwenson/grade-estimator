import Item from "./Item";

export default class NumberEntryItem extends Item {

    constructor(name, pctOfTotal = 0, maxVal) {
        super(name, pctOfTotal);

        this.options = [];
        for (let j = 1; j <= maxVal; j++) {
            this.options.push({calcValue: j, displayValue: j});
        }
    }
}