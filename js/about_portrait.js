$('#self_portrait_img').hover( 
    function() {
        $(this).attr("src", function(i, src) {
            return src.replace("image/img_about/portrait.jpg", "image/img_about/portrait_annotation.jpg")
        })
    }, 
    function() {
        $(this).attr("src", function(i, src) {
            return src.replace("image/img_about/portrait_annotation.jpg", "image/img_about/portrait.jpg")
        })
    }
)

// $('#self_portrait_img').mousedown( 
//     function() {
//         var win_wid = $(window).width()
//         if (win_wid < 960) {    
//             $(this).attr("src", function(i, src) {
//                 return src.replace("image/img_about/portrait.jpg", "image/img_about/portrait_annotation.jpg")
//             })
//         }
//     }
// ).mouseup(
//     function() {
//         var win_wid = $(window).width()
//         if (win_wid < 960) {
//             $(this).attr("src", function(i, src) {
//                 return src.replace("image/img_about/portrait_annotation.jpg", "image/img_about/portrait.jpg")
//             })
//         }
//     }
// )
// not work for touchend