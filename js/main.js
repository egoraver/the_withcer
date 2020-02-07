var mySwiper = new Swiper('.swiper-container', {
    slidesPerView:1,
    loop:true,
    navigation: {
        nextEl: '.arrow',
},
breakpoints: {
    // when window width is >= 320px
    540: {
      slidesPerView: 2
    }
}

});

var menuButton = document.querySelector('.menu-button');
var menu = document.querySelector('.header');
menuButton.addEventListener('click',function (){
    menuButton.classList.toggle('menu-button-active');
    console.log('клик');
    menu.classList.toggle('header-active');
})