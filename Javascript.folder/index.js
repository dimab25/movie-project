const api_URL_ChristmasMovies =
  `https://api.themoviedb.org/3/discover/movie?api_key=${api_key}&with_keywords=207317`;

function getDataChristmasMovies() {
  fetch(api_URL_ChristmasMovies)
    .then((response) => {
      console.log(response);
      return response.json();
    })
    .then((data) => {
      console.log(data.results);
      const movies = data.results;
      displayChristmasMoviesCarousel (movies)
      displayChristmasMovies(movies);
    })
    .catch((error) => {
      console.log("error");
    });
}

function displayChristmasMoviesCarousel (movies) {
    // carousel
    const imageCarousel1= document.getElementById("movie-carousel-first");
imageCarousel1.setAttribute ("src", "https://image.tmdb.org/t/p/original" + movies[0].backdrop_path)
const imageCarousel2= document.getElementById("movie-carousel-second");
imageCarousel2.setAttribute("src","https://image.tmdb.org/t/p/original" + movies[1].backdrop_path)
const imageCarousel3= document.getElementById("movie-carousel-third");
imageCarousel3.setAttribute("src","https://image.tmdb.org/t/p/original" + movies[2].backdrop_path)

const titelCarousel1= document.getElementById("carousel-movie-title1");
titelCarousel1.innerText= movies[0].title;
// const overviewCarousel1= document.getElementById("carousel-movie-overview1");
// overviewCarousel1.innerText= movies[4].overview;

const titelCarousel2= document.getElementById("carousel-movie-title2");
titelCarousel2.innerText= movies[1].title;
// const overviewCarousel2= document.getElementById("carousel-movie-overview2");
// overviewCarousel2.innerText= movies[5].overview;

const titelCarousel3= document.getElementById("carousel-movie-title3");
titelCarousel3.innerText= movies[2].title;
// const overviewCarousel3= document.getElementById("carousel-movie-overview3");
// overviewCarousel3.innerText= movies[6].overview;

const carouselATag1 = document.querySelector (".carousel-movie-aTag1")
carouselATag1.setAttribute("href", `movie.html?id=${movies[0].id}`);

const carouselATag2 = document.querySelector (".carousel-movie-aTag2")
carouselATag2.setAttribute("href", `movie.html?id=${movies[1].id}`);
const carouselATag3 = document.querySelector (".carousel-movie-aTag3")
carouselATag3.setAttribute("href", `movie.html?id=${movies[2].id}`);
  }
// christmas movies top 5
  function displayChristmasMovies(movies) {
  const cardsContainer = document.querySelector(
    "div.cards-container.container-Top5Chistmas"
  );
  for (let i = 3; i < 8; i++) {
    const cardContainer = document.createElement("div");
    cardContainer.setAttribute("class", "card");
    cardContainer.setAttribute("style", "width: 14rem;");
   
    cardContainer.setAttribute("id", movies[i].id);

    const cardTitle = document.createElement("h2");
    cardTitle.classList.add("card-title");
    cardTitle.innerText = movies[i].title;

    const cardPoster = document.createElement("img");
    cardPoster.classList.add ("card-img-top")
    cardPoster.setAttribute(
      "src",
      "https://image.tmdb.org/t/p/w500" + movies[i].poster_path
    );
    cardPoster.setAttribute("alt", "movie-picture");

    const cardImageATag = document.createElement("a");
    cardImageATag.setAttribute("href", `movie.html?id=${movies[i].id}`);

    cardsContainer.appendChild(cardContainer);
    cardContainer.appendChild(cardImageATag);
    cardImageATag.appendChild(cardPoster);
  }
}
getDataChristmasMovies();

// ---------------------------------------------------------------------------------------------------------------------------------------------
// //  Popular 5 Movies (cards-container)
const api_URL_TopMovies5 =
  `https://api.themoviedb.org/3/movie/popular?api_key=${api_key}`;

function getDataMovies() {
  fetch(api_URL_TopMovies5)
    .then((response) => {
      console.log(response);
      return response.json();
    })
    .then((data) => {
      console.log("daten", data.results);
      const movies = data.results;
      displayFilms(movies);
    })
    .catch((error) => {
      console.log("error");
    });
}
function displayFilms(movies) {
  const cardsContainer = document.querySelector(
    "div.cards-container.container-top5Movies"
  );
  for (let i = 0; i < 5; i++) {
    const cardContainer = document.createElement("div");
    cardContainer.setAttribute("class", "card");
    cardContainer.setAttribute("style", "width: 14rem;");
    cardContainer.setAttribute("id", movies[i].id);

    const cardTitle = document.createElement("h2");
    cardTitle.classList.add("card-title");
    cardTitle.innerText = movies[i].original_title;

    const cardPoster = document.createElement("img");
    cardPoster.classList.add ("card-img-top")
    cardPoster.setAttribute(
      "src",
      "https://image.tmdb.org/t/p/w500" + movies[i].poster_path
    );
    cardPoster.setAttribute("alt", "movie-picture");

    const cardImageATag = document.createElement("a");
    cardImageATag.setAttribute("href", `movie.html?id=${movies[i].id}`);

    cardsContainer.appendChild(cardContainer);
    cardContainer.appendChild(cardImageATag);
    cardImageATag.appendChild(cardPoster);
   
  }
}
getDataMovies();
// ---------------------------------------------------------------------------------------------------------------------------------------------
// //  Top 5 Now Playing (cards-container)

const api_URL_now_playingTop5 =
  `https://api.themoviedb.org/3/movie/now_playing?api_key=${api_key}`;

function getDataNowPlaying() {
  
  fetch(api_URL_now_playingTop5)
    .then((response) => {
      console.log(response);
      return response.json();

    })
    .then((data) => {
      console.log(data.results);
      const movies = data.results;
      displayNowPlaying(movies);
    })
    .catch((error) => {
      console.log("error");
    });
}
function displayNowPlaying(movies) {
  const cardsContainer = document.querySelector(
    "div.cards-container.container-top5_now_playing"
  );
  for (let i = 6; i < 11; i++) {
    const cardContainer = document.createElement("div");
    cardContainer.setAttribute("class", "card");
    cardContainer.setAttribute("style", "width: 14rem;");
    cardContainer.setAttribute("id", movies[i].id);

    const cardTitle = document.createElement("h2");
    cardTitle.classList.add("card-title");
    cardTitle.innerText = movies[i].original_title;

    const cardPoster = document.createElement("img");
    cardPoster.classList.add ("card-img-top")
    cardPoster.setAttribute(
      "src",
      "https://image.tmdb.org/t/p/w500" + movies[i].poster_path
    );
    cardPoster.setAttribute("alt", "movie-picture");

    const cardImageATag = document.createElement("a");
    cardImageATag.setAttribute("href", `movie.html?id=${movies[i].id}`);

    cardsContainer.appendChild(cardContainer);
    cardContainer.appendChild(cardImageATag);
    cardImageATag.appendChild(cardPoster);
   
  }
}
getDataNowPlaying();

// ---------------------------------------------------------------------------------------------------------------------------------------------
// //  Top 5 Tv (cards-container)

const api_URL_TopTV5 =
  `https://api.themoviedb.org/3/tv/top_rated?api_key=${api_key}`;

function getDataTv() {
  fetch(api_URL_TopTV5)
    .then((response) => {
      console.log(response);
      return response.json();
    })
    .then((data) => {
      console.log(data.results);
      const movies = data.results;
      displayTv(movies);
    })
    .catch((error) => {
      console.log("error");
    });
}
function displayTv(movies) {
  const cardsContainer = document.querySelector(
    "div.cards-container.container-top5TV"
  );

  for (let i = 0; i < 5; i++) {
    const cardContainer = document.createElement("div");
    cardContainer.setAttribute("class", "card");
   
    cardContainer.setAttribute("style", "width: 14rem;");
    cardContainer.setAttribute("id", movies[i].id);

    const cardTitle = document.createElement("h2");
    cardTitle.classList.add("card-title");
    cardTitle.innerText = movies[i].original_title;

    const cardPoster = document.createElement("img");
    cardPoster.classList.add ("card-img-top")
    cardPoster.setAttribute(
      "src",
      "https://image.tmdb.org/t/p/w500" + movies[i].poster_path
    );
    cardPoster.setAttribute("alt", "movie-picture");

    const cardImageATag = document.createElement("a");
    cardImageATag.setAttribute("href", `tv_show.html?id=${movies[i].id}`);

    cardsContainer.appendChild(cardContainer);
    cardContainer.appendChild(cardImageATag);
    cardImageATag.appendChild(cardPoster);
  }
}
getDataTv();

// Button show more/less
function showMoreLessText() {
  const dots = document.getElementById("dots");
  const moreText = document.getElementById("more");
  const btnText = document.getElementById("showMoreLessBtn");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Read more";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Read less";
    moreText.style.display = "inline";
  }
}
// --------------------------------------------------------------------------------------------------------------------------------