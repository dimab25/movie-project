
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
      displayChristmasMovies(movies);
    })
    .catch((error) => {
      console.log("error");
    });
}
function displayChristmasMovies(movies) {
  const cardsContainer = document.querySelector(
    "div.cards-container.container-Top5Chistmas"
  );

  for (let i = 0; i < 10; i++) {
    const cardContainer = document.createElement("div");
    cardContainer.setAttribute("class", "card");
    cardContainer.setAttribute("style", "width: 13rem;");
    cardContainer.setAttribute("id", movies[i].id);

    const cardTitle = document.createElement("h2");
    cardTitle.classList.add("card-title");
    cardTitle.innerText = movies[i].original_title;

    const cardPoster = document.createElement("img");
    cardPoster.setAttribute(
      "src",
      "https://image.tmdb.org/t/p/w300" + movies[i].poster_path
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
// Home
// //  Top 5 Movies (cards-container)

const api_URL_TopMovies5 =
  `https://api.themoviedb.org/3/movie/popular?api_key=${api_key}`;

console.log(api_key);

function getDataMovies() {
  fetch(api_URL_TopMovies5)
    .then((response) => {
      console.log(response);
      return response.json();
    })
    .then((data) => {
      console.log(data.results);
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

  for (let i = 0; i < 10; i++) {
    const cardContainer = document.createElement("div");
    cardContainer.setAttribute("class", "card");
    cardContainer.setAttribute("style", "width: 13rem;");
    cardContainer.setAttribute("id", movies[i].id);

    const cardTitle = document.createElement("h2");
    cardTitle.classList.add("card-title");
    cardTitle.innerText = movies[i].original_title;

    const cardPoster = document.createElement("img");
    cardPoster.setAttribute(
      "src",
      "https://image.tmdb.org/t/p/w300" + movies[i].poster_path
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
// Home
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

  for (let i = 0; i < 10; i++) {
    const cardContainer = document.createElement("div");
    cardContainer.setAttribute("class", "card");
    cardContainer.setAttribute("style", "width: 13rem;");
    cardContainer.setAttribute("id", movies[i].id);

    const cardTitle = document.createElement("h2");
    cardTitle.classList.add("card-title");
    cardTitle.innerText = movies[i].original_title;

    const cardPoster = document.createElement("img");
    cardPoster.setAttribute(
      "src",
      "https://image.tmdb.org/t/p/w300" + movies[i].poster_path
    );
    cardPoster.setAttribute("alt", "movie-picture");

    const cardImageATag = document.createElement("a");
    cardImageATag.setAttribute("href", `tv.html?id=${movies[i].id}`);

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
