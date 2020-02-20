$(window).scroll( function() {
    var scroll_y = window.scrollY
    var h = $(window).height()
    var target_h = h * 0.64 + 80

    $('#hero_img_over').css({
        opacity: function(){
            if ((scroll_y/target_h) >= 0) {
                return scroll_y/target_h
            }
        }
    })
})

// source: https://codepen.io/JTParrett/pen/BkDie
$.fn.moveIt = function(){
    var $window = $(window);
    var instances = [];

    $(this).each(function(){
        instances.push(new moveItItem($(this)));
    });

    window.addEventListener('scroll', function(){
        var scrollTop = $window.scrollTop();
        instances.forEach(function(inst){
        inst.update(scrollTop);
        });
    }, {passive: true});
    }

    var moveItItem = function(el){
        this.el = $(el);
        this.speed = parseInt(this.el.attr('data-scroll-speed'));
    };


    
    moveItItem.prototype.update = function(scrollTop){
        var w = $(window).width();
        var h = $(window).height();
        var target_h_normal = 80;
        var target_h_mobile = h*0.24;
        if (w > 960) {
            this.el.css('transform', 'translate(-50%, ' + -(scrollTop / this.speed - target_h_normal) + 'px)');
        } else {
            this.el.css('transform', 'translate(-50%, ' + -(scrollTop / this.speed - target_h_mobile) + 'px)');
        };  
    };

    // Initialization
    $(function(){
    $('[data-scroll-speed]').moveIt();
    });
