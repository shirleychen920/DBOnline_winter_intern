$(document).ready(function() {
$('.menu-icon').click(function() {
	$('.menu').animate({left: '0px'});
	// 
	 $('#cover-image').animate({left: '250px' });
	
	 $('#title').animate({
            left: '250px' });

});

$('#close-tab').click(function(){


           
	$('.menu').animate({left: '-250px'});
	// 
	 $('#cover-image').animate({left: '0px' });
	
	 $('#title').animate({
            left: '0px' });



});


});
