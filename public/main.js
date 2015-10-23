$(document).ready(function() {
    
    $('.testimonials div').eq(Math.floor((Math.random() * $('.testimonials div').length))).show();

    setInterval(function() {
        var $items = $('.testimonials div');
        var $currentItem = $items.filter(':visible');
        var currentIndex = $currentItem.index();
        var nextIndex = currentIndex;
        while (nextIndex == currentIndex) {
            nextIndex = Math.floor((Math.random() * $items.length));
        }
        $currentItem.fadeOut(1000, function() {
            $items.eq(nextIndex).fadeIn(1000);
        });
    }, 12000);

    // ----------Recipes------------

    $("#image1").click(function(){
        $("#rumproastrecipe").fadeOut();
        
    });

// --------- FAQ jQuary -------------


     $('#main').on('click', 'h5', function (){
        $(this).next().toggleClass('hide');
        return false;
    });

});