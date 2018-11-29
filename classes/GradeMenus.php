<?php
/**
 * This is an alternative implementation of the grade calculator display which uses jquery menus
 *
 * @author adam
 */
class GradeMenus extends GradeElement {
    public function __construct(array $maker, \Grades $grades) {
        parent::__construct($maker, $grades);
    }
    protected function makeMenu(\Grades $grades) {
        echo "<div class='item'>";
		echo "<h3>$this->elementName</h3>";
		echo '<p>';
		echo "<input type='text' readonly='readonly' id='$this->elementName' name='' data='$this->pctOfGrade'/>";
        echo "<input type='hidden' id='" . $this->elementName . "Score' data='$this->pctOfGrade' class='gradeComponent' />";
//		echo "<input type='hidden' name='" . $this->name . "Score' data='$this->pctOfGrade' class='gradeComponent' />";
		echo "<ul class='menu'><li>Select grade: <ul>";
		foreach($grades->grade_array as $k => $v){
			echo 	"<li value='$v' data='$this->elementName' name='$k'><a href='#'>$k</a></li>";
		}
		echo "</ul></li></ul>";
		echo '</p>';
		echo '</div>';
	}

}