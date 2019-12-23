(function($){
    $(function() {
        $('.menu_icon').on('click', function() {
            $(this).closest('.navigation').toggleClass('menu_state_open');
        });
    });
})(jQuery);
