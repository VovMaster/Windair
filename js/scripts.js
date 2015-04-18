$(document).ready(function(){

// SWIPER
///////////////////////////////////////

	$('.swiper-container').each(function(){
		thisSwiper = $(this);


		if(thisSwiper.hasClass('swiper-container-main')){

		    
			 var mySwiper = thisSwiper.swiper({
			    pagination: '.swiper-pagination',
				loop:true,
				grabCursor: true,
				slidesPerView: 1,
				spaceBetween: 24, 
				paginationClickable: true
			});
			$('.swiper-button-prev').on('click', function(e){
				e.preventDefault();
				var swiper = $(this).siblings('.swiper-container').data('swiper');
				swiper.swipePrev();
			});
			$('.swiper-button-next').on('click', function(e){
				e.preventDefault();
				var swiper = $(this).siblings('.swiper-container').data('swiper');
				swiper.swipeNext();
			});

		}
	

	});
	
// SWIPER
///////////////////////////////////////

});