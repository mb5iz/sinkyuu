//読み込みを早くする//
<script src="main.js" defer></script>

$(function () {
    $(".inview").on("inview", function (event, isInView) {
        if (isInView) {
            $(this).stop().addClass("is-show");
        }
    });
});