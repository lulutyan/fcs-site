$(document).ready(function(){
	$( ".abit-menu" ).mouseover(function() {
  		$( ".abit-menu" ).addClass('open');
	});
	$( ".abit-menu" ).mouseout(function() {
  		$( ".abit-menu" ).removeClass('open');
	});
	

	$( ".timetable-menu" ).mouseover(function() {
  		$( ".timetable-menu" ).addClass('open');
	});
	$( ".timetable-menu" ).mouseout(function() {
  		$( ".timetable-menu" ).removeClass('open');
	});

	
	$( ".faculty-menu" ).mouseover(function() {
  		$( ".faculty-menu" ).addClass('open');
	});
	$( ".faculty-menu" ).mouseout(function() {
  		$( ".faculty-menu" ).removeClass('open');
	});

	
	$( ".students-menu" ).mouseover(function() {
  		$( ".students-menu" ).addClass('open');
	});
	$( ".students-menu" ).mouseout(function() {
  		$( ".students-menu" ).removeClass('open');
	});
});