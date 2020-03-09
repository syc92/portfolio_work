// activate the item when scroll
$(window).scroll(function() {
    var position = $(this).scrollTop();
    $('section').each(function() {
        var target = $(this).offset().top;
        var target = target - 10;
        var id = $(this).attr('id');
        if (id && (position >= target)) {
            var class_in_item = 'hash_' + id;
            $('#menu > ul > li').removeClass('active');
            $('#menu > ul > li.' + class_in_item).addClass('active');
        } else if ($(window).scrollTop() >= $(document).height() - $(window).height()) {
            // for the last part if it's too short
            $('#menu > ul > li').removeClass('active');
            $('#last_on_menu').addClass('active');
        };
    });
});

// scroll when click the item in menu
function goToByScroll(got_id){
    $('html, body').animate({scrollTop: $("#"+got_id).offset().top},'fast');
}

$('#menu ul li').click( function(){
    var li_class = $(this).attr('class');
    var got_id = li_class.replace('hash_', '')
    goToByScroll(got_id);
})
