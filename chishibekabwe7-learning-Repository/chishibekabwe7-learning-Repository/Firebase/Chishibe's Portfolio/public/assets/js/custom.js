/* 
* Template Name    : Treelink, the best "link in bio" responsive template.
* Author           : Jorge Perez
* Version          : 2.0.0
* Updated          : June 2023
* File Description : Main JavaScript file ----------------------------------- */

! function($) {
    "use strict";

    class Treelink {
        constructor() { }
        //PreLoader
        initPreLoader() {
            $('#status').fadeOut();
            $('#preloader').delay(350).fadeOut('slow');
            $('body').delay(350).css({
                'overflow': 'visible'
            });
        }
        //scroll
        initStickyMenu() {
            var navbar = document.querySelector('nav');
            window.onscroll = function () {
                // pageYOffset or scrollY
                if (window.pageYOffset > 30) {
                    navbar.classList.add('stickyadd');
                } else {
                    navbar.classList.remove('stickyadd');
                }
            };
        }
        //Scrollspy
        initScrollspy() {
            var scrollSpy = new bootstrap.ScrollSpy(document.body, {
                target: '#main_nav',
                offset: 70
            });
        }
        // BACK TO TOP
        initBackToTop() {
            $(window).on('scroll', function () {
                if ($(this).scrollTop() > 100) {
                    $('.back_top').fadeIn();
                } else {
                    $('.back_top').fadeOut();
                }
            });
            $('.back_top').click(function () {
                $("html, body").animate({ scrollTop: 0 }, 1000);
                return false;
            });
        }
        init() {
            this.initPreLoader();
            this.initStickyMenu();
            this.initScrollspy();
            this.initBackToTop();
        }
        
    }
    //init
    $.Treelink = new Treelink, $.Treelink.Constructor = Treelink
}(window.jQuery),

//initializing
function($) {
    "use strict";
    $.Treelink.init();
}(window.jQuery);