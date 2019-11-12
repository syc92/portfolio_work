$('.img_item').click( function() {
    $('#main_content').append("<div class='img_modal_style'><span class='close_btn'>&times;</span><img class='modal_content' id='modal_img'></div>");
    var img_src = $('img', this).attr("src");
    var modal_img = $('#modal_img');
    modal_img.attr("src", img_src);
    
    $('.close_btn').click( function() {
        $('.img_modal_style').remove();
    })

    $('.img_modal_style').click( function() {
        $('.img_modal_style').remove();
    })

    $(document).on('keydown', function(event) {
        if (event.key == "Escape") {
            $('.img_modal_style').remove();
        }
    });
});




