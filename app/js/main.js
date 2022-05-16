$(function () {

    $('.header__map').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
        arrows: false,
        asNavFor: '.header__slider',
        asNavFor: '.slider-dots',
    });

    $('.header__slider').slick({
        infinite: true,
        // autoplay: true,
        // autoplaySpeed: 4000,
        fade: true,
        prevArrow: '<img class="slider-arrows slider-arrows__left" src="img/header/arrows-left.svg" alt=""></img>',
        nextArrow: '<img class="slider-arrows slider-arrows__right" src="img/header/arrows-right.svg" alt=""></img>',
        asNavFor: '.slider-dots',
        asNavFor: '.header__map',
    });

    $('.slider-dots').slick({
        slidesToShow: 4,
        slidesToScroll: 4,
        asNavFor: '.header__slider',
        asNavFor: '.header__map',
    });

    $('.slider-map').slick({
        slidesToShow: 8,
        slidesToScroll: 1,
        arrows: false,
        asNavFor: '.surf-slider',
        focusOnSelect: true,
    });

    $('.surf-slider').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        prevArrow: '<img class="slider-arrows slider-arrows__left" src="img/header/arrows-left.svg" alt=""></img>',
        nextArrow: '<img class="slider-arrows slider-arrows__right" src="img/header/arrows-right.svg" alt=""></img>',
        asNavFor: '.slider-map',
        responsive: [{
            breakpoint: 1200,
            settings: {
                slidesToShow: 3,
            }
        },
        {
            breakpoint: 575,
            settings: {
                slidesToShow: 2,
            }
        },
        {
            breakpoint: 450,
            settings: {
                slidesToShow: 1,
                centerMode: true,
            }
        }
    ]
    });

    $('.holder__slider').slick({
        infinite: true,
        fade: true,
        prevArrow: '<img class="slider-arrows slider-arrows__left" src="img/header/arrows-left.svg" alt=""></img>',
        nextArrow: '<img class="slider-arrows slider-arrows__right" src="img/header/arrows-right.svg" alt=""></img>',
    });

    $('.shop__slider').slick({
        infinite: true,
        fade: true,
        prevArrow: '<img class="slider-arrows slider-arrows__left" src="img/header/arrows-left.svg" alt=""></img>',
        nextArrow: '<img class="slider-arrows slider-arrows__right" src="img/header/arrows-right.svg" alt=""></img>',
    });

    // SUMM

    $('<div class="quantity-nav"><div class="quantity-button quantity-up"><img src="img/holder/icons/plus.svg" alt="plus"></div><div class="quantity-button quantity-down"><img src="img/holder/icons/minus.svg" alt="minus"></div></div>').insertAfter('.quantity input');
    $('.quantity').each(function() {
      var spinner = $(this),
        input = spinner.find('input[type="number"]'),
        btnUp = spinner.find('.quantity-up'),
        btnDown = spinner.find('.quantity-down'),
        min = input.attr('min'),
        max = input.attr('max');

      btnUp.click(function() {
        var oldValue = parseFloat(input.val());
        if (oldValue >= max) {
          var newVal = oldValue;
        } else {
          var newVal = oldValue + 1;
        }
        spinner.find("input").val(newVal);
        spinner.find("input").trigger("change");
      });

      btnDown.click(function() {
        var oldValue = parseFloat(input.val());
        if (oldValue <= min) {
          var newVal = oldValue;
        } else {
          var newVal = oldValue - 1;
        }
        spinner.find("input").val(newVal);
        spinner.find("input").trigger("change");
      });

    });


    $('.quantity-button').on('click', function(){
        let summ = $('.nights').val() * $('.summ').data('nights') + ($('.guests').val() -1) * $('.summ').data('guests');
        $('.summ').html('$' + summ);
    });

    let summ = $('.nights').val() * $('.summ').data('nights') + ($('.guests').val() -1) * $('.summ').data('guests');
    $('.summ').html('$' + summ);


    // CIRCLE

    $('.surfboard-box__cicle').on('click', function(){
        $(this).toggleClass('active')
    });


    // MENU

    $('.menu-btn').on('click', function(){
        $('.menu').toggleClass('active');
        $('.header__aside').toggleClass('active');
        $('.header__search').toggleClass('active');
        $('.header__date').toggleClass('active');
        $('.header__location').toggleClass('active');
        $('.logo').toggleClass('active');
    });


    new WOW().init();

});