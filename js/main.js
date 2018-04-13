$(document).ready(function() {
	var winWidth = $(window).width();
	
	/*Background Effects*/
	$('.body__right, .villa, .bslider_sec').hover(
		function(){	$('.body__overlay').css('background','rgba(0,0,0,0.6)');},
		function(){	$('.body__overlay').css('background','rgba(0,0,0,0.1)');}
	);

	$('.gallery__item').click(function(){
		var bg = $(this).css('background-image');
        /*bg = bg.replace('url(','').replace(')','').replace(/\"/gi, "");*/
        $('.body').css('background-image',bg);
	});

	/*Nav BTN*/
	$('.nav-toggle').click(function(){
		$(this).toggleClass('active');
		$('.nav_header').toggleClass('active');
	})
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
		if(winWidth>=991) {
			$('.body__inner').css('transform','translateX(-50%)');
		}
		else {
			$('.body__inner').css('transform','translateX(-100%)');
		}
		
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
		if(winWidth>=991) {
			$('.body__inner').css('transform','translateX(-50%)');
		}
		else {
			$('.body__inner').css('transform','translateX(-100%)');
		}
		
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
		  responsive: [
			{
		  		breakpoint: 1200,
			  	settings: {
			  		centerPadding: '150px',
			  	}
			 },

		  	{
		  		breakpoint: 991,
			  	settings: {
			  		centerPadding: '120px',
			  	}
			  },
			{
		  		breakpoint: 769,
			  	settings: {
			  		centerMode: false,
			  		centerPadding: '0px',
			  	}
			  }
		  ]
		  
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

		        var addBcsActive = $('.slick-current').data('slick-index');
		        $('.bscroll__item').removeClass('active');
		    	$('.bscroll').find('div[data-slide="'+ addBcsActive +'"]').addClass('active');
		    });
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


	/*(function () {
		var bscrollItemNumber = $('.bscroll__item').length;
		for (var i = 1; i >= bscrollItemNumber; i++) {
			$('.bscroll__item').attr('data-slide',i);
		};
	})();*/

	$.each($('.bscroll__item'),function(index,bscItem){
		$(bscItem).attr('data-slide',index);
	});

	$('.bscroll__item').click(function(e) {
	   e.preventDefault();
	   $('.bscroll__item').removeClass('active');
	   $(this).addClass('active');
	   var slideno = $(this).data('slide');
	   $('.bslider').slick('slickGoTo', slideno);
	});

		$(".bslider__item-img").mlens({
		imgSrc: $(this).attr("data-big"),	  // path of the hi-res version of the image
		imgSrc2x: $(this).attr("data-big2x"),  // path of the hi-res @2x version of the image
                                                  //for retina displays (optional)
		lensShape: "square",                // shape of the lens (circle/square)
		lensSize: ["25%","20%"],            // lens dimensions (in px or in % with respect to image dimensions)
		                                    // can be different for X and Y dimension
		borderSize: 2,                  // size of the lens border (in px)
		borderColor: "#fff",            // color of the lens border (#hex)
		borderRadius: 0,                // border radius (optional, only if the shape is square)
		imgOverlay: $(this).attr("data-overlay"), // path of the overlay image (optional)
		overlayAdapt: true,    // true if the overlay image has to adapt to the lens size (boolean)
		zoomLevel: 1.5,          // zoom level multiplicator (number)
		responsive: true       // true if mlens has to be responsive (boolean)
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