<?php
/**
 * This holds the definitions of grades
 *
 * @author adam
 */
class Grades {
    const A = 95;
    const Amin = 92;
    const Bplus = 88;
    const B = 85;
    const Bmin = 82;
    const Cplus = 78;
    const C = 75;
    const Cmin = 72;
    const Dplus = 68;
    const D = 65;
    const Dmin = 62;
    const F = 55;
    const nc = 0;
/**
 * Array which will hold all the grade items
 */
    static public $grade_array;

    public function __construct() {
        $this->grade_array = array('A' => self::A, 
            'A-' => self::Amin,
            'B+' => self::Bplus,
            'B' => self::B,
            'B-' => self::Bmin,
            'C+' => self::Cplus,
            'C' => self::C,
            'C-' => self::Cmin,
            'D+' => self::Dplus,
            'D' => self::D,
            'D-' => self::Dmin,
            'F' => self::F,
            '0' => self::nc); 
    }
}