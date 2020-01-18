// Event listener when link was clicked
$('.page-scroll').on('click', function(e){
    var page = $(this).attr('href'); // Fetch the value from href
    var pageElement = $(page); // Fetch the element

    // Move the scroll to the top of Element
    $('html, body').animate({
        scrollTop: pageElement.offset().top - 50
    }, 1000);

    e.preventDefault();
});



// Parallax Effect
$(window).scroll(function() {
    var wScroll = $(this).scrollTop();

    // Jumbotron
    $('.jumbotron img').css({
        'transform' : 'translate(0px, '+ wScroll/4 +'%)'
    });

    $('.jumbotron h1').css({
        'transform' : 'translate(0px, '+ wScroll/2 +'%)'
    });

    $('.jumbotron p').css({
        'transform' : 'translate(0px, '+ wScroll/1.5 +'%)'
    });

    // Portfolio
    if (wScroll > $('.portfolio').offset().top - 300) {
        $('.portfolio .thumbnail').each(function(i) {
            setTimeout(function() {
                $('.portfolio .thumbnail').eq(i).addClass('show')
            }, 300 * (i + 1))
        })
    }
});



//about
$(window).on('load', function() {
    $('.pLeft').addClass('pShow');
    $('.pRight').addClass('pShow');
});