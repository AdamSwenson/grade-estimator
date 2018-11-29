export default class Grade {

    constructor() {

        /** The id of the grade assignment on the server */
        this.id;

        /** The letter grade or other string display */
        this.displayValue;

        /** The value of the grade used in calculations */
        this.calcValue;

        /** The id of the grade object on the server */
        this.gradeId;

        /** If the grade is part of a user defined group of grades,
         * this identifies the group */
        this.group;

        /** The minimum score required to receive this grade */
        this.minScore;

        /** The correct position in the order of grades */
        this.ordinal;
    }

    static get letterGrades() {
        return [
            'A+',
            'A',
            'A-',
            'B+',
            'B',
            'B-',
            'C+',
            'C',
            'C-',
            'D+',
            'D',
            'D-',
            'F',
        ];
    }

    /** @var array The standardized grades and various associated values in descending order */
    static get defaults() {
        return [
            {displayValue: 'A+', calcValue: 98, minScore: 97, group: 0, ordinal: 0},
            {displayValue: 'A', calcValue: 95, minScore: 93, group: 0, ordinal: 1},
            {displayValue: 'A-', calcValue: 92, minScore: 90, group: 0, ordinal: 2},
            {displayValue: 'B+', calcValue: 88, minScore: 87, group: 0, ordinal: 3},
            {displayValue: 'B', calcValue: 85, minScore: 83, group: 0, ordinal: 4},
            {displayValue: 'B-', calcValue: 82, minScore: 80, group: 0, ordinal: 5},
            {displayValue: 'C+', calcValue: 78, minScore: 77, group: 0, ordinal: 6},
            {displayValue: 'C', calcValue: 75, minScore: 73, group: 0, ordinal: 7},
            {displayValue: 'C-', calcValue: 72, minScore: 70, group: 0, ordinal: 8},
            {displayValue: 'D+', calcValue: 68, minScore: 67, group: 0, ordinal: 9},
            {displayValue: 'D', calcValue: 65, minScore: 63, group: 0, ordinal: 10},
            {displayValue: 'D-', calcValue: 62, minScore: 60, group: 0, ordinal: 11},
            {displayValue: 'F', calcValue: 55, minScore: 50, group: 0, ordinal: 12}
        ];

    }

    /**
     * Returns a list of grade objects using Grade.defaults
     *
     * @returns {{}}
     */
    static initializeGrades() {
        let grades = [];
        _.forEach(Grade.defaults, function (grade) {
            grades.push(Grade.factory({
                displayValue: grade.displayValue,
                calcValue: grade.calcValue,
                minScore: grade.minScore,
                group: grade.group,
                ordinal: grade.ordinal
            }));
        });
        //
        return grades;
    }


    /**
     * Returns a list of strings which are property
     * names. These fields can be filled from the input
     * @returns {[string,string]}
     */
    static get fillableProps() {
        return [
            'id',
            'displayValue', //the string value of the grade
            'calcValue',
            'gradeId',
            'group',
            'minScore',
            'ordinal'
        ];

    }


    static factory(params) {
        let obj = new Grade();
        //fill any fillable values
        Grade.fillableProps.forEach(function (v) {
            if (typeof params[v] !== 'undefined') {
                obj[v] = params[v];
            }
        })
        return obj;
    }

};

// module.exports = {
//
//
//     alculator.prototype.getLetter = function(){
//     this.A = new Grade(95, 93.49, 'A');
//     this.Amin = new Grade(93.5, 90.1, 'A-');
//     this.Bplus = new Grade(90, 87.5, 'B+');
//     this.B = new Grade(87.49, 83.5, 'B');
//     this.Bmin = new Grade(83.49, 80.1, 'B-');
//     this.Cplus = new Grade(80.0, 77.5, 'C+');
//     this.C = new Grade(77.49, 73.5, 'C');
//     this.Cmin = new Grade(73.49, 70.1, 'C-');
//     this.Dplus = new Grade(70, 67.5, 'D+');
//     this.D = new Grade(67.49, 63.5, 'D');
//     this.Dmin = new Grade(63.49, 60.1, 'D-');
//     this.F = new Grade(60, 0, 'F');
//
//     this.grades = Array(this.A, this.Amin, this.Bplus, this.B, this.Bmin, this.Cplus, this.C, this.Cmin, this.Dplus, this.D, this.Dmin, this.F);
//     $.each(this.grades, function(i){
//         jj = this.isMe(me.numScore);
//         if(jj === true){
//             return false; //break loop
//         }
//     });
// }
// /*
//  * This object defines the letter grades and associated scores
//  */
// function Grade(max, min, display){
//     this.max = max;
//     this.min = min;
//     this.display = display;
// }
// Grade.prototype.isMe = function(score){ //compares whether score between min and max, if so, displays and returns true
//     if((score <= this.max) && (score >= this.min)){
//         $('#gradeLetter').val(this.display);
//         return true;
//     }
// }
// }