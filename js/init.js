(function ($) {
    $(function () {
        $('.button-collapse').sideNav();
        // external js: masonry.pkgd.js, imagesloaded.pkgd.js
        // init Masonry
        var $grid = $('.grid').masonry({
            itemSelector: '.grid-item'
            , percentPosition: true
            , columnWidth: '.grid-sizer'
        });
        // layout Masonry after each image loads
        $grid.imagesLoaded().progress(function () {
            $grid.masonry();
        });
    }); // end of document ready
})(jQuery); // end of jQuery name space
$(window).load(function () {
    // Animate loader off screen
    $(".se-pre-con").fadeOut("slow");;
});

function init() {
    window.addEventListener('scroll', function (e) {
        var distanceY = window.pageYOffset || document.documentElement.scrollTop
            , shrinkOn = 10
            , header = document.querySelector("header");
        if (distanceY > shrinkOn) {
            classie.add(header, "smaller");
        }
        else {
            if (classie.has(header, "smaller")) {
                classie.remove(header, "smaller");
            }
        }
    });
}
window.onload = init();