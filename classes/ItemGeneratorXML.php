<?php
/**
 * Generates items based on saved xml file
 *
 * @author adam
 */
class ItemGeneratorXML {
    /**
     * 
     * @param \Grades $grades
     */
    public function __construct(\Grades $grades) {
        $sx = simplexml_load_file('assignments.xml');
        foreach ($sx->assignment as $r) {
            $as = new Assignment($r->elementName, $r->pctOfGrade, $r->displayName);
            $el = new GradeButtons($as, $grades);
        }
    }  
    
}