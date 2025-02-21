$('.js-categories-slider').slick({
    infinite: true,
    slidesToShow: 6,
    slidesToScroll: 6,
    arrows: true,
    responsive: [
        {
            breakpoint: 1680,
            settings: {
                slidesToShow: 5,
                slidesToScroll: 5,
            }
        },
        {
            breakpoint: 1400,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 4,
            }
        }
    ]
});

$('.js-people-slider').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
});

const btnYell = document.querySelector('.js-btn-yell');
const btnTrans = document.querySelector('.js-btn-trans');

btnYell.addEventListener('mouseenter', () => {
    if (!btnTrans.classList.contains('active')) {
        btnTrans.classList.add('active');
    }
});

btnYell.addEventListener('mouseleave', () => {
    if (btnTrans.classList.contains('active')) {
        btnTrans.classList.remove('active');
    }
});

btnTrans.addEventListener('mouseenter', () => {
    if (!btnYell.classList.contains('active')) {
        btnYell.classList.add('active');
    }
});

btnTrans.addEventListener('mouseleave', () => {
    if (btnYell.classList.contains('active')) {
        btnYell.classList.remove('active');
    }
});



