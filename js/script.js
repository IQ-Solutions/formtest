/**
 * Created by msnyder on 1/15/2016.
 */
$(document).ready(function() {

    $(".next").click(function () {
        var rownext = $(this).parent();

        rownext.slideToggle();
        rownext.next(".form-row").removeClass("gray", 1000);

    });

    $(".prev").click(function () {
        var rowpar = $(this).parent(".form-row");

        rowpar.prev(".form-row").slideToggle();
        rowpar.addClass("gray", 1000);

    });

});