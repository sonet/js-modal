(function ($) {
	"use strict";
	var	modal = $('#modal'),
		dialog = $('#modal-dialog'),
		title = $('#modal-title'),
		body = $('#modal-body');

	console.log(scrollbarWidth());

	// handle the show button
	$('#modal-show').on('click', function(){
		$('#modal').addClass('visible');
		$('#facility-photo').show();
		$('#facility-departments').show();
		$('#modal-title').text('Photo + Address + Department List' + $('#modal-title').width());

		if ( $(window).height() > 768 || $(window).width() > 768) {
			$(body).css({
				'width': '100%',
				'height': '100%'
			});
		} else {
			var h_viewport = $(window).height();
			var h_title = $('#modal-title').height();
			$(body).css({
				//'width': '640px',
				'height': (100 - h_title*100/h_viewport) + '%'
			});
		}
	});

	$('#modal-show2').on('click', function(){
		$('#modal').addClass('visible');
		$('#facility-photo').hide();
		$('#facility-departments').show();
		$('#modal-title').text('Address + Department List');

		if ( $(window).height() > 768 || $(window).width() > 768) {
			$(body).css({
				'width': '100%',
				'height': '100%'
			});
		} else {
			var h_viewport = $(window).height();
			var h_title = $('#modal-title').height();
			$(body).css({
				//'width': '640px',
				'height': (100 - h_title*100/h_viewport) + '%'
			});
		}
	});

	$('#modal-show3').on('click', function(){
		$('#modal').addClass('visible');
		$('#facility-photo').hide();
		$('#facility-departments').hide();
		$('#modal-title').text('Address Only');

		if ( $(window).height() > 768 || $(window).width() > 768) {
			$(body).css({
				'width': '100%',
				'height': '100%'
			});
		} else {
			var h_viewport = $(window).height();
			var h_title = $('#modal-title').height();
			$(body).css({
				//'width': '320px',
				'height': (100 - h_title*100/h_viewport) + '%'
			});
		}
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

	/**
	 * determine the scrollbar width
	 * @returns {number}
	 */
	function scrollbarWidth() {
		var testDiv = document.createElement("div");
		testDiv.className = "scrollbar-measure";
		document.body.appendChild(testDiv);
		var w = testDiv.offsetWidth - testDiv.clientWidth;
		document.body.removeChild(testDiv);
		return(w);
	}

}(jQuery));

// useful links:
// http://www.matanich.com/2013/01/07/viewport-size/
// http://jdsharp.us/jQuery/minute/calculate-scrollbar-width.php
// http://davidwalsh.name/detect-scrollbar-width

// useful code snippets:
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
