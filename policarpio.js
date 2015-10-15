
/**
 * Scroll event handling
 */
$(window).scroll(function(event){
    
    var scrollTop = $(this).scrollTop();
    var nav = $('nav');
    var article = $('article');
    var hiddenHeader = $('#hidden-header');

    if (scrollTop >= (article.offset().top - nav.height())){
        nav.addClass('with-fixed-placement');
        hiddenHeader.addClass('with-visibility');
    } else {
        nav.removeClass('with-fixed-placement');
        hiddenHeader.removeClass('with-visibility');
    }
    
    
});
