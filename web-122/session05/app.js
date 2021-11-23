$(document).ready(function() {
    $('.sidebar ul.navbar-nav a').click(function() {
        $('.sidebar ul.navbar-nav a').removeClass('current');
        $(this).addClass('current');
    });
});