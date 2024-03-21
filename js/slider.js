$('.slide li').eq(0).find('.num').show();

// 자동 슬라이드
function slide() {
  let lis = $('.slide li')

  $(lis).eq(0).find('.num').fadeOut()

  $(lis).eq(0).stop().animate({ flexGrow: 0, flexBasis: 0 }, 800)
  $(lis).eq(1).stop().animate({ flexGrow: 1, flexBasis: 1051 }, 800, function () {
    $(this).find('.num').fadeIn();
    $('.slide li:first').appendTo('.slide');
    $('.slide li:last').stop().animate({ flexGrow: 0, flexBasis: 50 }, 400, function () {
      $(this).find('.num').hide();
    });
  })
}

let autoslide = setInterval(slide, 5000)


// 버튼 누르면 슬라이드 이전, 이후
$('.slideWrap .btn .prev').click(function () {
  clearInterval(autoslide)
  let lis = $('.slide li')
  $(lis).eq(0).find('.num').fadeOut();

  $(lis).eq(0).stop().animate({ flexGrow: 0, flexBasis: 50 }, 800, function () {
  })
  $(lis).eq(-1).stop().animate({ flexGrow: 1, flexBasis: 1051 }, 800, function () {
    $(this).find('.num').fadeIn();
  })
  $('.slide li:last').prependTo('.slide');
  autoslide = setInterval(slide, 5000)
})

$('.slideWrap .btn .next').click(function () {
  clearInterval(autoslide)
  slide()
  autoslide = setInterval(slide, 5000)
})

