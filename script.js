/* PRODUCT SLIDER */

var productSlider = $('.cards');

productSlider.owlCarousel({
  loop: true,
  margin: 10,
  nav: false,
  dots: false,
  responsive: {
    0: { items: 1 },
    600: { items: 2 },
    1000: { items: 4 }
  }
});
$('.next').click(function () {
  productSlider.trigger('next.owl.carousel');
});

$('.prev').click(function () {
  productSlider.trigger('prev.owl.carousel');
});

$(document).on('click', '.explore', function (e) {

  e.stopPropagation();

  $('.card').removeClass('active');

  $(this).closest('.card').addClass('active');

});


/* CUSTOMER LOGO SLIDER */

$('.customer-slider').owlCarousel({
  loop: true,
  margin: 20,
  nav: false,
  dots: false,
  autoplay: true,
  autoplayTimeout: 2000,
  responsive: {
    0: { 
      items: 2 
    },
    600: {
       items: 4 
      },
    1000: { 
      items: 8 
    }
  }
});

// news


$(document).ready(function(){

var newsSlider = $('.news-slider');

newsSlider.owlCarousel({
loop:true,
margin:20,
nav:false,
dots:false,
responsive:{
0:{items:1},
600:{items:2},
1000:{items:4}
}
});

$('.news-next').click(function(){
newsSlider.trigger('next.owl.carousel');
});

$('.news-prev').click(function(){
newsSlider.trigger('prev.owl.carousel');
});

});