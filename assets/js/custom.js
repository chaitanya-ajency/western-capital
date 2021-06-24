
  
        $(document).ready(function() {
            $(window).scroll(function() {
                var scroll = $(window).scrollTop();
                if (scroll > 50) {
                    $(".navbar").addClass('scrolled-down').addClass('header-shadow').removeClass('scrolled-top');

                };
                if (scroll < 50) {
                    $(".navbar").addClass('scrolled-top').removeClass('scrolled-down');

                }
            })
        });
   

  
        $('.multiple-items').slick({
            infinite: true,
            slidesToShow: 5,
            slidesToScroll: 5,
            dots: true,
            autoplay: true,
            autoplaySpeed: 2000,
            responsive: [{
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            }, {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            }, {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }]
        });
   
  
        $('.testimonial-slide').slick({
            infinite: true,
            slidesToShow: 3,
            slidesToScroll: 3,
            dots: true,
            autoplay: true,
            autoplaySpeed: 2000,
            responsive: [{
                breakpoint: 1200,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                }
            }, {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }]
        });
   
  
        $('.meet-team').slick({
            slidesToShow: 4,
            slidesToScroll: 4,
            dots: true,
            autoplay: false,
            autoplaySpeed: 2000,
            responsive: [{
                breakpoint: 1200,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                }
            }, {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }]
        });
   
  
        AOS.init();
   
  
        jQuery(document).ready(function($) {
            $('.counter').counterUp({
                delay: 5,
                time: 1000
            });
        });
   
   
  
        // $(document).ready(function() {
        //     $(".dropdown-toggle").mouseover(function() {
        //         $(".dropdown-menu").show();
        //     });
        //     $(".dropdown-toggle").mouseout(function() {
        //         $(".dropdown-menu").hide();
        //     });
        // });
        // $(".dropdown-toggle").mouseover(function() {
        //     $('.dropdown-menu').show();
        //     console.log('show')
        // });

        // $(document).mouseout(function(e) {
        //     if ($(e.target).closest(".dropdown-menu").length === 0) {
        //         $(".dropdown-menu").hide();
        //         console.log('hide')
        //     }
        // });
   
  
        $(document).ready(function() {


            $(".dropdown-toggle").mouseenter(function() {
                $('.dropdown-menu').addClass("show-dropdown");
            });
            $(".dropdown-menu").mouseleave(function(e) {
                var value = $(".dropdown-menu").length;
                if ($(e.target).closest(".dropdown-menu").length === 1) {
                    $('.dropdown-menu').removeClass("show-dropdown");

                }
            });
        });
   
  
        $(document).ready(function() {
            $(".navbar-toggler").click(function() {
                $('.navbar').toggleClass("bg-white");
                $('.scrolltop').toggleClass("d-none");
                $('.scrolldown').toggleClass("d-block");
                $('.fa-bars').toggleClass("text-dark");
            });
        });
   
  
        $(document).ready(function() {
            $(function() {
                $("#header").load("header.html");
                $("#footer").load("footer.html");
            });
        });
   