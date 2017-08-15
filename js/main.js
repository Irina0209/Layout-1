/*$(function() {

    var $images = $('.slider-slides__num img');

    var active = 0;

    var timer = setInterval(function() {
        nextImage()
    }, 3000);

    function nextImage() {

        $images.eq(active).removeClass('active');

        active++;

        if(active >= $images.length) {
            active = 0;
        }

        $images.eq(active).addClass('active');
    }

    function prevImage() {

        $images.eq(active).removeClass('active');

        active--;

        if (active < 0) {
            active = $images.length - 1;
        }

        $images.eq(active).addClass('active');
    }
});*/

$(document).ready()
$(window).load(function() {
  $('.flexslider').flexslider({
    animation: "slide"
  });
});

