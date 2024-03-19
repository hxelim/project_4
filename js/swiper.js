// best
var swiper1 = new Swiper(".best .mySwiper", {
  slidesPerView: 3,
  spaceBetween: 30,

  navigation: {
    nextEl: ".best .swiper-button-next",
    prevEl: ".best .swiper-button-prev",
  },
  on: {
    init: function () {
      $('.best .btn .prev').hide();
    },
    slideChange: function(){
      let idx = this.activeIndex;
      if (idx != 0){
        $('.best .btn .prev').fadeIn();        
      }
      if(idx == 3){
        $('.best .btn .next').hide();
      }
      if(idx == 0){
        $('.best .btn .prev').hide();
      }  
    if(idx != 3){
      $('.best .btn .next').fadeIn();
    }
  }, 
} 
});


// new boxR
var swiper2 = new Swiper(".new .boxR.mySwiper", {
  slidesPerView: 3,
  spaceBetween: 10,
  loop : true,
  loopAdditionalSlides : 1,
  allowTouchMove : false,

  navigation: {
    nextEl: ".new .swiper-button-next",
    prevEl: ".new .swiper-button-prev",
  },
  on: {
    init: function () {
      $('.new .btn .prev').hide();
    },
    slideChange: function(){
      let idx = this.activeIndex;
      if (idx != 0){
        $('.new .btn .prev').fadeIn();        
      }
      // if(idx == 3){
      //   $('.new .btn .next').hide();
      // }
      // if(idx == 0){
      //   $('.new .btn .prev').hide();
      // }  
    if(idx != 3){
      $('.new .btn .next').fadeIn();
    }
  }, 
} 
});


// academy
var swiper3 = new Swiper(".academy .mySwiper", {
  slidesPerView: 5,
  spaceBetween: 30,

  navigation: {
    nextEl: ".academy .swiper-button-next",
    prevEl: ".academy .swiper-button-prev",
  },
  on: {
    init: function () {
      $('.academy .btn .prev').hide();
    },
    slideChange: function(){
      let idx = this.activeIndex;
      if (idx != 0){
        $('.academy .btn .prev').fadeIn();        
      }
      if(idx == 5){
        $('.academy .btn .next').hide();
      }
      if(idx == 0){
        $('.academy .btn .prev').hide();
      }  
    if(idx != 5){
      $('.academy .btn .next').fadeIn();
    }
  }, 
} 
});


// hit
var swiper4 = new Swiper(".hit .mySwiper", {
  slidesPerView: 3,
  spaceBetween: 30,

  navigation: {
    nextEl: ".hit .swiper-button-next",
    prevEl: ".hit .swiper-button-prev",
  },
});


