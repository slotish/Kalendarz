

$( document ).ready(function() {
    $('.first_carousel').carousel({
    	interval: 3000,
    	pause: null
    });

    $('.second_carousel').carousel({
    	interval: 5000,
    	pause: null
    });
    smoothScroll(1000);

    $('.firstCalendar').mouseover(function(){
    	$('.firstCalendar').css('border' , 'solid 2px red');
    })

    $('.firstCalendar').mouseout(function(){
    	$('.firstCalendar').css('border' , 'none');
    })


    $('.secondCalendar').mouseover(function(){
    	$('.secondCalendar').css('border' , 'solid 2px red');
    })

    $('.secondCalendar').mouseout(function(){
    	$('.secondCalendar').css('border' , 'none');
    })

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

var randomTimeValue = setInterval(function(){ Math.ceil(Math.random() * 5); },2000);