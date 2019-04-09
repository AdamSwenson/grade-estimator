import Item from './Item'

export default class PassFailItem extends Item {
    constructor (name, pctOfTotal = 0) {
        super(name, pctOfTotal)

        this.options = [{displayValue: 'Credit', calcValue: 100}, {displayValue: 'No credit', calcValue: 0}]
    }
}
