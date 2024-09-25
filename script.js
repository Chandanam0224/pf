$(document).ready(function() {
    // Smooth scrolling for internal links
    $('a').on('click', function(e) {
        if (this.hash !== '') {
            e.preventDefault();
            var hash = this.hash;
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800);
        }
    });

    // Add dynamic hover effects to menu items
    $('.navbar ul li a').hover(function() {
        $(this).css('background-color', '#ffd700');
        $(this).css('color', '#0077cc');
    }, function() {
        $(this).css('background-color', '');
        $(this).css('color', '');
    });
});