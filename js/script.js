$(document).ready(function () {
    
    $('.carousel').carousel({

        interval: 3000
    });
    
    /* option-box */ 
    $(".option-box .gear-check").click(function () { 

        $(".color-option").toggle("slow");
    });

    // Change color theme
    var colorLi = $(".color-option ul li");

    colorLi
        .eq(0).css("backgroundColor", "#E41B17").end()
        .eq(1).css("backgroundColor", "#E426D5").end()
        .eq(2).css("backgroundColor", "#009AFF").end()
        .eq(3).css("backgroundColor", "#FFD500");

        colorLi.click(function () { 
            
           $("link[href*='theme']").attr("href", $(this).attr("data-value"));
        });

    var scrollButton = $('#scroll-top');
    $(window).scroll(function () { 
        $(this).scrollTop() >= 700 ? scrollButton.show() : scrollButton.hide();    
    });
    $(scrollButton).click(function () { 
        $("html,body").animate({scrollTop : 0}, 600);
    });

});

//Loading Screen
$(window).load( function () {
    $(".loading-overlay .spinner").fadeOut(2000, function () {

        $(this).parent().fadeOut(2000, function () {

            $("body").css("overflow", "auto");
            $(this).remove();
          });
      });
});