// main click menu icon button
$('#menu_icon').click( function(e){
    var menu_status = $('#menu ul').css('display');
    if (menu_status == 'none') {
        $('#menu ul').attr('style', 'display: block');
        $('#menu').attr('style', 'height: 100vh');
        $(this).attr('src', 'icon/close_btn.png');
    } else {
        $('#menu ul').attr('style', 'display: none');
        $('#menu').attr('style', 'height: 0');
        $(this).attr('src', 'icon/hamburger.png');
    }
});

// esc button
$(document).on('keyup', function(e) {
    var menu_status = $('#menu ul').css('display');
    var window_width = $(this).width();
    if (window_width <= 960) {
        if (e.keyCode === 27) {
            if (menu_status != 'none') {
                $('#menu ul').attr('style', 'display: none');
                $('#menu').attr('style', 'height: 0');
                $('#menu_icon').attr('src', 'icon/hamburger.png');
            }
        }
    }
});

// hide the menu after click
$('#menu ul li a').click( function(e){
    var window_width = $(window).width();
    if (window_width <= 960) {
        $('#menu ul').attr('style', 'display: none');
        $('#menu').attr('style', 'height: 0');
        $('#menu_icon').attr('src', 'icon/hamburger.png');
    }
});

// resize reset menu property
$(window).resize(function(e) {
    var window_width = $(this).width();
    var menu_status = $('#menu ul').css('display');
    if (window_width > 960) {
        $('#menu ul').attr('style', "display: ''");
        $('#menu').attr('style', "height: ''");
        $('#menu_icon').attr('src', 'icon/hamburger.png');
    }
})
