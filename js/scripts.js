(function ($) {
	"use strict";
	var	_modal = $('#modal'),
		_dialog = $('#modal-dialog'),
		_title = $('#modal-title'),
		_body = $('#modal-body');

	function showModal(title,content) {
		$('#modal').addClass('visible');
		_title.text(title);
		if (content) {
			_body.html(content);
		}
		resizeModal();
	}

	function closeModal() {
		$(_modal).removeClass('visible');
	}

	function resizeModal() {
		var h_viewport = $(window).height();
		var h_title = $(_title).height();
		$(_body).css({
			'height': (100 - h_title*100/h_viewport) + '%'
		});
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
		if (!_dialog.is(e.target) // if the target of the click isn't the container...
			&& _dialog.has(e.target).length === 0 // ... nor a descendant of the container
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
		showModal('Photo + Address + Department List');
	});

	$('#modal-show2').on('click', function(){
		$('#facility-photo').hide();
		$('#facility-departments').show();
		showModal('Address + Department List', '' + '<div class="facility-detail-content"> <div class="typography">' +
		'			<p class="facility-address">' +
		'				70 Arts Circle<br>' +
		'				Evanston, IL 60208' +
		'			</p>' +

		'	<h4>History</h4>' +
		'			<p>The Music and Communication Building is the new home of the Bienen School of Music and the theater and performance studies departments in the School of Communication. The building, opened in 2015, includes classrooms, teaching labs, academic faculty offices, teaching studios, practice rooms, student lounges and administrative offices. Also included is Mary B. Galvin Recital Hall, Shirley Welsh Ryan Opera Theater, and David and Carol McClintock Choral and Recital Room.</p>' +
		'			<div class="facility-departments">' +
		'				<h4>Departments in this building</h4>' +
		'				<ul class="facility-departments-list">' +
		'					<li><a href="http://offices.northwestern.edu/detail/138" target="_blank">Choral Organizations</a></li>' +
		'					<li><a href="http://offices.northwestern.edu/detail/143" target="_blank">Conducting and Ensembles Program, Bienen School</a></li>' +
		'					<li><a href="http://offices.northwestern.edu/detail/279" target="_blank">Jazz Studies Program, Bienen School</a></li>' +
		'					<li><a href="http://offices.northwestern.edu/detail/319" target="_blank">Music Academy, Bienen School</a></li>' +
		'					<li><a href="http://offices.northwestern.edu/detail/318" target="_blank">Music, Henry and Leigh Bienen School of</a></li>' +
		'					<li><a href="http://offices.northwestern.edu/detail/411" target="_blank">Piano Program, Bienen School of Music</a></li>' +
		'					<li><a href="http://offices.northwestern.edu/detail/552" target="_blank">Voice and Opera Program, Bienen School</a></li>' +
		'				</ul>' +
		'			</div>' +
		'				<p>For a list of all University departments see the <a href="http://offices.northwestern.edu/" target="_blank">Office Directory</a></p>' +
		'		</div>' +
		'	</div>');
	});

	$('#modal-show3').on('click', function(){
		$('#facility-photo').hide();
		$('#facility-departments').hide();
		showModal(
			'Address Only',
			'<p class="facility-address">' +
			'70 Arts Circle<br>' +
			'Evanston, IL 60208' +
			'</p>');
	});

}(jQuery));

// useful links:
// http://www.matanich.com/2013/01/07/viewport-size/
// http://jdsharp.us/jQuery/minute/calculate-scrollbar-width.php
// http://davidwalsh.name/detect-scrollbar-width


