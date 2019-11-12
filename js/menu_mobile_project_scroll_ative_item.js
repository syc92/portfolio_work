$(window).scroll(function() {
    var position = $(this).scrollTop();
    $('section').each(function() {
        var target = $(this).offset().top;
        var target = target - 10;
        var id = $(this).attr('id');
        var top_height = $('#hero_img').height();
        if (id && (position >= target)) {
            $('#menu > ul > li > a').removeClass('active');
            $('#menu > ul > li > a[href=\\#' + id + ']').addClass('active');
        } else if ($(window).scrollTop() >= $(document).height() - $(window).height()) {
            // for the last part if it's too short
            $('#menu > ul > li > a').removeClass('active');
            $('#last_on_menu').addClass('active');
        };
    });
});