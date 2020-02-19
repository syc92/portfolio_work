$(window).scroll( function() {
    var scroll_y = window.scrollY
    var h = $(window).height()
    var target_h = h * 0.64 + 40
    var w = $(window).width()

    if (w > 960) {
        if (scroll_y >= target_h) {
            $('#nav_top').css('position', 'fixed')
            $('#nav_top').css('padding-top', 24)
        } else {
            $('#nav_top').css('position', 'absolute')
            $('#nav_top').css('padding-top', 64)
        }
    }
})

// stick nav right besides main content
$(window).ready(stick_nav_right_besides_main_content)
$(window).resize(stick_nav_right_besides_main_content)

function stick_nav_right_besides_main_content() {
    var w = $(window).width()
    var target_w = ($(window).width() - 1280)/2

    if (w > 1280) {
        $('#nav_top').css('left', target_w)
    }
}