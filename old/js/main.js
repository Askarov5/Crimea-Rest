$(document).ready(function() {
	
	/*Gallery*/
	$('.body__right').hover(
		function(){
			$('.body__overlay').css('background','rgba(0,0,0,0.6)');},
		function(){
			$('.body__overlay').css('background','rgba(0,0,0,0.1)');}
	);
	$('.villa').hover(
		function(){
			$('.body__overlay').css('background','rgba(0,0,0,0.6)');},
		function(){
			$('.body__overlay').css('background','rgba(0,0,0,0.1)');}
	);
	$('.bslider_sec').hover(
		function(){
			$('.body__overlay').css('background','rgba(0,0,0,0.6)');},
		function(){
			$('.body__overlay').css('background','rgba(0,0,0,0.1)');}
	);

	$('.gallery__item').click(function(){
		var bg = $(this).css('background-image');
        /*bg = bg.replace('url(','').replace(')','').replace(/\"/gi, "");*/
        $('.body').css('background-image',bg);
	});

	/*Buttons*/
	$('.privileges-btn').click(function(){
		$('.privileges').toggleClass('active');
		if($('.villa-fullinfo').hasClass('active') || $('.villa-list').hasClass('active')) {
			$('.body__inner').css('transform','translateX(0)');
			$('.villa__h-btn').css('opacity','1');
			$('.villa-fullinfo').removeClass('active');
			$('.villa-list').removeClass('active');
		}
	});
	$('.privileges-close').click(function(){
		$('.privileges').removeClass('active');
	});

	$('.villa__h-btn').click(function(e){
		e.preventDefault();
		$('.body__inner').css('transform','translateX(-50%)');
		$(this).css('opacity','0');
		$('.villa-list').addClass('active');
		$('.villa-fullinfo').removeClass('active');
		$('.privileges').removeClass('active');
	});
	$('.villa-list__h-btn').click(function(e){
		e.preventDefault();
		$('.body__inner').css('transform','translateX(0)');
		$('.villa__h-btn').css('opacity','1');
		$('.villa-list').removeClass('active');
		$('.villa-fullinfo').removeClass('active');
	});

	$('.villa-btn_info').click(function(e){
		e.preventDefault();
		$('.body__inner').css('transform','translateX(-50%)');
		$('.villa-fullinfo').addClass('active');
		$('.villa-list').removeClass('active');
		$('.villa__h-btn').css('opacity','0');
		$('.privileges').removeClass('active');
	});
	$('.villa-fullinfo__h-btn').click(function(e){
		e.preventDefault();
		$('.body__inner').css('transform','translateX(0)');
		$('.villa__h-btn').css('opacity','1');
		$('.villa-fullinfo').removeClass('active');
		$('.villa-list').removeClass('active');
	});

	$('.villa-btn_photo').click(function(e){
		e.preventDefault();
		$('.body__inner').css('transform','translateX(0)');
		$('.body__inner').addClass('fw-gallery');
		$('.privileges').removeClass('active');
		$('.villa__h-btn').css('opacity','0');
		$('.villa__fg-btn').css('opacity','1');
		$('.villa').addClass('fg');
		$('.bslider_sec').addClass('active');
		$('.body__overlay').css('background','rgba(0,0,0,0.6)');
		/*Slider*/
		$('.bslider').slick({
		  prevArrow:'<div class="bslider__prev"></div>',
		  nextArrow:'<div class="bslider__next"></div>',
		  dots: false,
		  centerMode: true,
		  centerPadding: '200px',
		  slidesToShow: 1,
		  slidesToScroll: 1,
		  
		});
		$('.bslider')
			.on('init', function(event, slick){
	            // let's do this after we init the banner slider
	            $('.slick-current').prev().addClass('bslider__item-left');
		        $('.slick-current').next().addClass('bslider__item-right');
	        })
	        .on('beforeChange', function(event, slick, currentSlide, nextSlide){
	            // then let's do this before changing slides
	            $('.bslider__item').removeClass('bslider__item-left bslider__item-right');
	        })
	        .on('afterChange', function(event, slick, currentSlide, nextSlide){
	            // finally let's do this after changing slides
	            $('.slick-current').prev().addClass('bslider__item-left');
		        $('.slick-current').next().addClass('bslider__item-right');
	        });
	});
	$('.bslider').on('change', function(event, slick, currentSlide, nextSlide){
		console.log('changes');
		$('.bslider > div').removeClass('bslider__item-left');
		$('.bslider > div').removeClass('bslider__item-right');
		if($(this).hasClass('slick-current')) {
			$(this).prev().addClass('bslider__item-left');
			$(this).next().addClass('bslider__item-right');
		}
	});
	
	$('.villa__fg-btn').click(function(e){
		e.preventDefault();
		$('.body__overlay').css('background','rgba(0,0,0,0.1)');
		$('.body__inner').css('transform','translateX(0)');
		$('.villa__h-btn').css('opacity','1');
		$(this).css('opacity','0');

		$('.bslider_sec').removeClass('active');
		$('.body__inner').removeClass('fw-gallery');
		$('.villa').removeClass('fg');
	});


	(function () {
		var bscrollItemNumber = $('.bscroll__item').length;
		for (var i = 1; i >= bscrollItemNumber; i++) {
			$('.bscroll__item').attr('data-slide',i);
		};
	})();

	$('.bscroll__item').click(function(e) {
	   e.preventDefault();
	   var slideno = $(this).data('slide');
	   $('.bslider').slick('slickGoTo', slideno - 1);
	});

	$('.bslider__item').on('mouseover',function () {
		var bSlItemNumber = $('.bslider__item').length;
		var bSlImg = $('.bslider__item-img').css('background-image');
		bSlImg = bSlImg.replace('url(','').replace(')','').replace(/\"/gi, "");
		$('.bslider__item-img').zoom({
		    url: bSlImg, 
		    callback: function(){
		      	$(this).colorbox({href: this.src});
		    }
		});	
	});
	
});
$(window).on("load",function(){
	$(".villa-fullinfo__inner").mCustomScrollbar({});
	$(".villa-list__inner").mCustomScrollbar({});
	$(".bscroll").mCustomScrollbar({
		axis:"x", // vertical and horizontal scrollbar
		alwaysShowScrollbar: 2,
		mouseWheel:{ axis: "x" },
	});
});