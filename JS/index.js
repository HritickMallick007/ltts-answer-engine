$(document).ready(function () {
    // Open popup
    $(".generate-btn").click(function () {
        $(".popup-search-engine-wrapper").fadeIn(300);
        $(".popup-search-engine-wrapper").addClass('show');
        $("body").addClass("no-scroll");
    });

    // Close popup
    $(".popup-close-btn").click(function () {
        $(".popup-search-engine-wrapper").fadeOut(300);
        $("body").removeClass("no-scroll");
    });

    // // Optional: close when clicking outside the popup container
    // $(".popup-search-engine-wrapper").click(function (e) {
    //     if ($(e.target).is(".popup-search-engine-wrapper")) {
    //         $(this).fadeOut(300);
    //         $("body").removeClass("no-scroll");
    //     }
    // });
});