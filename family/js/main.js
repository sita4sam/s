
$(function() {
	
    // Form validator
	$('#contactFormBtn').formValidator({
		scope		: '#contactForm',
		errorDiv	: '#errorDiv1'
	});
	 
});

$(function() {

    function scroll(direction) {

        var scroll, i,
                positions = [],
                here = $(window).scrollTop(),
                collection = $('.post');

        collection.each(function() {
            positions.push(parseInt($(this).offset()['top'],10));
        });

        for(i = 0; i < positions.length; i++) {
            if (direction == 'next' && positions[i] > here) { scroll = collection.get(i); break; }
            if (direction == 'prev' && i > 0 && positions[i] >= here) { scroll = collection.get(i-1); break; }
        }

        if (scroll) {
            $.scrollTo(scroll, {
                duration: 750       
            });
        }

        return false;
    }

    $(".scrollBtn").click(function() {
        $.scrollTo($($(this).attr("href")), {
            duration: 750
        });
        return false;
    });

});

jQuery(document).ready(function(){
	jQuery('#parallax').jparallax({});
});

$(function() {
	
    $(".slider-images").jCarouselLite({
        btnNext: ".next",
        btnPrev: ".prev",
		visible: 1,
		easing: "easeout",
		auto: 9900,
		speed: 700
    });
		
	$(".slidertext").jCarouselLite({
        btnNext: ".next",
        btnPrev: ".prev",
		vertical: true,
		visible: 1,
		easing: "easeout",
	 	auto: 9900,
		speed: 700
    });
	 
});

$(document).ready(function(){
	/* Adding a colortip to any tag with a title attribute: */
	$('[rev]').colorTip({color:'yellow'});
});