<?php
/**
 * A single assignment token (not type) for the class
 *
 * @author adam
 * @since 2013Feb14
 */
class Assignment {
    /**
     *
     * @var string The name of the element used in jquery manipulations
     */
    protected $elementName;
    /**
     *
     * @var float The percent of the course grade the assignment is responsible for
     */
    protected $pctOfGrade;
    /**
     *
     * @var string The name of the assignment to be displayed to the user
     */
    protected $displayName;
    /**
     * These will be set from a mySQL query
     * @param string $elementName
     * @param float $pct_of_grade
     * @param string $display_name
     */
    public function __construct($elementName, $pct_of_grade, $display_name) {
        $this->displayName = $display_name;
        $this->elementName = $elementName;
        $this->pctOfGrade = $pct_of_grade;
    }
    /**
     * Getter for element Name
     * @return string elementName
     */
    public function elementName(){
        return $this->elementName;
    }
    /**
     * Getter for pct of grade
     * @return float percentage of grade
     */
    public function pctOfGrade(){
        return $this->pctOfGrade;
    }
    /**
     * Getter for displayName
     * @return string Name displayed  
     */
    public function displayName(){
        return $this->displayName;
    }
}