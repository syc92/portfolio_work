$(window).scroll( function() {
    var scroll_y = window.scrollY
    var h = $(window).height()
    var target_h = h * 0.64 + 40
    var w = $(window).width()

    if (w > 960) {
        if (scroll_y >= target_h) {
            $('#nav_top').css('position', 'fixed')
            $('#nav_top').css('top', 0)
            $('#nav_top').css('padding-top', 24)
        } else {
            $('#nav_top').css('position', 'absolute')
            $('#nav_top').css('top', target_h - 40)
            $('#nav_top').css('padding-top', 64)
        }
    }
})
