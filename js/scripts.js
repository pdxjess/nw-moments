$(document).ready(function(){
    // Page scrolling of nav buttons
    $(function() {
        $('a[href*="#"]:not([href="#"])').click(function() {
            if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
                if (target.length) {
                  $('html, body').animate({
                    scrollTop: target.offset().top
                  }, 1000);
                  return false;
                }
            }
        });
    });
    // Back to top arrow
    $(window).scroll(function() {
        if ($(this).scrollTop() > 50) {
            $('#go-top').fadeIn(200);
        } else {
            $('#go-top').fadeOut(200);
        }
    });
});
