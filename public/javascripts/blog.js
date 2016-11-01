/**
 * Created by 24478 on 2016/10/19.
 */
$(document).ready(function () {
    var xScroll = $(window).width();
    var Last = $('#sidebar > ul > li:last');
    var navH = Last.offset().top;
    $(window).resize(function () {
        xScroll = $(window).width();
        if(xScroll <= 767) {
            Last.removeClass("fix uk-active")
        }
    })
        $(window).scroll(function(){
            if(xScroll > 767) {
                var scroH = $(this).scrollTop();
                if (scroH >= navH) {
                    Last.addClass("fix uk-active")
                } else if (scroH < navH) {
                    Last.removeClass("fix uk-active")
                }
            }
        })

});
