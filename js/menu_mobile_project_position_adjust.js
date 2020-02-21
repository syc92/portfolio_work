// move nav elements when scroll
$(window).scroll(function() {
    var position = $(this).scrollTop();
    var hero_height = $('#hero_img').height();
    var window_width = $(window).width();
    if (window_width <= 960) {
        if (position > hero_height) {
            $('#detail_page_name').animate({left: '0'}, 15, 'linear');
            $('#menu_icon').animate({margin: '8px 0 0 0'}, 15, 'linear');
            $('#nav_top').animate({top: '0'}, 15, 'linear');
        } else if (position < hero_height) {
            $('#detail_page_name').animate({left: '24px'}, 15, 'linear');
            $('#menu_icon').animate({margin: '8px 24px 0 0'}, 15, 'linear');
            $('#nav_top').animate({top: '24px'}, 15, 'linear');
        }
    }
});

// reset when resize
$(window).resize(function(e) {
    var window_width = $(this).width();
    if (window_width > 960) {
        $('#detail_page_name').attr('style', 'left: ');
        $('#menu_icon').attr('style', 'margin: ');
        $('#nav_top').attr('style', 'top: ');
    }
})