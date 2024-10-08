(function ($) {
    "use strict";

    $(window).on('load', function(){
        //===== Prealoder
        $("#preloader").delay(400).fadeOut();
        
        $('.fixed_col').isotope({
        // options
            itemSelector: '.review_col',
        });
    });

    $(document).ready(function () {
        //05. sticky header
        function sticky_header(){
            var wind = $(window);
            var sticky = $('header');
            wind.on('scroll', function () {
                var scroll = wind.scrollTop();
                if (scroll < 100) {
                    sticky.removeClass('sticky');
                } else {
                    sticky.addClass('sticky');
                }
            });
        }
        sticky_header();
        //===== Back to top

        // Show or hide the sticky footer button
        $(window).on('scroll', function () {
            if ($(this).scrollTop() > 600) {
                $('.back-to-top').fadeIn(200)
            } else {
                $('.back-to-top').fadeOut(200)
            }
        });

        //Animate the scroll to yop
        $('.back-to-top').on('click', function (event) {
            event.preventDefault();

            $('html, body').animate({
                scrollTop: 0,
            }, 900);
        });        


        // boucher toggle
        $('.buy_fixed_btn, .overlay').on('click', function (event) {
            event.preventDefault();

            $('.voucher_wrap, .overlay').toggleClass('open');
        });

        // Hamburger-menu
        $('.hamburger-menu').on('click', function () {
            $('.hamburger-menu .line-top, .mobile_menu').toggleClass('current');
            $('.hamburger-menu .line-center').toggleClass('current');
            $('.hamburger-menu .line-bottom').toggleClass('current');
        });


        $(".faq_item").on("click", function() {
            if ($(this).hasClass("active")) {
              $(this).removeClass("active");
            } else {
              $(".faq_item").removeClass("active");
              $(this).addClass("active");
            }
        });

        //Slider Initialize
        $('.owl-carousel.slider1').owlCarousel({
            loop: true,
            margin: 30,
            nav: true,
            dots: false,
            navText: [
                '<img src="img/arrow_left.svg" alt="">',
                '<img src="img/arrow_right.svg" alt="">'
            ],
            responsive: {
                0: {
                    items: 1,
                    nav: false,
                    dots: true,
                },
                576:{
                    items: 2
                },
                768: {
                    items: 2
                },
                992: {
                    items: 4,
                    margin: 30,
                },
                1200: {
                    items: 4,
                    margin: 40,
                }
            }
        });
        //Slider Initialize
        $('.owl-carousel.slider2').owlCarousel({
            loop: true,
            margin: 30,
            nav: true,
            dots: false,
            navText: [
                '<img src="img/arrow_left.svg" alt="">',
                '<img src="img/arrow_right.svg" alt="">'
            ],
            responsive: {
                0: {
                    items: 3,
                    nav: false,
                    dots: true,
                },
                576:{
                    items: 4
                },
                768: {
                    items: 4
                },
                992: {
                    items: 8,
                    margin: 30,
                },
                1200: {
                    items: 8,
                    margin: 40,
                }
            }
        });

        $('.owl-carousel.slider3').owlCarousel({
            loop: true,
            margin: 0,
            nav: true,
            dots: false,
            items: 1,
            navText: [
                '<img src="img/arrow_left2.svg" alt="">',
                '<img src="img/arrow_right2.svg" alt="">'
            ],
        });
        $('.owl-carousel.slider4').owlCarousel({
            loop: true,
            margin: 0,
            nav: true,
            dots: false,
            items: 1,
            navText: [
                '<img src="img/arrow_left2.svg" alt="">',
                '<img src="img/arrow_right2.svg" alt="">'
            ],
        });

        // nice select
        $('select').niceSelect();

        // nice number
        $('.number').niceNumber();


        // range active
        var $range = $(".js-range-slider"),
        $inputFrom = $(".js-input-from"),
        $inputTo = $(".js-input-to"),
        instance,
        min = 0,
        max = 100,
        from = 0,
        to = 0;

        $range.ionRangeSlider({
            skin: "round",
            type: "double",
            min: min,
            max: max,
            from: 10,
            to: 50,
            onStart: updateInputs,
            onChange: updateInputs
        });
        instance = $range.data("ionRangeSlider");

        function updateInputs (data) {
            from = data.from;
            to = data.to;
            
            $inputFrom.prop("value", from);
            $inputTo.prop("value", to); 
        }

        $inputFrom.on("input", function () {
            var val = $(this).prop("value");
            
            // validate
            if (val < min) {
                val = min;
            } else if (val > to) {
                val = to;
            }
            
            instance.update({
                from: val
            });
        });

        $inputTo.on("input", function () {
            var val = $(this).prop("value");
            
            // validate
            if (val < from) {
                val = from;
            } else if (val > max) {
                val = max;
            }
            
            instance.update({
                to: val
            });
        });


        // telephone
        $("#phn").intlTelInput({
            initialCountry: "my",
            separateDialCode: true,
        });

    });

})(jQuery);