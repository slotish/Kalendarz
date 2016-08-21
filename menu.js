

$( document ).ready(function() {
    $('.carousel').carousel();
    smoothScroll(1000);
});

function smoothScroll(speed) {
    $('#back_to_top').click(function() {
        $('html, body').animate({
            scrollTop:$('#top_Anchor').offset().top
        }, speed);
        event.preventDefault();
    });
}