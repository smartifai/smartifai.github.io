$(function () {

    let nav__toggle = $('#nav__toggle'),
        burger__item = $('.burger'),
        nav = $('#js__nav'),
        hidden__poster = $('#hidden__poster'),
        poster__first = $('#poster__first'),
        close_x = $('#close__x');

    /*show navigation bar on mobile and tablet devices */
    $(nav__toggle).on('click', function (event) {

        event.preventDefault();
        nav.toggleClass('show', 200);
        burger__item.toggleClass('active');

        $(nav).on('scroll touchmove mousewheel', function (e) {
            e.preventDefault();
            e.stopPropagation();
            return false;
        });

    });

    /* show poster 1.3s */
    setTimeout(function () {
        $(hidden__poster).fadeIn(1000).css('display', 'flex');
        $(poster__first).fadeIn(1300);
    }, 1100);

    /* close poster */
    $(close_x).on('click touch', function (event) {
        $(hidden__poster).fadeIn(1000).css('display', 'none');
        event.preventDefault();
        event.stopPropagation();
    });

});