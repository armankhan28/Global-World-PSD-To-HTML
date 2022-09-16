$(document).ready(function(){


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

// mobile munu code 
$(document).ready(function () {
    $(".hamberger").click(function () {
           $(".mobile-nav").addClass("open");
           $(".mobile-nav").removeClass("fade");
       });
       $(".times").click(function () {
         $(".mobile-nav").removeClass("open");
         $(".mobile-nav").addClass("fade");
       });
   })