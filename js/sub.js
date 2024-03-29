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
$('.info').find('.more').click(function () {
  $(this).siblings('p').removeClass('folded');
  $(this).siblings('.close').css("display", "flex");

  $(this).hide()
});

$('.info').find('.close').click(function () {
  $(this).siblings('p').addClass('folded')
  $(this).siblings('.more').css("display", "flex");
  $(this).hide()
});


// 책 소개 커버화면
$('#bookCover').click(function () {
  $('.turn_img').toggleClass('rotate')
})





// 리뷰 작성 유의사항
$('.alert').click(function () {
  $('.reviewalert').toggle()
})




// 구매자 표시 기준 접기, 펼치기
$('.qna').click(function () {
  $('.buyerinfo').slideToggle('slow', function () {
    if ($('.buyerinfo').css("display") == 'block') {
      $('.qna span').html('<i class="fa-solid fa-angles-up"></i>')
    } else {
      $('.qna span').html('<i class="fa-solid fa-angles-down"></i>')
    }
  });
})


// 책 평가 별점
$('.emptybox').click(function(){
  $('input[name="rating"]').prop('checked', false);
  $('.starRatebox').hide();
  $('.userReview>h4').css('opacity', 1);
})

function handleStarRateChange() {
  // 호버와 체인지 이벤트 처리
  $('.starRate label').hover(function () {
    let i = $(this).index()
    let j = $('.starRate').children().eq(i - 1).val()

    $('.starRatebox').css('display', 'block');
    $('.starRatebox p').eq(j - 1).css('display', 'block').siblings().css('display', 'none');
    $('.userReview>h4').css('opacity', 0);

  }, function () {
    
      // 체인지 이벤트에서 체크된 경우 처리하지 않도록 조건 추가
      var selectedRating = $('input[name="rating"]:checked').val();

      if ($('input[name="rating"]:checked').length === 0) {
        $('.starRatebox').hide();
        $('.userReview>h4').css('opacity', 1);
      }

      $('.starRatebox p').eq(selectedRating - 1).css('display', 'block').siblings().css('display', 'none');
    });

  // 체인지 이벤트 처리
  $('input[name="rating"]').change(function () {
    var selectedRating = $('input[name="rating"]:checked').val();

    // 선택된 값이 있는지 확인
    if (selectedRating !== undefined) {
      console.log('선택된 별점: ' + selectedRating);

      $('.userReview>h4').css('opacity', 0)
      $('.starRatebox').css('display', 'block');
      $('.starRatebox p').eq(selectedRating - 1).css('display', 'block').siblings().css('display', 'none');

    } else {
      // 체크가 해제된 경우 처리
      $('.starRatebox').hide();
      $('.userReview>h4').css('opacity', 1);
    }
  });
}

// HTML이 로드된 후 실행되어야 합니다.
$(document).ready(function () {
  // 이벤트 핸들러 호출
  handleStarRateChange();
});

