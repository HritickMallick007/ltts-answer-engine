$(document).ready(function () {
    // Open popup
    $(".generate-btn").click(function () {
        $(".popup-search-engine-wrapper").slideDown(300).addClass('show');
        $("body").addClass("no-scroll");
    });

    // Close popup
    $(".popup-close-btn").click(function () {
        $(".popup-search-engine-wrapper").slideUp(300, function () {
            $(this).removeClass('show');
        });
        $("body").removeClass("no-scroll");
    });
});