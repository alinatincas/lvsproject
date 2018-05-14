$(document).ready(function () {
    //Below code is used on the search result list, to change active link
    $('.list-group a').click(function (e) {
        e.preventDefault()
        $('.list-group').find('a').removeClass('active').addClass('text-dark');
        $(this).removeClass('text-dark').addClass('active');
        $("#Centertxt").html('Test');
        $.ajax({
            url: "~/Shelter", success: function (result) {
                $("#Centertxt").html(result);
            }
        });
    });
    $()
    $("#search-icon").click(function (e) {
        if ($("#searchbar").hasClass("show")) {
            $("#searchbar").removeClass("show");
        } else {
            $("#searchbar").addClass("show");
        }
    });

    // squareboxes();
});

// function squareboxes() {

//     //squarebox

//     $('.squarebox').each(function (index) {

//         // for at sikre at alle elementer med classen .squarebox benyttes 'this'.
//         // 'this' betyder at det er det nuvÃ¦rende element i loopet det bliver hentet width pÃ¥.

//         var cwWidth = $(this).width();

//         $(this).css({

//             'height': cwWidth + 'px'

//         });
//     });

//     $('.squarebox-halfheight').each(function (index) {

//         // for at sikre at alle elementer med classen .squarebox benyttes 'this'.
//         // 'this' betyder at det er det nuvÃ¦rende element i loopet det bliver hentet width pÃ¥.

//         var cwWidth = $(this).width();
//         var cwWidthHalf = cwWidth / 2;

//         $(this).css({

//             'height': cwWidthHalf + 'px'

//         });
//     });
// }