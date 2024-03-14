$.ajax({
  method: "GET",
  url: "https://dapi.kakao.com/v3/search/book?target=publisher",
  data: {  query: "북로망스", size: 50},
  headers :{Authorization: "KakaoAK ec463079ad57ea9cb97f6400249a8755"}
})
  .done(function( msg ) {
    console.log(msg);

    const divs = $('.recommend .book')

    for (let i=0; i < divs.length; i++){
      $('.recommend .book').eq(i).children('.bookCover').append("<img src = '" + msg.documents[i].thumbnail + "'>")
      $('.recommend .book').eq(i).children('.bookName').append(msg.documents[i].title)
    }
  });

  
  $.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=publisher",
    data: {  query: "북로망스", size: 50},
    headers :{Authorization: "KakaoAK ec463079ad57ea9cb97f6400249a8755"}
  })
    .done(function( msg ) {
      console.log(msg);
  
      const divs = $('.mdPick .book')
  
      for (let i=0; i < divs.length; i++){
        $('.mdPick .book').eq(i).children('.bookCover').append("<img src = '" + msg.documents[i].thumbnail + "'>")
        $('.mdPick .book').eq(i).children('.bookNameBox h3').append(msg.documents[i].title)
        $('.mdPick .book').eq(i).children('.bookNameBox p').append(msg.documents[i].content)
      }
    });