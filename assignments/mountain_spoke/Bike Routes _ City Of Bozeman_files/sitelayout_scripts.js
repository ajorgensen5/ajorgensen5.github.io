
$(window).load(function ()
{
    
    //adjust search if important notice is closed so tab does not overlap search
    var alertClass = $('#alert_controls').attr("class");
    if (alertClass == "show") { $("#top_nav").removeClass("right_adjust"); $(".alert_container").removeClass("alert--closed"); }
    //readjust search on open/close of important notice
    $('#alert_controls').click(function () {
        var alertClass = $('#alert_controls').attr("class");
        if (alertClass == "hide") {
            $("#top_nav").removeClass("right_adjust");
            $(".alert_container").removeClass("alert--closed");
        }
        else {
            $("#top_nav").addClass("right_adjust");
            $(".alert_container").addClass("alert--closed");
        }
    });
    $('.sitewrapper').css({ 'overflow': 'hidden', 'width': '100%' });
});

$(document).ready(function () {
    $(".search-trigger").click(function () {
        $(".top_search").fadeIn();
        $(".mainSpan").addClass('search_open').append('');
        $(".search_overlay").fadeIn();
        $("input#search_text").focus();
    })
    $(".close_search").click(function () {
        $(".top_search").hide();
        $(".search_overlay").hide().remove();
        $(".mainSpan").removeClass('search_open');
    });
});
