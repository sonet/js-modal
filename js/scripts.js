(function ($) {
	"use strict";
	var	_modal = $('#modal'),
		_dialog = $('#modal-dialog'),
		_title = $('#modal-title'),
		_body = $('#modal-body');

	function showModal(title,content) {
		$('#modal').addClass('visible');
		_title.text(title);
		resizeModal();
	}

	function closeModal() {
		$('#modal').removeClass('visible');
	}

	function resizeModal() {
		if ( $(window).height() > 768 || $(window).width() > 768) {
			$(_body).css({
				'width': '100%',
				'height': '100%'
			});
		} else {
			var h_viewport = $(window).height();
			var h_title = $('#modal-title').height();
			$(body).css({
				'height': (100 - h_title*100/h_viewport) + '%'
			});
		}
	}



	// close button
	$('#modal-close').on('click', function() {
		closeModal();
	});

	// esc-key
	$(document).keyup(function(e) {
		if (e.keyCode == 27) closeModal();   // esc
	});

	// modal content scroll
	$('body').bind('mousewheel', function(e) { // on scroll
		var $div = $(_body);
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
			closeModal();
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






	// handle the show buttons

	$('#modal-show').on('click', function(){
		$('#facility-photo').show();
		$('#facility-departments').show();
		showModal('Photo + Address + Department List' + $(title).width(), '');
		resizeModal();
	});

	$('#modal-show2').on('click', function(){
		$('#facility-photo').hide();
		$('#facility-departments').show();

		$('#modal').addClass('visible');
		title.text('Address + Department List');


		resizeModal();
	});

	$('#modal-show3').on('click', function(){
		showModal('Address Only', '');
		$('#facility-photo').hide();
		$('#facility-departments').hide();
		resizeModal();
	});





}(jQuery));

// useful links:
// http://www.matanich.com/2013/01/07/viewport-size/
// http://jdsharp.us/jQuery/minute/calculate-scrollbar-width.php
// http://davidwalsh.name/detect-scrollbar-width


