// 텍스트 삽입
$.get('./img/sub/sub_text/txt1.txt', function (data) {
  $('.bookSub .text').prepend(data);
})

$.get('./img/sub/sub_text/txt2.txt', function (data) {
  $('.publisher .text').prepend(data);
})

$.get('./img/sub/sub_text/txt3.txt', function (data) {
  $('.author .text').prepend(data);
})

$.get('./img/sub/sub_text/txt4.txt', function (data) {
  $('.index .text').prepend(data);
})




// 텍스트 접어두기/펼치기
$('.info').find('.more').click(function(){
  $(this).siblings('p').removeClass('folded');
  $(this).siblings('.close').css("display","flex");

  $(this).hide()
});

$('.info').find('.close').click(function(){
  $(this).siblings('p').addClass('folded')
  $(this).siblings('.more').css("display","flex");
  $(this).hide()
});


// 책 소개 커버화면
$('#bookCover').click(function(){
  $('.turn_img').toggleClass('rotate')
})

$('.alert').click(function(){
  $('.reviewalert').toggle()
})




// 구매자 표시 기준 접기, 펼치기
$('.qna').click(function(){
  $('.buyerinfo').slideToggle('slow', function(){
    if ($('.buyerinfo').css("display")=='block'){
    $('.qna span').html('<i class="fa-solid fa-angles-up"></i>')
  } else {
    $('.qna span').html('<i class="fa-solid fa-angles-down"></i>')
  }
  });  
})


// $('.starRate').click(function(){
//   confirm('로그인 상태에서 가능합니다. 로그인 페이지로 이동합니다.')
// })


$('.starRate label').hover(function(){
  let i = $(this).index()
  console.log(i)
  $('.starRatebox').css('display','block')
  
}, function(){
  $('.starRatebox').hide()
})