// 오늘, 리디의 발견
$.ajax({
  method: "GET",
  url: "https://dapi.kakao.com/v3/search/book?target=publisher",
  data: { query: "북로망스", size: 50 },
  headers: { Authorization: "KakaoAK ec463079ad57ea9cb97f6400249a8755" }
})
  .done(function (msg) {

    const divs = $('.recommend .book')

    for (let i = 0; i < divs.length; i++) {
      $('.recommend .book').eq(i).children('.bookCover').append("<img src = '" + msg.documents[i].thumbnail + "'>")
      $('.recommend .book').eq(i).children('.bookName').append(msg.documents[i].title)
    }
  });


// MD's Pick
let search;
search = ['베스트셀러', '소설', '푸바오']

for (let i = 0; i < search.length; i++) {

  $.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=contents",
    data: { query: search[i], size: 50 },
    async: false,
    headers: { Authorization: "KakaoAK ec463079ad57ea9cb97f6400249a8755" }
  })
    .done(function (msg) {

      const divs = $('.mdPick .book')

      $('.mdPick .book').eq(i).find('.bookCover').append("<img src = '" + msg.documents[i].thumbnail + "'>")
      $('.mdPick .book').eq(i).find('.bookNamebox h3').append(msg.documents[i].title)
      $('.mdPick .book').eq(i).find('.bookNamebox p').append(msg.documents[i].authors)
    });
}

// 베스트
$.ajax({
  method: "GET",
  url: "https://dapi.kakao.com/v3/search/book?target=contents",
  data: { query: "연속", size: 50 },
  headers: { Authorization: "KakaoAK ec463079ad57ea9cb97f6400249a8755" }
})
  .done(function (msg) {

    const divs = $('.bestlist .book')

    for (let i = 0; i < divs.length; i++) {
      $('.bestlist .book').eq(i).append("<div class='bookCover'><img src = '" + msg.documents[i].thumbnail + "'></div>")
      $('.bestlist .book').eq(i).append("<p>" + (i + 1) + "</p>")

      $('.bestlist .book').eq(i).append("<div class = 'bookNamebox'><h3>" + msg.documents[i].title + "</h3></div>");
      $('.bestlist .book').eq(i).find('.bookNamebox').append("<p>" + msg.documents[i].authors + "</p");
    }
  });

// 새로 나온 책
$.ajax({
  method: "GET",
  url: "https://dapi.kakao.com/v3/search/book?target=contents",
  data: { query: "북로망스", size: 50 },
  headers: { Authorization: "KakaoAK ec463079ad57ea9cb97f6400249a8755" }
})
  .done(function (msg) {
    const divs = $('.new .boxL .bookbox')

    for (let i = 0; i < divs.length; i++) {
      $(divs).eq(i).find('.bookCover').append("<img src = '" + msg.documents[i].thumbnail + "'>")
      $(divs).eq(i).find('.bookName').append(msg.documents[i].title);
      $(divs).eq(i).find('.bookAuthor').append(msg.documents[i].authors);
      $(divs).eq(i).find('.bookContents').append(msg.documents[i].contents);
    }
  });

let boxL = $('.new .boxL .bookbox')
let idx = 0;
boxL.eq(0).show().siblings().hide();

$('.new .btn .prev').click(function () {
  idx -= 1;
  if (idx < 0) {
    idx = 6;
  }
  $(boxL).eq(idx).fadeIn().siblings().fadeOut();
})
$('.new .btn .next').click(function () {
  idx += 1;
  if (idx > 6) {
    idx = 0;
  }
  $(boxL).eq(idx).fadeIn().siblings().fadeOut();
})


$.ajax({
  method: "GET",
  url: "https://dapi.kakao.com/v3/search/book?target=contents",
  data: { query: "북로망스", size: 50 },
  headers: { Authorization: "KakaoAK ec463079ad57ea9cb97f6400249a8755" }
})
  .done(function (msg) {

    const divs = $('.new .boxR .bookbox')

    for (let i = 0; i < divs.length; i++) {
      $(divs).eq(i).find('.bookCover').append("<img src = '" + msg.documents[i].thumbnail + "'>")
      $(divs).eq(i).find('.bookName').append(msg.documents[i].title);
    }
  });



// 아카데미 수상작 & 후보작 원작
$.ajax({
  method: "GET",
  url: "https://dapi.kakao.com/v3/search/book?target=contents",
  data: { query: "영화원작", size: 50 },
  headers: { Authorization: "KakaoAK ec463079ad57ea9cb97f6400249a8755" }
})
  .done(function (msg) {
    const divs = $('.academy .book')
    const origin = msg.documents;
    //썸네일이 빈 문자열인것은 제외
    let data = origin.filter((val)=>{
        return val.thumbnail != '' && val.contents !='';
    })


    for (let i = 0; i < divs.length; i++) {
      $(divs).eq(i).find('.bookCover').append("<img src = '" +data[i].thumbnail + "'>")

      $(divs).eq(i).find('.bookName').append(data[i].title);
      $(divs).eq(i).find('.bookName').append("<p>" + data[i].authors + "</p>");
      $(divs).find('.bookContents').append(data[i].contents.substring(0, 30));
    }
  });