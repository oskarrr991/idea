// SLIDER 1
$('#prev').on('click', function () {
    var last = $('.product').last().css({opacity: '0', width: '0px'});
    last.prependTo('.showSlides');
    last.animate({opacity: '1', width: '400px'});
});
$('#next').on('click', function () {
    var first = $('.product').first();
    first.animate({opacity: '0', width: '0px'}, function() {
        first.appendTo('.showSlides').css({opacity: '1', width: '400px'});
    });
});
// SLIDER 2
$('#prev1').on('click', function () {
    var last = $('.product1').last().css({opacity: '0', width: '0px'});
    last.prependTo('.showSlides1');
    last.animate({opacity: '1', width: '400px'});
});
$('#next2').on('click', function () {
    var first = $('.product1').first();
    first.animate({opacity: '0', width: '0px'}, function() {
        first.appendTo('.showSlides1').css({opacity: '1', width: '400px'});
    });
});