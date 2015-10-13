

AdobeEdge.bootstrapCallback(function(compId){
	
		$('body').css('height', '35000px');
		//.append('<p>debug</p>');
		$(window).on('scroll', function() {
				checkScroll();

		}).resize(function(){
				checkScroll();
		});	

		function checkScroll() {

			var myComposition = AdobeEdge.getComposition('FactoringModule');
			var scrollPos = $(window).scrollTop();
			var docHeight = $(document).height();
			var winHeight = $(window).height();
			var duration = myComposition.getStage().getDuration();

			var scrollPercent = scrollPos / (winHeight - docHeight);
			var animPosition = Math.floor(duration * (scrollPercent * -1));

			myComposition.getStage().stop(animPosition)

			//$('p').html('scrollPos = '+scrollPos + '<br/> animation duration = ' + duration + '<br/>scrollPercent = '+scrollPercent+'<br/>animPosition = '+animPosition);
		}


});



