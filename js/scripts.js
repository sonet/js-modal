(function ($) {
	"use strict";
	var	modal = $('#modal'),
		dialog = $('#modal-dialog');

	// handle the show button
	$('#modal-show').on('click', function(){
		$('#modal').addClass('visible');
		//$(win).css('margin-left', $(win).width()/2);
		//console.log($(win).css('margin-left'));
	});

	// handle the close button
	$('#modal-close').on('click', function(){
		$('#modal').removeClass('visible');
	});

	// esc-key to close the modal dialog
	$(document).keyup(function(e) {
		if (e.keyCode == 27) $('#modal').removeClass('visible');   // esc
	});

	// scroll the modal dialog
	$('body').bind('mousewheel', function(e) { // on scroll
		var $div = $('#modal-body');
		// set div scroll top offset to current + extra from this scroll
		$div.scrollTop($div.scrollTop()
		- e.originalEvent.wheelDelta);
		return false; // prevent body scrolling
	});

	// close the modal dialog when the user clicks outside of it
	$(document).mouseup(function(e) {
		if (!dialog.is(e.target) // if the target of the click isn't the container...
			&& dialog.has(e.target).length === 0 // ... nor a descendant of the container
			&& e.target.tagName.toUpperCase() !== 'A') // ... ignore anchor clicks
		{
			$('#modal').removeClass('visible');
		}
	});

}(jQuery));

//function centerModal() {
//$(this).css('display', 'block');
//var $dialog  = $(this).find(".modal-dialog"),
//offset       = ($(window).height() - $dialog.height()) / 2,
//bottomMargin = parseInt($dialog.css('marginBottom'), 10);
//
//// Make sure you don't hide the top part of the modal w/ a negative margin if it's longer than the screen height, and keep the margin equal to the bottom margin of the modal
//if(offset < bottomMargin) offset = bottomMargin;
//$dialog.css("margin-top", offset);
//}
//$(document).on('show.bs.modal', '.modal', centerModal);
//$(window).on("resize", function () {
//	$('.modal:visible').each(centerModal);
//});
