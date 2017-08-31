$.fn.parallaxIt = function(){
    var $window = $(window);
    var instances = [];

    $(this).each(function(){
        instances.push(new parallaxItItem($(this)));
    });

    window.onscroll = function(){
        var scrollTop = $window.scrollTop();
        instances.forEach(function(inst){
            inst.update(scrollTop);
        });
    }
};

var parallaxItItem = function(el){
    this.el = $(el);
    this.speed = parseInt(this.el.attr('data-scroll-speed'));
};

parallaxItItem.prototype.update = function(scrollTop){
    this.el.css('transform', 'translateY(' + -(scrollTop / this.speed) + 'px)');
};

var scrollOnClick = function(el) {
    var $data = $(el).data('scroll-on-click'),
        $target = $($data),
        documentTop = $(document).scrollTop(),
        addOffset = $(window).width() > 768 ? 93 : 0;

    if (documentTop !== ($target.offset().top)) {
        setTimeout(function () {
            $('body, html').animate({scrollTop: ($target.offset().top - addOffset)}, 'slow', function() {
                if ($target.next().hasClass('pandora-hidden-edit')) {
                    $target.next().slideDown('slow', function () {
                        if ($(window).width() < 769 && $(window).width() > 667) {
                            $target.next().find('.flexslider').flexslider({
                                animation: "slide",
                                animationLoop: false,
                                slideshow: false,
                                minItems: 3,
                                itemWidth: 245,
                                start: function (slides) {
                                    $(slides).css('opacity', '1');
                                }
                            });
                        } else if ($(window).width() < 768) {
                            $target.next().find('.flexslider').flexslider({
                                animation: "slide",
                                animationLoop: false,
                                slideshow: false,
                                start: function (slides) {
                                    $(slides).css('opacity', '1');
                                }
                            });
                        }
                    });
                }
            });
        }, 500);
    }
};

var scrollBackToTop = function() {
    $('body, html').animate({scrollTop: 0}, 'slow');
};

var scrollBackUp = function(el) {
    $(el).parent().slideUp();
};

$(function(){
    $('[data-scroll-speed]').parallaxIt();

    $('.pandora-parallax-3 > div, .pandora-9 > div').click(function () {
        if($(this).children("video").get(0).paused){
            $(this).children("video").get(0).play();
            $(this).children(".playpause").fadeOut();
        }else{
            $(this).children("video").get(0).pause();
            $(this).children(".playpause").fadeIn();
        }
    });

    // // Does the browser actually support the video element?
    // var supportsVideo = !!document.createElement('video').canPlayType;
    //
    // if (supportsVideo) {
    //     // Obtain handles to main elements
    //     var videoContainer = document.getElementById('pandora-video');
    //     var video = document.getElementById('pandora-video-player');
    //     var videoControls = document.getElementById('pandora-video-controls');
    //
    //     // Hide the default controls
    //     video.controls = false;
    //
    //     // Display the user defined video controls
    //     videoControls.style.display = 'block';
    //
    //     // Obtain handles to buttons and other elements
    //     var playpause = document.getElementById('playpause');
    //     var mute = document.getElementById('mute');
    //     var progress = document.getElementById('progress');
    //     var progressBar = document.getElementById('progress-bar');
    //
    //     // Only add the events if addEventListener is supported (IE8 and less don't support it, but that will use Flash anyway)
    //     if (document.addEventListener) {
    //         // Wait for the video's meta data to be loaded, then set the progress bar's max value to the duration of the video
    //         video.addEventListener('loadedmetadata', function() {
    //             progress.setAttribute('max', video.duration);
    //         });
    //
    //         // Add events for all buttons
    //         playpause.addEventListener('click', function(e) {
    //             if (video.paused || video.ended) video.play();
    //             else video.pause();
    //         });
    //
    //         // The Media API has no 'stop()' function, so pause the video and reset its time and the progress bar
    //         mute.addEventListener('click', function(e) {
    //             video.muted = !video.muted;
    //         });
    //
    //         // As the video is playing, update the progress bar
    //         video.addEventListener('timeupdate', function() {
    //             // For mobile browsers, ensure that the progress element's max attribute is set
    //             if (!progress.getAttribute('max')) progress.setAttribute('max', video.duration);
    //             progress.value = video.currentTime;
    //             progressBar.style.width = Math.floor((video.currentTime / video.duration) * 100) + '%';
    //         });
    //
    //         // React to the user clicking within the progress bar
    //         progress.addEventListener('click', function(e) {
    //             var pos = (e.pageX  - this.offsetLeft) / this.offsetWidth;
    //             video.currentTime = pos * video.duration;
    //         });
    //     }
    // }
});