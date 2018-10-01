$(function() {

	var owl = $('.owl-carousel');
	owl.owlCarousel({
		items: 1,
		loop: true,
		autoplay: true
	});
	$('.next').click(function() {
    owl.trigger('next.owl.carousel');
})
// Go to the previous item
$('.prev').click(function() {
    // With optional speed parameter
    // Parameters has to be in square bracket '[]'
    owl.trigger('prev.owl.carousel', [300]);
})
	

	$(".mnu a").mPageScroll2id();


});
