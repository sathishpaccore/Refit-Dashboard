$.noConflict();

jQuery(document).ready(function($) {

    "use strict";

    [].slice.call(document.querySelectorAll('select.cs-select')).forEach(function(el) {
        new SelectFx(el);
    });

    $('.equal-height').matchHeight({
        property: 'max-height'
    });

    $('.count').each(function() {
        $(this).prop('Counter', 0).animate({
            Counter: $(this).text()
        }, {
            duration: 3000,
            easing: 'swing',
            step: function(now) {
                $(this).text(Math.ceil(now));
            }
        });
    });


    // var acc = document.getElementsByClassName("accordion");
    // var i;

    // for (i = 0; i < acc.length; i++) {
    // $('.accordion').each(function() {

    //     this.addEventListener("click", function() {
    //         /* Toggle between adding and removing the "active" class,
    //         to highlight the button that controls the panel */
    //         this.classList.toggle("active");

    //         /* Toggle between hiding and showing the active panel */
    //         var panel = this.nextElementSibling;
    //         if (panel.style.display === "block") {
    //             panel.style.display = "none";
    //         } else {
    //             panel.style.display = "block";
    //         }
    //     });
    // });
    // }

    $('#menuToggle').on('click', function(event) {
        var windowWidth = $(window).width();
        if (windowWidth < 1010) {
            $('body').removeClass('open');
            if (windowWidth < 760) {
                $('#left-panel').slideToggle();
            } else {
                $('#left-panel').toggleClass('open-menu');
            }
        } else {
            $('body').toggleClass('open');
            $('#left-panel').removeClass('open-menu');
        }

    });


    $(".menu-item-has-children.dropdown").each(function() {
        $(this).on('click', function() {
            var $temp_text = $(this).children('.dropdown-toggle').html();
            $(this).children('.sub-menu').prepend('<li class="subtitle">' + $temp_text + '</li>');
        });
    });

    $(window).on("load resize", function(event) {
        var windowWidth = $(window).width();
        if (windowWidth < 1010) {
            $('body').addClass('small-device');
        } else {
            $('body').removeClass('small-device');
        }

    });

    $(document).ready(function() {
        $('[data-toggle="tooltip"]').tooltip();
    });

});