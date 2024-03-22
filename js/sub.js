// 텍스트 삽입
$.get('../img/sub/sub_text/txt1.txt', function (data) {
  $('.bookSub .text').prepend(data);
})

$.get('../img/sub/sub_text/txt2.txt', function (data) {
  $('.publisher .text').prepend(data);
})

$.get('../img/sub/sub_text/txt3.txt', function (data) {
  $('.author .text').prepend(data);
})

$.get('../img/sub/sub_text/txt4.txt', function (data) {
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

