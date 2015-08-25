(function ($) {
	"use strict";

	$('#modal-show').on('click', function(){
		$('#modal').addClass('visible');
	});

	$('#modal-close, #modal').on('click', function(){
		$('#modal').removeClass('visible');
	});

	$(document).keyup(function(e) {
	  if (e.keyCode == 27) $('#modal').removeClass('visible');   // esc
	});

	$('body').bind('mousewheel', function(e) { // on scroll
	    var $div = $('#modal-body');
	    // set div scroll top offset to current + extra from this scroll
	    $div.scrollTop($div.scrollTop()
	                    - e.originalEvent.wheelDelta);
	    return false; // prevent body scrolling
	});

	function centerModal() {
		//$(this).css('display', 'block');
		//var $dialog  = $(this).find(".modal-dialog"),
		//offset       = ($(window).height() - $dialog.height()) / 2,
		//bottomMargin = parseInt($dialog.css('marginBottom'), 10);
		//
		//// Make sure you don't hide the top part of the modal w/ a negative margin if it's longer than the screen height, and keep the margin equal to the bottom margin of the modal
		//if(offset < bottomMargin) offset = bottomMargin;
		//$dialog.css("margin-top", offset);
	}

	$(document).on('show.bs.modal', '.modal', centerModal);

	$(window).on("resize", function () {
		$('.modal:visible').each(centerModal);
	});

}(jQuery));
