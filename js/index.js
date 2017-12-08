var myAnimatedHeader = (function() {

    var docElem = document.documentElement,
        headder = document.querySelector('.navbar-default'),
        didScroll = false,
        changeHeaderOn = 300;

    function init() {
        window.addEventListener('scroll', function(event) {
            if (!didScroll) {
                didScroll = true;
                setTimeout(scrollPage, 250);
            }
        }, false );
    }

    function scrollPage() {
        var sy = scrollY();
        if (sy >= changeHeaderOn) {
            $('.navbar').addClass('navbar-shrink');
        }
        else {
            $('.navbar').removeClass('navbar-shrink');
        }
        didScroll = false;
    }

    function scrollY() {
        return  window.pageYOffset || docElem.scrollTop;
    }

    init();
}) ();

$ (function() {
    $('a[href*="#"]:not([href="#"])').click(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html, body').animate({
                    scrollTop: target.offset().top
                }, 1000);

                return false;
            }
    }
    });
});


// hide #back-top first
$("#back-top").hide();

// fade in #back-top
$(window).scroll(function() {
    if ($(this).scrollTop() > 100) {
        $('#back-top').fadeIn();
    } else {
        $('#back-top').fadeOut();
    }
});

// Close the Responsive Menu on Menu Item Click
$('.navbar-collapse ul li a').click(function () {
    $('.navbar-toggle:visible').click();    
});