$(function() {
    if ($(window).width() > 768) {
        $('.flexslider').flexslider({
            animation: "slide",
            animationLoop: true,
            slideshow: false,
            minItems: 5,
            itemWidth: 200,
            itemMargin: 20,
            start: function (slides) {
                $(slides).css('opacity', '1');
            }
        });
    } else {
        $('.flexslider').flexslider({
            animation: "slide",
            animationLoop: true,
            slideshow: false,
            start: function (slides) {
                $(slides).css('opacity', '1');
            }
        });

        if ($(window).width() < 769) {
            $('.pandora-title').click(function () {
                if ($('.pandora-hero-image.pandora-tablet-down').children("video").get(0).paused) {
                    $('.pandora-hero-image.pandora-tablet-down').children("video").get(0).play();
                    $('.pandora-hero-image.pandora-tablet-down').children(".playpause").fadeOut();
                } else {
                    $('.pandora-hero-image.pandora-tablet-down').children("video").get(0).pause();
                    $('.pandora-hero-image.pandora-tablet-down').children(".playpause").fadeIn();
                }
            });
        }
    }
});