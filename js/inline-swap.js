/**
 * Created by msnyder on 1/15/2016.
 */
$(document).ready(function() {

    $(".next").click(function () {
        var rownext = $(this).parent();
        rownext.hide();
        rownext.next(".form-row").show();

    });

    $(".prev").click(function () {
        var rowpar = $(this).parent(".form-row");

        rowpar.prev(".form-row").show();
        rowpar.hide();

    });

});