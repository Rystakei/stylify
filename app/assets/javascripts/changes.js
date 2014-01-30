
$(document).ready(function() {

$('.options-group').addClass("immutable");
$('label').addClass("immutable");
$('input').addClass("immutable");
$('select').addClass("immutable");
$('.styling-options').css('background-color', 'pink');

$( "#bg" ).change(function() {
	$('body').not('.immutable').css('background-color', $('#bg').val());
});

$( "#font-family" ).change(function() {
	$('body').find('*').not('.immutable').css('font-family', $('#font-family').val());

});

$('#font-size').keyup(function() {

	var size = $('#font-size').val();
	$('body').find('*').not('.immutable').css('font-size', size + 'px');
});


})