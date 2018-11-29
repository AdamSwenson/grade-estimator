import Item from "./Item";
import Grade from "./Grade";

export default class LetterGradedItem extends Item {

    constructor(name, pctOfTotal = 0) {
        super(name, pctOfTotal);

        this.options = Grade.initializeGrades();
    }
}