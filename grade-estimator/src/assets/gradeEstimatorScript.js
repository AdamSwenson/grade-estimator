$(document).ready(function(){
	const COURSE = 'ppa';
    $('.gradebuttons').buttonset();
	
//Grade menu version
//	$('.menu').menu({
//		select: function(event, ui){
//		//set numeric value
//        $value = ui.item.val();
//        $name = $(ui.item).attr('data');
//        elementValue($value, $name);
//			//$v = ui.item.val();
//			//$name = $(ui.item).attr('data');
//			//$pct = $('#' + $name + 'Score').attr('data');
//			//$('#' + $name + 'Score').val($v * $pct);
//		//display lettergrade in box
//			$n = $(ui.item).attr('data');
//			$('#' + $n).val($(ui.item).attr('name'));
//			$('#gradeNumeric').val('');
//			clc = new Calculator();
//			clc.calcTotal();
//		},
//		role: 'listbox',
//		icons: "ui-icon-circle-triangle-e"
//	});
/*  Function which runs when any of the grade buttons are clicked  */
$('.gradeButton').bind('click', function(){
    var elname = $(this).attr('name');
    var elval = $(this).attr('data');
    //Set the raw hidden field with the selected grade's value'
    $('#' + elname + 'Raw').val(elval)
    //Compute the amount this contributes to the final grade
    elementValue(elname);
    //Clear the display field for the numeric course grade
    $('#gradeNumeric').val('');
    //Recalculate the course grade
    clc = new Calculator();
    clc.calcTotal();
});

/* 
 * This calculates the amount that an element contributes to the course grade 
 * It includes a comparator for the exams in 349 which is unnecessary in courses that have fixed exam values 
 */
function elementValue($name){
	if(($name == 'exam1') || ($name =='exam2')){
		if(COURSE == 'ppa'){
			var ex1 = $('#exam1Raw').val();
			var ex2 = $('#exam2Raw').val();
			if(ex1 >= ex2){
				var exam1val = ex1 * .35;
				var exam2val = ex2 * .30;;
			}
			else if(ex2 > ex1){
				var exam1val = ex1 * .30;
				var exam2val = ex2 * .35;
			}
            $('#exam1Score').val(exam1val);
            $('#exam2Score').val(exam2val);
	}//if ppa
	}else{
        var $value = $("#" + $name + "Raw").val();
		$pct = $('#' + $name + 'Score').attr('data');
		$('#' + $name + 'Score').val($value * $pct);
	}  
}
	
/*
 *  This object calculates the overall course numeric score and letter grade
 */
function Calculator(){
	this.totScore;
	me = this;
}
Calculator.prototype.calcTotal = function(){
		this.totScore = 0;
		//add together all gradecomponents
		$('.gradeComponent').each(function(i, obj){
			me.v = $(obj).val();
			me.totScore += Number(me.v);
			me.numScore = Number(me.totScore);
			$('#gradeNumeric').val(me.numScore.toFixed(2));
			me.getLetter();
		});
}
Calculator.prototype.getLetter = function(){
	this.A = new Grade(95, 93.49, 'A');
	this.Amin = new Grade(93.5, 90.1, 'A-');
	this.Bplus = new Grade(90, 87.5, 'B+');
	this.B = new Grade(87.49, 83.5, 'B');
	this.Bmin = new Grade(83.49, 80.1, 'B-');
	this.Cplus = new Grade(80.0, 77.5, 'C+');
	this.C = new Grade(77.49, 73.5, 'C');
	this.Cmin = new Grade(73.49, 70.1, 'C-');
	this.Dplus = new Grade(70, 67.5, 'D+');
	this.D = new Grade(67.49, 63.5, 'D');
	this.Dmin = new Grade(63.49, 60.1, 'D-');
	this.F = new Grade(60, 0, 'F');

	this.grades = Array(this.A, this.Amin, this.Bplus, this.B, this.Bmin, this.Cplus, this.C, this.Cmin, this.Dplus, this.D, this.Dmin, this.F);
	$.each(this.grades, function(i){
		jj = this.isMe(me.numScore);
		if(jj === true){
			return false; //break loop
		}
	});
}
/*
 * This object defines the letter grades and associated scores
 */
function Grade(max, min, display){
	this.max = max;
	this.min = min;
	this.display = display;
}
Grade.prototype.isMe = function(score){ //compares whether score between min and max, if so, displays and returns true
	if((score <= this.max) && (score >= this.min)){
		$('#gradeLetter').val(this.display);
		return true;
	}
}
	
//fin		
});