$(document).ready(function(){
    $('.carousel__inner').slick({
        speed: 300,
        prevArrow: '<button type="button" class="slick-prev"><img src="../icons/arrow-left.png"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="../icons/arrow-right.png"></button>',
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    dots: true,
                    arrows: false,
                }
            }
        ]
    });

    $('ul.catalog__tabs').on('click', 'li:not(.catalog__tab_active)', function() {
        $(this)
            .addClass('catalog__tab_active').siblings().removeClass('catalog__tab_active')
            .closest('div.container').find('div.catalog__content').removeClass('catalog__content_active').eq($(this).index()).addClass('catalog__content_active');
    });

    function toggleSlide (item) {
        $(item).each(function(i) {
            $(this).on('click', function(e) {
                e.preventDefault();
                $('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active');
                $('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active');
            });
        });
    };

    toggleSlide('.catalog-item__link');
    toggleSlide('.catalog-item__back');
});

// const slider = tns({
//     container: '.carousel__inner',
//     items: 1,
//     slideBy: 'page',
//     controls: false,
// });

// document.querySelector('.prev').addEventListener('click', function () {
//     slider.goTo('prev');
// });
// document.querySelector('.next').addEventListener('click', function () {
//     slider.goTo('next');
// });





// Если подключить для планшетов и мобилок dots, как сделать, чтобы они добавлялись при добавлении картинок?
// И как сделать, чтобы они отмечались соответственно перелистываемому слайду?
// В принципе, в Slick Это делается очень просто. Но я оставил в Tini slider.
// Ештш мне нравится больше, потому, что без дополнительных библиотек jquery.
// кроме того, это учебный вариант, и тут можно попробовать 2 типа.Табы пусть уж на JQuery, а карусель на tini slider.
// В идеале же, сделать всё на чистом JS, без всех этих "костыльных" библиотек
// Кроме того, точки не обязательны.
// p.s. стилизация точек на заработалаю Зараза. Ошибку не нашёл
// Как простой вариант, сделаю для планетов и мобилок авто-перелистывание. Высота не меняется, и страница ниде слайдера прыгать не танет. Норм.
// .tns-nav {
//     button {
//         background-color: mainColor;
//     }
//     .tns-nav-active {
//         background-color: #fff;
//         &:hover {
//             box-shadow: 1px 1px 5px $mainColor;
//             border: none;
//         }
//     }
// }