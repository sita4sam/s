var WHAT = navigator.userAgent;
if (WHAT.match(/(iPhone|iPod|Android)/)){

(function($) {
	skel.breakpoints({
		xlarge: '(max-width: 1680px)',
		large: '(max-width: 1280px)',
		medium: '(max-width: 980px)',
		small: '(max-width: 736px)',
		xsmall: '(max-width: 480px)'
	});
	$(function() {
		var	$window = $(window),
			$body = $('body');
			$('.page_img , .graphic_img , .rwd_img , .pic_img , .mockup_img , .video_img , .together_img')
				.each(function() {
					var $this = $(this),
						on, off;
					on = function() {
						if (skel.canUse('transition')) {
							$this.scrollex({
								top:		50,
								bottom:		0,
								initialize:	function(t) { $this.addClass('inactive'); },
								terminate:	function(t) { $this.removeClass('inactive'); },
								enter:		function(t) { $this.removeClass('inactive'); },
							});
						}
					};
					skel.on('change', function() {
						if (skel.breakpoint('medium').active)
							(off)();
						else
							(on)();
					});
				});
	});
	$(function() {
		var	$window = $(window),
			$body = $('body');
			$('.line_box')
				.each(function() {
					var $this = $(this),
						on, off;
					on = function() {
						if (skel.canUse('transition')) {
							$this.scrollex({
								top:		100,
								bottom:		0,
								initialize:	function(t) { $this.children('.line_content').addClass('line_hide'); },
								terminate:	function(t) { $this.children('.line_content').removeClass('line_hide'); },
								enter:		function(t) { $this.children('.line_content').removeClass('line_hide'); },
							});
						}
					};
					skel.on('change', function() {
						if (skel.breakpoint('medium').active)
							(off)();
						else
							(on)();
					});
				});
	});
	$(function() {
		var	$window = $(window),
			$body = $('body');
			$('.lion , .bear , .wolf , .husky , .fox , .rabbit')
				.each(function() {
					var $this = $(this),
						on, off;
					on = function() {
						if (skel.canUse('transition')) {
							$this.scrollex({
								top:		130,
								bottom:		0,
								initialize:	function(t) { $this.children('.text_box').addClass('hide'); },
								terminate:	function(t) { $this.children('.text_box').removeClass('hide'); },
								enter:		function(t) { $this.children('.text_box').removeClass('hide'); },
							});
						}
					};
					skel.on('change', function() {
						if (skel.breakpoint('medium').active)
							(off)();
						else
							(on)();
					});
				});
	});
	$(function() {
		var	$window = $(window),
			$body = $('body');
			$('.code_content,.app_content,.workflow_item_box').children('.item')
				.each(function() {
					var $this = $(this),
						on, off;
					on = function() {
						if (skel.canUse('transition')) {
							$this.scrollex({
								top:		100,
								bottom:		0,
								initialize:	function(t) { $this.addClass('hide'); },
								terminate:	function(t) { $this.removeClass('hide'); },
								enter:		function(t) { $this.removeClass('hide'); },
							});
						}
					};
					skel.on('change', function() {
						if (skel.breakpoint('medium').active)
							(off)();
						else
							(on)();
					});
				});
	});
})(jQuery);


}else{

(function($) {
	skel.breakpoints({
		xlarge: '(max-width: 1680px)',
		large: '(max-width: 1280px)',
		medium: '(max-width: 980px)',
		small: '(max-width: 736px)',
		xsmall: '(max-width: 480px)'
	});
	$(function() {
		var	$window = $(window),
			$body = $('body');
			$('.page_img , .graphic_img , .rwd_img , .pic_img , .mockup_img , .video_img , .together_img')
				.each(function() {
					var $this = $(this),
						on, off;
					on = function() {
						if (skel.canUse('transition')) {
							$this.scrollex({
								top:		150,
								bottom:		0,
								initialize:	function(t) { $this.addClass('inactive'); },
								terminate:	function(t) { $this.removeClass('inactive'); },
								enter:		function(t) { $this.removeClass('inactive'); },
							});
						}
					};
					skel.on('change', function() {
						if (skel.breakpoint('medium').active)
							(off)();
						else
							(on)();
					});
				});
	});
	$(function() {
		var	$window = $(window),
			$body = $('body');
			$('.line_box')
				.each(function() {
					var $this = $(this),
						on, off;
					on = function() {
						if (skel.canUse('transition')) {
							$this.scrollex({
								top:		250,
								bottom:		0,
								initialize:	function(t) { $this.children('.line_content').addClass('line_hide'); },
								terminate:	function(t) { $this.children('.line_content').removeClass('line_hide'); },
								enter:		function(t) { $this.children('.line_content').removeClass('line_hide'); },
							});
						}
					};
					skel.on('change', function() {
						if (skel.breakpoint('medium').active)
							(off)();
						else
							(on)();
					});
				});
	});
	$(function() {
		var	$window = $(window),
			$body = $('body');
			$('.lion , .bear , .wolf , .husky , .fox , .rabbit')
				.each(function() {
					var $this = $(this),
						on, off;
					on = function() {
						if (skel.canUse('transition')) {
							$this.scrollex({
								top:		200,
								bottom:		0,
								initialize:	function(t) { $this.children('.text_box').addClass('hide'); },
								terminate:	function(t) { $this.children('.text_box').removeClass('hide'); },
								enter:		function(t) { $this.children('.text_box').removeClass('hide'); },
							});
						}
					};
					skel.on('change', function() {
						if (skel.breakpoint('medium').active)
							(off)();
						else
							(on)();
					});
				});
	});
	$(function() {
		var	$window = $(window),
			$body = $('body');
			$('.code_content,.app_content,.workflow_item_box').children('.item')
				.each(function() {
					var $this = $(this),
						on, off;
					on = function() {
						if (skel.canUse('transition')) {
							$this.scrollex({
								top:		180,
								bottom:		0,
								initialize:	function(t) { $this.addClass('hide'); },
								terminate:	function(t) { $this.removeClass('hide'); },
								enter:		function(t) { $this.removeClass('hide'); },
							});
						}
					};
					skel.on('change', function() {
						if (skel.breakpoint('medium').active)
							(off)();
						else
							(on)();
					});
				});
	});
})(jQuery);

}

