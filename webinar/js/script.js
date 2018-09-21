$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
        autoplay:false,
        autoplayHoverPause:false,
        margin:15,
        loop:true,
        responsiveClass:true,
        responsive:{
            0:{
                items:1,
                nav:true,
                loop:true,
                animateIn:true
            },
            769:{
                items:2,
                nav:true,
                loop:true,
                animateIn:true
            },
            992:{
                items:3,
                nav:true,
                loop:true,
                animateIn:true
            }
        }
    });

    $('#scroll-to-top').click(function () {
        $('html').animate({scrollTop: 0}, 1500);
    });

    $('.owl-next').html('');
    $('.owl-prev').html('');

});


