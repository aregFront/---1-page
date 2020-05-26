$('.minMenuHeader').click(function() {
    
    $('.blackMenu').removeAttr('hidden');

});

$('.x').click(function() {
    
    $('.blackMenu').attr('hidden', 'hidden');

});

$(document).scroll(function () {

    var scrollSize = $(window).scrollTop();
    var height = $(window).height();
    scrollSize = Math.round(scrollSize);

    if(scrollSize > height) {
        $('.onHeader').css('position', 'fixed');
        $('.onHeader').css("z-index", "10");
        $('.onHeader').css("width", "100%");
        $('.onHeader').css("box-sizing", "border-box");
    } else {
        $('.onHeader').css('position', 'static');
        $('.onHeader').css("z-index", "unset");
        $('.onHeader').css("width", "unset");
        $('.onHeader').css("box-sizing", "unset");
    }

});