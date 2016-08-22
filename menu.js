

$( document ).ready(function() {
    $('.carousel').carousel({
    	interval: 5000,
    	pause: null
    });
    smoothScroll(1000);

//picCarousel();

    
});

function smoothScroll(speed) {
    $('#back_to_top').click(function() {
        $('html, body').animate({
            scrollTop:$('#top_Anchor').offset().top
        }, speed);
        event.preventDefault();
    });
}

