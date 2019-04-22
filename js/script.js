$(document).ready(function () {

    $('.details_menu').on('click', 'a', function (e) {
        e.preventDefault();

        $('.menu__item').removeClass('item_active');
        $(this).addClass('item_active');

        var tabId = $(this).data('tab');
        $('.details_tabs').removeClass('details_active').css('opacity', 0).filter(":first").css('opacity', 1);
        $('#' + tabId).addClass('details_active').animate({'opacity': 0}, 200).filter(this.hash).animate({'opacity': 1}, 350);
    });

    $("a.scrollto").click(function () {
        elementClick = $(this).attr("href");
        destination = $(elementClick).offset().top;
        $('html:not(:animated),body:not(:animated)').animate({scrollTop: destination}, 1300);
        return false;
    });
    var h_hght = 60;
    var h_mrg = 30;
    $(function () {
        var elem = $('#nav_bar');
        var top = $(this).scrollTop();
        if (top > h_hght) {
            elem.css('top', h_mrg);
        }
        $(window).scroll(function () {
            top = $(this).scrollTop();
            if (top + h_mrg < h_hght) {
                elem.css('top', (h_hght - top));
            } else {
                elem.css('top', h_mrg);
            }
        });
    });

    $('.show-modal').click(function () {
        $('.modal-overlay').addClass('active').fadeIn(600, function () {
            $('.modal-body').css('display', 'block').animate({opacity: 1, top: '50%'}, 200);
            var top = $(document).scrollTop();
            $('.modal-overlay').css('top', top);
            $('body').addClass('no-scroll');
        });
    });
    $('.modal_btn').click(function () {
        $('.modal-body').animate({opacity: 0, top: '45%'}, 200,
            function () {
                $(this).css('display', 'none');
                $('.modal-overlay').fadeOut(800);
                $('.modal-overlay').removeClass('active');
                $('body').removeClass('no-scroll');
            }
        );
    });
});
