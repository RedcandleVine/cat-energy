document.addEventListener("DOMContentLoaded", function () {

    //hide products in catalog page
    if ($(".catalog__item").length > 7) {
        $(".catalog__block-wrapper").append("<div class='catalog__more'><div class='catalog__item-wrapper'><div class='catalog__item-photo'><img src='img/plus.svg' alt='Cat Energy PRO 500 г'></div><div class='catalog__item-info'><div class='catalog__item-title'>Показать еще 100500 товаров</div><div class='catalog__info'><div class='catalog__info-row'><div class='catalog__info-row-block'>На самом деле вкусов гораздо больше!</div></div></div></div><div class='catalog__item-button'><span>показать все</span></div></div></div>");

        $.each($(".catalog__item"), function (index, val) {
            if (index > 6) {
                $(val).css({ display: "none" });
            }
        });

        $(".catalog__more").on("click", function (e) {
            e.preventDefault();
            let button = $(this);
            $.each($(".catalog__item"), function (index, val) {
                if (index > 6) {
                    if ($(val).is(":hidden")) {
                        $(val).fadeIn();
                        button.find("span").text("Скрыть");
                        button.find(".catalog__item-title").text("Скрыть 100500 товаров");
                    } else {
                        $(val).fadeOut();
                        button.find("span").text("показать все");
                        button.find(".catalog__item-title").text("Показать все 100500 товаров");
                    }
                }
            });
        });
    }
});

$(document).ready(function () {
    // Клон элементов в мобильное меню

    $.each($(".js-mobile-menu > li"), function (index, val) {
        let clone = $(val).clone();
        $("#menu > ul").append(clone);
    });
    // Активация мобильного меню

    $("#menu").mmenu({
        extensions: ["pagedim-black", "position-top"],
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