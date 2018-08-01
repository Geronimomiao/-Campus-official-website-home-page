new WOW().init();
$('body').scrollspy({ target: '#tjpu' });
// // $('#bg h2').addClass('animated bounceInRight');
// // $('#bg .row a').addClass('animated fadeInUp');
// $('#history .top h2').addClass('animated bounceInRight');
$('.scenery').filterizr();
// $('#wsm').trigger('click');
var swiper = new Swiper('.swiper-container', {
    slidesPerView: 3,
    spaceBetween: 30,
    slidesPerGroup: 3,
    loop: true,
    loopFillGroupWithBlank: true,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
});