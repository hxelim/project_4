// 이 책과 함께 구매한 책
$.ajax({
  method: "GET",
  url: "https://dapi.kakao.com/v3/search/book?target=contents",
  data: { query: "마음", size: 50 },
  headers: { Authorization: "KakaoAK ec463079ad57ea9cb97f6400249a8755" }
})
  .done(function (msg) {

    const divs = $('.r1 .book')
    const origin = msg.documents;
    // 썸네일이 빈 문자열인것은 제외
    let data = origin.filter((val)=>{
        return val.thumbnail != '' && val.contents !='' && val.title.indexOf('마법천자문') < 0;
      })

      for (let i = 0; i < divs.length; i++) {

      let str = data[i].title;
      let idx = str.search(/[\()]/);
      let newStr = function (){
        if (idx == -1) {
          return str;
        } else {
          return str = str.substring(idx,-1)
        }
      }

      $(divs).eq(i).append("<div class='bookCover'><img src = '" + data[i].thumbnail + "'></div>")
      $(divs).eq(i).append("<h3>"+newStr()+"</h3>")
      $(divs).eq(i).append("<p>"+data[i].authors+"</p>")


       

    }
  });

// 이 책과 함께 둘러본 책
$.ajax({
  method: "GET",
  url: "https://dapi.kakao.com/v3/search/book?target=contents",
  data: { query: "소설", size: 50 },
  headers: { Authorization: "KakaoAK ec463079ad57ea9cb97f6400249a8755" }
})
  .done(function (msg) {

    const divs = $('.r2 .book')
    const origin = msg.documents;
    // 썸네일이 빈 문자열인것은 제외
    let data = origin.filter((val)=>{
        return val.thumbnail != '' && val.contents !='' && val.title.indexOf('교보문고') < 0;
    })


    for (let i = 0; i < divs.length; i++) {

      //정규표현식 이용해서 특정문자(괄호 안 문자) 찾아서 제거 
      let str = data[i].title;
      let idx = str.search(/[\()]/);
      let newStr = function (){
        if (idx == -1) {
          return str;
        } else {
          return str = str.substring(idx,-1)
        }
      }
      
      $(divs).eq(i).append("<div class='bookCover'><img src = '" + data[i].thumbnail + "'></div>")      
      $(divs).eq(i).append("<h3>"+newStr()+"</h3>")
      $(divs).eq(i).append("<p>"+data[i].authors+"</p>")
    }
  });



 // 저자 프로필 - 대표 저서
$.ajax({
  method: "GET",
  url: "https://dapi.kakao.com/v3/search/book?target=authors",
  data: { query: "이수연", size: 50 },
  headers: { Authorization: "KakaoAK ec463079ad57ea9cb97f6400249a8755" }
})
  .done(function (msg) {

    const divs = $('.authorbook .book')

    for (let i = 0; i < divs.length; i++) {
      $(divs).eq(i).append("<div class='bookCover'><img src = '" + msg.documents[i].thumbnail + "'></div>")

      $(divs).eq(i).append("<div class = 'bookNamebox'><h3>" + msg.documents[i].title + "</h3></div>");
      $(divs).eq(i).append('<a href="#"></a>')
    }



    // let list = msg.document[i].title;
    // console.log(list)

    // $('.sort li').eq(1).find('a').click(function(){
    //   list.sort();
    // })
  });


