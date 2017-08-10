$(document).ready(function(){       
   	$('#myCarousel').carousel({
	  interval: 4000
	});

	$('.carousel .item').each(function(){
	  var next = $(this).next();
	  if (!next.length) {
	    next = $(this).siblings(':first');
	  }
	  next.children(':first-child').clone().appendTo($(this));

	  for (var i=0;i<2;i++) {
	    next=next.next();
	    if (!next.length) {
	      next = $(this).siblings(':first');
	    }

	    next.children(':first-child').clone().appendTo($(this));
	  }
	});




	//Match heights

	 // apply matchHeight to each item container's items
    $('.items-container').each(function() {
        $(this).children('.item').matchHeight({
            byRow: byRow
        });
    });

	 // test target
    $('.target-items').each(function() {
        $(this).children('.item-0, .item-2, .item-3').matchHeight({
            target: $(this).find('.item-1')
        });
    });

	$(function() {
    	$('.item').matchHeight({
    		byRow: true,
		    property: 'height',
		    target: null,
		    remove: false
    	});
	});

});