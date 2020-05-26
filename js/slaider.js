$('.material-arrow').children('img').click(function() {


        $('.material-arrow').css('display', 'none');
        $('.material-arrow-left').css('display', 'flex');

        $('.material-colors-child').eq(0).css('display', 'none');
        $('.material-colors-child').eq(2).css('display', 'flex');

});

$('.material-arrow-left').children('img').click(function() {


        $('.material-arrow-left').css('display', 'none');
        $('.material-arrow').css('display', 'flex');

        $('.material-colors-child').eq(2).css('display', 'none');
        $('.material-colors-child').eq(0).css('display', 'flex');

});

$('.material-colors-child').click(function(){

    const isMobile = /Android|webOS|iPhone|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);

    if(!isMobile) {
        $('.material-colors-child').removeClass('material-color-selected');
        $(this).addClass('material-color-selected');
    } 

    let index = $(this).attr('value');
    
    $('.material-window').attr('src', 'img/material/window-' +index+ '.png');

});