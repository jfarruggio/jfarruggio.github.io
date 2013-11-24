$(document).ready(function() {
    $('.read-more').click(function() {
        $('.read-more').fadeOut('fast');
        $('.read-less').fadeIn('fast');
        $('.hide-show-mobile').fadeIn('fast');
    });
    $('.read-less').click(function() {
        $('.read-less').fadeOut('fast');
        $('.read-more').fadeIn('fast');
        $('.hide-show-mobile').fadeOut('fast');
    });
});