// Mobile Navbar slide down \\
$('.mobile-navbar').click(function() {
    $('.navbar').slideToggle(500);
});

// Scroll to Element with Logo and Title Animations \\
$('a[href*="#"]:not([href="#"])').click(function() {

    // Logo and Title \\
    // $("#main-logo").fadeOut(500);
    // $(".name-container").animate({"margin-left": "-25px"}, 1000);
    // $(".title").animate({"margin-left": "-80px"}, 500);
    // $("header").addClass("header-overlay", function() {
    //   $(this).fadeIn(1000);
    // });
    // $("#header-logo").delay(250).fadeIn(500);
    $('.navbar').slideToggle(500);

    // Scroll \\
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') || location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        if (target.length) {
            $('html,body').delay(250).animate({
                scrollTop: target.offset().top-85
            }, 1500);
            return false;
        }
    }
});


// Active Nav Tabs \\
$('.toggle-tabs').click(function(e) {
    e.preventDefault();

    if ($(this).is('.active')) {
        return;
    }
    $(this).tab('show');

    $(this).siblings('.toggle-tabs').removeClass('active');
    $(this).addClass('active');
});

$('.toggle-tabs').on('shown.bs.tab', function(e) {
    $('.tab-content').addClass('fadeOut');

    setTimeout(function() {
        $('.tab-content').removeClass('fadeOut');
    }, 200);
});
