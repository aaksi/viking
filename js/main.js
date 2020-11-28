$(function(){
    $('.menu__btn').on('click',function () {
        $('.menu__list').toggleClass('menu__list-active')
    });
    
    
    
    $('[data-fancybox]').fancybox({
        youtube : {
            // controls : 0,
            // showinfo : 0
        },
    });
    
    
    
    $('.heroes__slider-img').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        asNavFor: '.heroes__slider-text',
        prevArrow:   '<button type="button" class="slick-btn  slick-prev"><img src="img/icon/arrow-left.png" alt="prev"></button>',
        nextArrow:   '<button type="button" class="slick-btn  slick-next"><img src="img/icon/arrow-right.svg" alt="next"></button>',
        responsive: [
            {
              breakpoint: 769,
              settings: {
                arrows:false,
                autoplay:true
              }
            }
            ]
      });

      $('.heroes__slider-text').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        asNavFor: '.heroes__slider-img',
        fade: true,
        arrows:false
    });
           
});
