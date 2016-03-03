$( document ).ready(function() {

	$('.imagebox').slick({
	  dots: true,
	  infinite: true,
	  speed: 500,
	  fade: true,
	  autoplay: true,
	  autoplaySpeed: 4000,
	  cssEase: 'linear'
	});

	$('.theMenuMobile').css("display", "none");

	$('.burgerMenu').click(function () 
	{
		$( ".theMenuMobile" ).slideToggle( "slow" );
	});

	/*$('#mainTeaser').readmore({
	  speed: 75,
	  lessLink: '<span><a href="#">weniger...</a></span>',
	  moreLink: '<span><a href="#">mehr...</a></span>',
	  collapsedHeight: 92,
	  heightMargin: 10
	});*/

	/*$('.singleCourseContainer p').readmore({
	  speed: 75,
	  lessLink: '<span><a href="#">weniger...</a></span>',
	  moreLink: '<span><a href="#">mehr...</a></span>',
	  collapsedHeight: 92,
	  heightMargin: 0
	});*/

});