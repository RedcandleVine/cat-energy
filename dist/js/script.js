$(document).ready(function () {
    // Клон элементов в мобильное меню

    $.each($(".js-mobile-menu > li"), function (index, val) {
        let clone = $(val).clone();
        $("#menu > ul").append(clone);
    });
    // Активация мобильного меню

    $("#menu").mmenu({
        extensions: ["pagedim-black", "position-left"],
        navbar: {
            title: "<span>Cat</span> Energy",
        },
    });

    var $menu = $("#menu");
    var $icon = $(".mobile-menu");
    var API = $menu.data("mmenu");

    function openMenu() {
        API.open();
    }

    function closeMenu() {
        API.close();
    }
    $icon.on("click", openMenu);
    API.bind("open:finish", function () {
        $icon.addClass("is-active");
        $("html").addClass("lock");
    });
    API.bind("close:finish", function () {
        $icon.removeClass("is-active");
        $("html").removeClass("lock");
    });

    //Activation before-after plugin
    $("#example").twentytwenty();

    //Activation phone-mask plugin
    $("#telephone").mask("8 (999) 999-99-99");


});