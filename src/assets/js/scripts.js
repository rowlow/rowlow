$(function(){

	var $chapters = $($('hr[id]').get().reverse());
	var $chapterNav = $('.chapter-nav');

	var init = function(){
		initView();
		initListener();

		console.info($chapters);
	};
	
	var initView = function(){
		$chapterNav.data('top', $chapterNav.offset().top);
	};

	var initListener = function(){
		$(window).on('scroll', onWindowScroll);
	};


	var onWindowScroll = function( event ){
		
		if($(window).scrollTop() >= $chapterNav.data('top')){
			$('.chapter-nav').addClass('fixed');
		}else{
			$('.chapter-nav').removeClass('fixed');
		}

		$chapters.each(function(){
			if($(this).offset().top <= $(window).scrollTop() + $(window).height()){
				$('a', $chapterNav).removeClass('active');
				$('a[href="#'+$(this).attr('id')+'"]', $chapterNav).addClass('active');
				return false;
			}
		});
	}


	init();


});