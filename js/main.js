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
          //console.log(mobileSize + " " + tabletSize + " " + desktopSize );
        }


        function alignFacebookFrameSize()
        {
        	if(mobileSize == true)
        	{
        		$(".fb-page").data("width", "100px");
        	}
        }


        function checkFooterPosition () 
        {
        	var $el = $('#footer');
        	var heightOfViewport = $( window ).height();
        	var bottom =  $el.position().top + $el.outerHeight(true);

        	if (bottom <= heightOfViewport)
        	{
        		$("#footer").addClass("footerToBottom");
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
	  arrows: false,
	  autoplaySpeed: 4000,
	  cssEase: 'linear'
	});

	$('.theMenuMobile').css("display", "none");

	$('.burgerMenu').click(function () 
	{
		$( ".theMenuMobile" ).slideToggle( "slow" );
	});

	$('div.expander').expander();
	$('p.expander').expander();

	checkFooterPosition();

	checkWindowSize();

	alignFacebookFrameSize();

    //check if window resize
    $( window ).resize(function() 
    {
    	checkWindowSize();
		alignFacebookFrameSize();
		checkFooterPosition();
    });

});