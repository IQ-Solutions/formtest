/**
 * Created by msnyder on 1/15/2016.
 */
$(document).ready(function() {

    $(".next").click(function () {
        var rownext = $(this).parent();

        rownext.slideToggle();
        rownext.next(".form-row").animate({
                                        opacity: 1
                                    }, 300, function() {
                                        $(this).removeClass("gray");
                                    });

    });

    $(".prev").click(function () {
        var rowpar = $(this).parent(".form-row");

        rowpar.prev(".form-row").slideToggle();
        rowpar.animate({
                    opacity:.2
                }, 300, function() {
                    $(this).addClass("gray");
                });

    });

});