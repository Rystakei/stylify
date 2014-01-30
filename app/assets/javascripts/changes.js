
$(document).ready(function() {

	//Set labels, inputs, and select drop-down boxes to have the class "immutable".
	$('label').addClass("immutable");
	$('input').addClass("immutable");
	$('select').addClass("immutable");

	//Set text-area to contents of the ipsum paragraphs
	$('#edited-paragraphs').val($('.example-text').text());

	//The following functions are called when a user manipulates one of the items in the styling //controls box. The items within the styling control box are marked with the class 'immutable' 
	//so that they are not changed along with the rest of the items on the page. 

	//When a user selects a different color option from the background-color select menu, 
	//the background color of any element not marked as immutable is changed. 
	$( "#bg" ).change(function() {
		$('body').not('.immutable').css('background-color', $('#bg').val());
	});

	//When a user selects a new font, the font face used throughout the page is changed. 
	$( "#font-family" ).change(function() {
		$('body').find('*').not('.immutable').css('font-family', $(this).val());
	});

	//when the user types in a font size between 10px and 35px, the font size of the paragraphs //underneath the styling controls is modified. 
	$('#font-size').keyup(function() {
		var size = $(this).val();
		if (size >= 10 && size <= 35){
			$('body').find('*').not('.immutable').css('font-size', size + 'px');
		}
	});

	//When the user types in the "Title" input field, the page's title is changed to their input. 
	$('#title-name').keyup(function(){
		$('title').text($(this).val());
	});

	//When user types in the text area containing the paragraphs, all changes will be reflected
	//In the text below.

	$('#edited-paragraphs').keyup(function(){
		$('.example-text').text($(this).val());
	});

})