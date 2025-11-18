
var iconArray = {
    'i-msg':'<svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M13.8552 0.146349C13.9238 0.214834 13.9709 0.301766 13.991 0.396569C14.0111 0.491373 14.0031 0.589963 13.9682 0.680349L8.9682 13.6803C8.93281 13.7723 8.87102 13.8518 8.79059 13.9088C8.71017 13.9658 8.6147 13.9977 8.51618 14.0006C8.41766 14.0035 8.32049 13.9772 8.23687 13.925C8.15325 13.8728 8.08691 13.7971 8.0462 13.7073L5.9552 9.10735L9.0312 6.03035C9.16368 5.88817 9.2358 5.70013 9.23237 5.50583C9.22895 5.31152 9.15023 5.12614 9.01282 4.98873C8.87541 4.85131 8.69002 4.7726 8.49572 4.76917C8.30142 4.76575 8.11337 4.83787 7.9712 4.97035L4.8942 8.04635L0.294198 5.95635C0.204165 5.91569 0.128195 5.84926 0.0758762 5.76547C0.0235573 5.68167 -0.0027655 5.58425 0.000229985 5.48551C0.00322547 5.38676 0.035405 5.29112 0.0927072 5.21065C0.150009 5.13017 0.229866 5.06848 0.322198 5.03335L13.3222 0.0333486C13.4125 -0.00137688 13.5108 -0.00918444 13.6054 0.0108718C13.7 0.030928 13.7868 0.0779874 13.8552 0.146349Z" fill="white"/></svg>',

    'i-bar':'<svg xmlns="http://www.w3.org/2000/svg" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink" width="24" height="24" x="0" y="0" viewBox="0 0 464.205 464.205" style="enable-background:new 0 0 512 512" xml:space="preserve" class=""><g><path d="M435.192 406.18H29.013C12.989 406.18 0 393.19 0 377.167s12.989-29.013 29.013-29.013h406.18c16.023 0 29.013 12.99 29.013 29.013-.001 16.023-12.99 29.013-29.014 29.013zM435.192 261.115H29.013C12.989 261.115 0 248.126 0 232.103s12.989-29.013 29.013-29.013h406.18c16.023 0 29.013 12.989 29.013 29.013s-12.99 29.012-29.014 29.012zM435.192 116.051H29.013C12.989 116.051 0 103.062 0 87.038s12.989-29.013 29.013-29.013h406.18c16.023 0 29.013 12.989 29.013 29.013s-12.99 29.013-29.014 29.013z" fill="#ffffff" opacity="1" data-original="#000000" class=""></path></g></svg>',

    'i-play':'<svg xmlns="http://www.w3.org/2000/svg" width="13" height="14" viewBox="0 0 13 14" fill="none"><path d="M11.9118 5.14716C12.2404 5.32594 12.5153 5.59283 12.707 5.91923C12.8987 6.24563 13 6.61923 13 7.00001C13 7.38079 12.8987 7.75439 12.707 8.08078C12.5153 8.40718 12.2404 8.67407 11.9118 8.85285L3.14542 13.7296C1.73385 14.5157 0 13.4937 0 11.8775V2.12325C0 0.5063 1.73385 -0.51497 3.14542 0.269707L11.9118 5.14716Z" fill="white"/></svg>',

};


function svgIcon() {
    $(".n-icon").each(function() {
        var dataIcon = $(this).data("icon");
        var dataIconWidth = $(this).data("iconwidth");
        var dataIconHeight = $(this).data("iconheight");
        if (dataIcon in iconArray) {
            $(this).html(iconArray[dataIcon]);
            $(this).find('svg').css({ "width": dataIconWidth, "height": dataIconHeight });
        } else {
            console.log(dataIcon + ": This icon(s) does not exists")
        }
    });
}

svgIcon();

/* HTML Example: <i class="n-icon" data-icon="iconname" data-iconwidth="24px" data-iconheight="24px"></i> */

$(".menu-close").on("click", function () {
    $(".nav-main").removeClass("active");
    $(".overlay").removeClass("active");
});
$(".overlay").on("click", function () {
    $(".nav-main").removeClass("active");
    $(".overlay").removeClass("active");
});
$(".bar-btn").on("click", function () {
    $(".overlay").addClass("active");
    $(".nav-main").addClass("active");
});