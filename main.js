//読み込みを早くする//
<script src="main.js" defer></script>

$(function () {
    $(".inview").on("inview", function (event, isInView) {
        if (isInView) {
            $(this).stop().addClass("is-show");
        }
    });
});

const hamburger = document.getElementById('js-hamburger');
const nav = document.querySelector('.gnav');
const body = document.body;

if (hamburger) {
    hamburger.addEventListener('click', function () {
        // メニューの開閉クラスを切り替え
        nav.classList.toggle('is-active');

        // 背景スクロール固定の切り替え
        if (nav.classList.contains('is-active')) {
            body.style.overflow = 'hidden';
        } else {
            body.style.overflow = '';
        }
    });
}

// メニュー内のリンクをクリックしたらメニューを閉じてスクロール固定を解除
const navLinks = document.querySelectorAll('.gnav__item a');
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        nav.classList.remove('is-active');
        body.style.overflow = '';
    });
});