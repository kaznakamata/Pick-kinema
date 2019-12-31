$(function(){
  $(".box-3").on("click", function(){
    console.log("発火");
    function movieRandom(){
      var randomPage = 1 + Math.floor(Math.random()*(250))
      var randomResult = Math.floor(Math.random()*(19))
      var url = 'https://api.themoviedb.org/3/discover/movie?primary_release_date.gte=1970-01-01&page=xxxxxx&include_video=false&include_adult=false&sort_by=popularity.desc&language=US-en&api_key=db926ca771f371cb7a61522df8e0f05e' 
      var urls = url.replace(/xxxxxx/, randomPage)

      fetch(urls)
      .then(response => {
        return response.json();
      })
      .then(data => {
        console.log(data);
        console.log(data.results[randomResult].release_date);
        $(".main__center__poster__left__info-title").empty().append(data.results[randomResult].title);
        var pos = "https://image.tmdb.org/t/p/w300/xxxxxx"
        var pospos = pos.replace(/xxxxxx/, data.results[randomResult].poster_path);
        $("img").attr({src: pospos, id: data.results[randomResult].id});
        $("#main__center__poster__left__form__tmdb_id").attr({value: data.results[randomResult].id});
        $(".main__center__poster__left__info-releasedate").empty().append(data.results[randomResult].release_date);
        $("#main__center__poster__left__form-overview").empty().append(data.results[randomResult].overview);
      })
      .catch(error => {
      });
    }

    function formAppear(){
      $("form").css({opacity: 0.6});
    }

    movieRandom();
    formAppear();
    

  });
})
  // .main__center__poster__left__info-title
  // .main__center__poster__left__info-releasedate
  // .main__center__poster__left__info-overview
  
  // $(".main__center__poster__btn").on("click", function(){
  //   function movieRandom(){
  //     var randomPage = 1 + Math.floor(Math.random()*(250))
  //     var randomResult = Math.floor(Math.random()*(19))
  //     var url = 'https://api.themoviedb.org/3/discover/movie?primary_release_date.gte=1970-01-01&page=xxxxxx&include_video=false&include_adult=false&sort_by=popularity.desc&language=US-en&api_key=db926ca771f371cb7a61522df8e0f05e' 
  //     var urls = url.replace(/xxxxxx/, randomPage)

  //     fetch(urls)
  //     .then(response => {
  //       return response.json();
  //     })
  //     .then(data => {
  //       console.log(data);
  //       var add = data.results[randomResult].title
  //       $(".main__center__poster__ja__name").empty().append(add);
  //       var pos = "https://image.tmdb.org/t/p/w300/xxxxxx"
  //       var pospos = pos.replace(/xxxxxx/, data.results[randomResult].poster_path);
  //       $(".main__center__poster__ja__form img").attr({src: pospos, id: data.results[randomResult].id});
        
  //       $("#main__center__poster__ja__form__mtdb_id").attr({value: data.results[randomResult].id});
  //     })
  //     .catch(error => {
  //     });
  //   }
  //   movieRandom();
  // });
  // $(".main__center__poster__ja__image").on("click", function(){
  //   console.log("発火");
  //   $(".main__center__poster__en__image").empty()
  //   $(".main__center__poster__en__name").empty()
  //   $(".main__center__poster__btn").remove()
  // });

// });

// $(#poster_ja img).attr(id) Elementsからidを取得する。  → new画面にはこのidを元にポスターを継続表示
// 今まではmodel table のデータをcontrollerでインスタンス変数にして、viewに表示だった。
// ポスターをクリックした時点でidをDBに保存しないと、コントローラーで参照することができない。
// 
// valueの中身をjsでひっぱったデータを入れる。


// submitボタンの画像をポスター画像におきかえれば、今のposter画像ではなく、submitボタンとして扱える。→画像クリックでmoviesに保存できる。