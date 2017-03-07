/* ---------------------------------------- */
/* one.app.js */
/* ---------------------------------------- */
var App = function() {
    function handleBootstrap() {
        /*Bootstrap Carousel*/
        jQuery('.carousel').carousel({
            interval: 15000,
            pause: 'hover'
        });
    };
    var handleFullscreen = function() {
        var WindowHeight = $(window).height();

        if ($(document.body).hasClass("promo-padding-top")) {
            HeaderHeight = $(".header").height();
        } else {
            HeaderHeight = 0;
        }

        $(".fullheight").css("height", WindowHeight - HeaderHeight);

        $(window).resize(function() {
            var WindowHeight = $(window).height();
            $(".fullheight").css("height", WindowHeight - HeaderHeight);
        });
    };
    // Header
    function handleHeader() {
        // jQuery to collapse the navbar on scroll
        if ($('.navbar').offset().top > 150) {
            $('.navbar-fixed-top').addClass('top-nav-collapse');
        }
        $(window).scroll(function() {
            if ($('.navbar').offset().top > 150) {
                $('.navbar-fixed-top').addClass('top-nav-collapse');
            } else {
                $('.navbar-fixed-top').removeClass('top-nav-collapse');
            }
        });

        var $offset = 0;
        $offset = $(".navbar-fixed-top").height() + 12;
        // jQuery for page scrolling feature - requires jQuery Easing plugin
        $('.page-scroll a').bind('click', function(event) {
            var $position = $($(this).attr('href')).offset().top;
            $('html, body').stop().animate({
                scrollTop: $position - $offset
            }, 600);
            event.preventDefault();
        });

        var $scrollspy = $('body').scrollspy({ target: '.navbar-fixed-top', offset: $offset + 2 });

        // Collapse Navbar When It's Clickicked
        $(window).scroll(function() {
            $('.navbar-collapse.in').collapse('hide');
        });
    };
    return {
        init: function() {
            handleHeader();
            handleBootstrap();
            handleFullscreen();
        },

        initParallaxBg: function() {
            $(window).load(function() {
                jQuery('.parallaxBg').parallax("50%", 0.4);
                jQuery('.parallaxBg1').parallax("50%", 0.2);
            });
        },
    };
}();

/* ---------------------------------------- */
/* revolution-slider.js */
/* ---------------------------------------- */
var RevolutionSlider = function() {
    return {
        //Revolution Slider - Full Screen
        initRSfullScreen: function() {
            var revapi;
            jQuery(document).ready(function() {
                revapi = jQuery('.fullscreenbanner').revolution({
                    delay: 15000,
                    startwidth: 1170,
                    startheight: 500,
                    hideThumbs: 10,
                    fullWidth: "on",
                    fullScreen: "on",
                    hideCaptionAtLimit: "",
                    dottedOverlay: "twoxtwo",
                    navigationStyle: "preview4",
                    fullScreenOffsetContainer: ""
                });
            });
        }
    };
}();