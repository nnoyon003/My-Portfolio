
//menu-bar
$(document).ready(function(){
    $('#menu').hover(function () {
        $(".dropdown").hover(function() {
            $('.dropdown-menu', this).fadeIn("slow");
            },
            function() { $('.dropdown-menu', this).fadeOut("slow");
            });
    });
});


//scroll to top
$(document).ready(function(){
    $(window).scroll(function (){
        if ($(this).scrollTop() > 500) {
            $('#gotoup').fadeIn();
        } else {
            $('#gotoup').fadeOut();
        }
    });
    // scroll body to 0px on click
    $('#gotoup').click(function (){
        $("html, body").animate({scrollTop:0}, 500);
    });

});


// gallery page
$(document).ready(function(){
    $('#lightgallery').lightGallery();
});


