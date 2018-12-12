export default class Item {
    constructor (name, pctOfTotal = 0) {
        this.name = name

        this.pctOfTotal = pctOfTotal

        this.score = 0

        this.maxPossible = this.pctOfTotal * 100

        this.options = []
    }

    /**
     * The amount this item contributes to the overall course total
     * @returns {*}
     */
    get contribToTotal () {
        return this.pctOfTotal * this.score
    }
};
