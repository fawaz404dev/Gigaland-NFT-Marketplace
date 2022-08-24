// © Copyright 2015 - Archi by Designesia 

jQuery(document).ready(function() {		
	'use strict';				// use strict mode
	
	jQuery(".expand .content").hide();
	
	// expand box
    jQuery(".expand .title").on( "click", function() {
        var iteration = $(this).data('iteration') || 1;
        switch (iteration) {
            case 1:
                $(this).parent().find('.content').slideToggle();
                break;

            case 2:
                 $(this).parent().find('.content').slideToggle();
                break;
        }
        iteration++;
        if (iteration > 2) iteration = 1;
        $(this).data('iteration', iteration);
    });
	
	
});

