$(document).ready(function () {
    // get current URL path and assign 'active' class
    var pathname = window.location.pathname;
    console.log(pathname);

    $('nav > ul > li> a[href="' + pathname + '"]').parent().addClass('active_nav');
    //$("#\\/").addClass('active_nav');

    $("div[data-includeHTML]").each(function () {
        $(this).load($(this).attr("data-includeHTML"));
    });

    squareboxes();
});

function squareboxes() {

    //squarebox

    $('.squarebox').each(function (index) {

        // for at sikre at alle elementer med classen .squarebox benyttes 'this'.
        // 'this' betyder at det er det nuvÃ¦rende element i loopet det bliver hentet width pÃ¥.

        var cwWidth = $(this).width();

        $(this).css({

            'height': cwWidth + 'px'

        });
    });

    $('.squarebox-halfheight').each(function (index) {

        // for at sikre at alle elementer med classen .squarebox benyttes 'this'.
        // 'this' betyder at det er det nuvÃ¦rende element i loopet det bliver hentet width pÃ¥.

        var cwWidth = $(this).width();
        var cwWidthHalf = cwWidth / 2;

        $(this).css({

            'height': cwWidth + 'px'

        });
    });
}