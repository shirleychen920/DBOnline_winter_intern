$(document).ready(function() {
$('.menu-button').click(function() {
	$('.menu').animate({left: '0px'});
	// 
	 $('#cover-image').animate({left: '250px' });
	
	 $('#title').animate({
            left: '250px' });

	  $('#intro').animate({
            left: '250px' });

	   $('#pic1').animate({
            left: '250px' });
	    $('#pic2').animate({
            left: '250px' });

});

$('.menu').click(function(){      
	$('.menu').animate({left: '-250px'});
	// 
	 $('#cover-image').animate({left: '0px' });
	
	 $('#title').animate({
            left: '0px' });


	  $('#intro').animate({
            left: '0px' });

	   $('#pic1').animate({
            left: '0px' });
	    $('#pic2').animate({
            left: '0px' });

});

$('#close-tab').click(function(){


           
	$('.menu').animate({left: '-250px'});
	// 
	 $('#cover-image').animate({left: '0px' });
	
	 $('#title').animate({
            left: '0px' });


	  $('#intro').animate({
            left: '0px' });

	   $('#pic1').animate({
            left: '0px' });
	    $('#pic2').animate({
            left: '0px' });

});


});
