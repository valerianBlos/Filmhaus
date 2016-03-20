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

        function ratioImagebox()
        {
          //slick-slider 
          //imageboxImageSize

          //var ratio16to9 = ($( window ).width() / 16) * 9;
          var ratio2to1 = ($( window ).width() / 2) * 1;
          //console.log(ratio16to9);

          $(".imageboxImageSize").css("height", ratio2to1);
          $(".slick-slider").css("height", ratio2to1);
          $("#headerImage").css("height", ratio2to1);
        }


        function ratioAllPictures()
        {

          $(".newsImage").each(function(){

            var heightOfImage = ($(this).width() / 16) * 9;
            $(this).css("height", heightOfImage);

          });


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

  ratioImagebox();

  ratioAllPictures();

    //check if window resize
    $( window ).resize(function() 
    {
    	checkWindowSize();
		  alignFacebookFrameSize();
		  checkFooterPosition();
      ratioImagebox();
      ratioAllPictures();
    });

});