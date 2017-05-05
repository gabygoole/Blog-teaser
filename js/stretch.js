/**
 * Created by Gaby on 3/15/2017.
 */
$(document).ready(function () {
    $('.g-navbar').click(function () {
        $('header div.menu').toggleClass('shownav');
    });

/*这里要增加*/
    $(".collection").click(function () {
       $(this).find("span").toggleClass("collect");
       return false;
    });
});

