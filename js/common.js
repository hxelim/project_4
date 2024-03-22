// 스크롤탑 버튼 
$(window).scroll(function(){
  if ($(this).scrollTop()>50){
    $("#topBtn").fadeIn();
  } else {
    $('#topBtn').fadeOut();
  }
})

$('#topBtn').click(function(){
  $('html, body').animate({scrollTop : 0}, 400)
  return false;
})