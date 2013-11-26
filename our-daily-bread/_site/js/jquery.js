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

    $('.read-more2').click(function() {
        $('.read-more2').fadeOut('fast');
        $('.read-less2').fadeIn('fast');
        $('.hide-show-mobile2').fadeIn('fast');
    });
    $('.read-less2').click(function() {
        $('.read-less2').fadeOut('fast');
        $('.read-more2').fadeIn('fast');
        $('.hide-show-mobile2').fadeOut('fast');
    });
});