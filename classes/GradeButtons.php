<?php
/**
 * Creaates the displayed grade item
 *
 * @author adam
 * @since 2013Feb14
 */
class GradeButtons extends GradeElement {
    public function __construct($maker, \Grades $grades) {
        parent::__construct($maker, $grades);
    }
    
    protected function makeMenu(Grades $grades){
		echo "<div class='item_button'>";
            echo "<p>";
            echo "<span class='assignmentGradeLabel'> $this->displayName </span> <br />";
                echo "<input type='hidden' id='$this->elementName' name='' data='$this->pctOfGrade'/>";
                echo "<input type='hidden' id='" . $this->elementName . "Raw' name='' data='$this->pctOfGrade'/>";
                echo "<input type='hidden' id='" . $this->elementName . "Score' data='$this->pctOfGrade' class='gradeComponent' />";
//		echo "<input type='hidden' name='" . $this->name . "Score' data='$this->pctOfGrade' class='gradeComponent' />";
                echo "<radioset class='gradebuttons'>";
                    foreach($grades->grade_array as $k => $v){
                        echo "<label for='" . $this->elementName . "$k'>$k</label>";
                        echo "<input type='radio' id='" . $this->elementName . "$k' value='$v' data='$v' name='" . $this->elementName ."' class='gradeButton' />";
                    }
                echo "</radioset>";
            echo '</p>';
		echo '</div><!-- item -->';
	}

}