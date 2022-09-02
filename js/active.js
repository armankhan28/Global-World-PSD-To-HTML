$(document).ready(function(){


    $('#mobile-menu-active').meanmenu({
        meanMenuContainer: '.mobile-menu',
        meanScreenWidth: "767"
    });

    $('.advertiser-active').owlCarousel({
        loop:true,
        margin:0,
        nav:true,
        navText:['<i class="fa-sharp fa-solid fa-chevron-left"></i>','<i class="fa-sharp fa-solid fa-chevron-right"></i>'],
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:1
            }
        }
    })

    $('.video-popup').magnificPopup({
        type: 'iframe'
        
      });
})