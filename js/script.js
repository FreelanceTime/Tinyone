$(document).ready(function(){
    $('.header__burger').click(function (event) {
        $('.header__burger, .top__menu').toggleClass('active');
    });
    
$('.works__banner').hover(function (event) {
$(event.currentTarget).toggleClass('active');
        })
    
});

