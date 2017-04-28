/**
 * Created by Gaby on 4/28/2017.
 */
$(document).ready(function () {
    /*以下代码用于设置feeback.html的模态框*/
    $('#view-feedback').on('show.bs.modal', function (event) {});
    $('#reply-feedback').on('show.bs.modal', function (event) {
        var $button = $(event.relatedTarget);
        var $modal = $(this);
        var name = $button.parent().siblings(".name").text();
        var title = $button.parent().siblings(".title").text();

        $modal.find("#user-name").text("@" + name).end()
            .find("#feed-title").text(title);
    });

    $(".reply").click(function () {
        $(this).html("已答复<span class='glyphicon glyphicon-ok'></span>");

    });

    /*以下代码设置表格的斑马纹*/
    $("tr:odd").css("background-color","rgba(221, 221, 221, 0.17)");

    /*以下代码用于下拉框选择后及时更改当前显示项的*/
    $(".whether-public").click(function () {
        var choice = $(this).text();
        $(this).closest(".dropdown-menu")
            .prev()
            .html(choice + '<span class="caret"></span>');
    });
})