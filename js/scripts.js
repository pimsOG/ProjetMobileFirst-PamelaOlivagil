$(document).ready(function(){


    //apparition timeur

 $( ".title-home" ).delay(3000).fadeOut( 2000, function() {
  });

  $( ".timer" ).delay(5100).fadeIn( 1500, function() {
  });

    $('#Countdown').countdown({until: new Date(2016, 07-1, 01)});


	// carousel
$('.owl-carousel').owlCarousel({
	items:1,
    margin:10,
    nav:true,
	navText: [ '&lsaquo;', '&rsaquo;' ],
    responsive:{
        0:{
            items:1
        },
        550:{
            items:2
        },
        900:{
            items:3
        },
    }
})

$('.carousel-galerie').owlCarousel({
    items:1,
    margin:60,
    nav:true,
    navText: [ '&lsaquo;', '&rsaquo;' ],
    loop:true,
    merge:true,
    responsive:{
        0:{
            items:1
        },
        700:{
            items:2
        },
        900:{
            items:3
        },
    }
})






















});
