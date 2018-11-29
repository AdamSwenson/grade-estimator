<?php
/**
 * Parent class for the displayed assignment. 
 * 
 * Used because there are two versions of display subclass. 
 * GradeButtons subclass makes a set of buttons
 * GradeMenus makes a jquery menu of grades for each assignment
 *
 * @author adam
 * @since 2014Feb14
 */
abstract class GradeElement {
/**
 * @var string Name of the element 
 */
	protected $elementName;
/**
 * @var type Percent of the course grade determined by the particualr element
 */
	protected $pctOfGrade;
/**
 * @var string The name of the element that will be displayed
 */
	protected $displayName;
/**
 * @var type 
 */
	protected $assignedValue;

/**
 * 
 * @param Assignment $assign An instance of Assignment which holds the information for the assignment
 * @param Grades $grades A grades class which defines the letter grades and their numerical equivalents
 */
	public function __construct(Assignment $assign, Grades $grades){
        $this->elementName = $assign->elementName();
		$this->pctOfGrade = $assign->pctOfGrade();
		$this->displayName = $assign->displayName();
		$this->makeMenu($grades);
    }
    
/**
 * Creates either a menu or buttonset with the grades for the item depending on the child class instantiated
 * @param Grades $grades
 */
	protected function makeMenu(Grades $grades){
    }
    
}