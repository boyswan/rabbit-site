  $(window).on('resize', function(){

		if ($(window).width() <= 700){	
			$('#secondary__content').prependTo('#secondary__row');
		}

		if ($(window).width() > 700){	
			$('#secondary__content').appendTo('#secondary__row');
		}
  }).trigger('resize');

