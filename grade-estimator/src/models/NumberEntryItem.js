import Item from './Item'

export default class NumberEntryItem extends Item {
    constructor (name, pctOfTotal = 0, maxVal) {
        super(name, pctOfTotal)

        this.options = []

        for (let j = 1; j <= maxVal; j++) {
            // the max val represents how many of these items there are
            // thus we need to figure out how much each of these items counts toward the total
            let cntVal = (j / maxVal) * 100
            this.options.push({calcValue: cntVal, displayValue: j})
        }
    }
}
