// 자동 슬라이드
function slide() {
  let lis = $('.slide li')

  $(lis).eq(0).stop().animate({ flexGrow: 0, flexBasis: 0 }, 800)
  $(lis).eq(1).stop().animate({ flexGrow: 1, flexBasis: 1051 }, 800 ,function () {
    $('.slide li:first').appendTo('.slide');
    $('.slide li:last').stop().animate({ flexGrow: 0, flexBasis: 50},400);
  })
}

// setInterval(slide, 5000)


// 버튼 누르면 슬라이드 이전, 이후
$('.slideWrap .btn .prev').click(function(){
  let lis = $('.slide li')

  $(lis).eq(0).stop().animate({ flexGrow: 0, flexBasis: 50 }, 800)
  $(lis).eq(-1).stop().animate({ flexGrow: 1, flexBasis: 1051 }, 800)
  $('.slide li:last').prependTo('.slide');
})

$('.slideWrap .btn .next').click(function(){
  slide()
})

