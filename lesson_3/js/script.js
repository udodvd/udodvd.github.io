$(document).ready(function(){
    var touch = $('#myClickMenu');
    var menu = $('.nav');
    var touch2 = $('#faMyStyle');
    $(touch2).on('click', function(e) {
        e.preventDefault();
        menu.slideToggle();
    });
    $(touch).on('click', function(e) {
        e.preventDefault();
        menu.slideToggle();
    });
    $(window).resize(function(){
        var wid = $(window).width();
        if(wid > 640 && menu.is(':hidden')) {
            menu.removeAttr('style');
        }
    });
});