/*---------------------- 
FILMHAUS MAIN JavaScript
-----------------------*/

/*---------------------- 
GLOBAL VARIABLES
-----------------------*/
var mobileSize = false;
var tabletSize = false;
var desktopSize = false

  //Sizes for Window View Points
  var MobileMaximumWidth = 749;
  var TabletMaximumWidth = 1099;


/*---------------------- 
KONSTRUKTOR FUNCTION
-----------------------*/




/*---------------------- 
GENERAL CONTROLL AND OPTION VARIABLES
-----------------------*/


          function checkWindowSize()
          {
          //mobile
          if($(window).width() <= MobileMaximumWidth)
          {
            mobileSize = true;
            tabletSize = false;
            desktopSize = false;
          }
          //tablet
          if($(window).width() <= TabletMaximumWidth && $(window).width() >= MobileMaximumWidth)
          {
            mobileSize = false;
            tabletSize = true;
            desktopSize = false;
          }
          //desktop
          if($(window).width() >= TabletMaximumWidth+1)
          {
            mobileSize = false;
            tabletSize = false;
            desktopSize = true;
          }
          console.log(mobileSize + " " + tabletSize + " " + desktopSize );
        }


        function alignFacebookFrameSize()
        {
        	if(mobileSize == true)
        	{
        		$(".fb-page").data("width", "100px");
        	}
        }


/*---------------------- 
DOCUMENT READY FUNCTION
-----------------------*/


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

	console.log($(".fb-page").data("width"));

	checkWindowSize();

	alignFacebookFrameSize();

    //check if window resize
    $( window ).resize(function() 
    {
    	checkWindowSize();
		alignFacebookFrameSize();
    });

});