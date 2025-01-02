// ceck this function again
function getQueryParam(param) {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get(param);
}
const movieID = getQueryParam("id");
// console.log(movieID);

const url_FilmDetails = `https://api.themoviedb.org/3/tv/${movieID}?append_to_response=videos&language=en-US&api_key=${api_key}`;

// fetch Moviedetails with ID
function getData() {
  fetch(url_FilmDetails)
    .then((response) => {
      console.log(response);
      return response.json();
    })
    .then((data) => {
      const movie = data;
      console.log(movie);
      displayMovieInformatino(movie);
      getGenres(movie);
    })
    .catch((error) => {
      console.log("error");
    });
}

function getGenres(movie) {
  console.log(movie.genres);
  const genreArray = movie.genres.map((genre) => {
    return genre.name;
  });
  console.log(genreArray);

  for (let i = 0; i < genreArray.length; i++) {
    const genreTagContainer = document.getElementById("genre-tag");
    const genreTag = document.createElement("p");
    genreTag.innerText = genreArray[i];
    genreTagContainer.appendChild(genreTag);
  }
}

function displayMovieInformatino(movie) {
  //  const movieInfContainer =document.querySelector(".movie-container") ;

  const movieTitle = document.getElementById("movie-Title");
  movieTitle.innerText = movie.name;

  // const movieTrailer = document.querySelector(".youtube");

  // movieTrailer.setAttribute("src", `https://www.youtube.com/embed/LvCedoSC4oA?si=8GhJP2K4BEDB48qS`)
  // console.log(movie.videos.results); suchen nach Type"trailer"

  const movieImage = document.getElementById("movie-Image");
  // const movieImage= document.createElement ("img");
  movieImage.setAttribute(
    "src",
    "https://image.tmdb.org/t/p/w300" + movie.poster_path
  );
  movieImage.setAttribute("alt", "movie-picture");

  const movieInfoOverview = document.getElementById("movie-overview");
  movieInfoOverview.innerText = movie.overview;

  const movieTagline = document.getElementById("movie-tagline");
  movieTagline.innerText = movie.tagline;

  const movieDate = document.getElementById("movie-date");
  movieDate.innerText = movie.first_air_date;

}

getData();

// Fetch Movietrailer with ID

const url_Trailer = `https://api.themoviedb.org/3/tv/${movieID}/videos?api_key=${api_key}`;

function getTrailerData() {
  fetch(url_Trailer)
    .then((response) => {
      console.log(response);
      return response.json();
    })
    .then((data) => {
      const trailer = data.results;
      console.log(trailer);
      getTrailer(trailer);
    })
    .catch((error) => {
      console.log("error");
    });
}
function getTrailer(trailer) {
  // const trailerArray = trailer.map((clip) => {
  //   return clip.type;
  // });
  console.log(trailer);

  for (let i = 0; i < trailer.length; i++) {
    if (trailer[i].type === "Trailer") {
      const newTrailerKey = trailer[0].key;

      console.log(newTrailerKey);
    }
  }
}
// hier wird der key mehrere male angezeigt, ich muss es so einstellen, dass er nur einmal angezeigt wird und dann auch in anderen funktionen zu verwenden ist.

// fetch MovieCredits with ID

const url_Credits = `https://api.themoviedb.org/3/tv/${movieID}/credits?api_key=${api_key}`;

function getCreditsData() {
  fetch(url_Credits)
    .then((response) => {
      console.log(response);
      return response.json();
    })
    .then((data) => {
      const credits = data.cast;
      console.log(credits);
      displayCredits(credits);
    })
    .catch((error) => {
      console.log("error");
    });
}
getCreditsData();

function displayCredits(credits) {
  const creditsContainer = document.getElementById("movie-cast");

  for (let i = 0; i < 7; i++) {
    const creditContainer = document.createElement("div");
    creditContainer.setAttribute("class", "card");
    creditContainer.setAttribute("style", "width: 10rem;");

    const castImage = document.createElement("img");
    castImage.setAttribute(
      "src",
      `https://image.tmdb.org/t/p/original${credits[i].profile_path}`
    );
    castImage.setAttribute("class", "card-img-top");
    castImage.setAttribute("alt", credits[i].name);

    const castTextBody = document.createElement("div");
    castTextBody.setAttribute("class", "card-body");

    const castName = document.createElement("h6");
    castName.innerText = credits[i].name;
    const castCharacter =document.createElement ("p");
    castCharacter.innerText =credits[i].character;

    creditsContainer.appendChild(creditContainer);
    creditContainer.appendChild(castImage);
    creditContainer.appendChild(castTextBody);
    castTextBody.appendChild(castName);
    castTextBody.appendChild(castCharacter);
}}


// Recommendations

const url_Recommendations = `https://api.themoviedb.org/3/tv/${movieID}/recommendations?api_key=${api_key}`;
console.log(url_Recommendations);
function getRecommendationsData() {
  fetch(url_Recommendations)
    .then((response) => {
      console.log(response);
      return response.json();
    })
    .then((data) => {
      const recommendations = data.results;
      console.log(recommendations);
      displayRecommendations (recommendations)
      
    })
    .catch((error) => {
      console.log("error");
    });
}

function displayRecommendations(recommendations) {
  const cardsContainer = document.querySelector(".cards-container");

  for (let i = 0; i < 8; i++) {
    const cardContainer = document.createElement("div");
    cardContainer.setAttribute("class", "card");
    cardContainer.setAttribute("style", "width: 20rem;");
    cardContainer.setAttribute("id", recommendations[i].id);

    // cardContainer
    const cardTitle = document.createElement("h6");
    cardTitle.classList.add("card-title");
    cardTitle.innerText = recommendations[i].name;

    const cardReleaseDate = document.createElement("h6");
    cardReleaseDate.classList.add("card-release-date");
    cardReleaseDate.innerText = recommendations[i].first_air_date;

    const cardMovieVote = document.createElement("span");
    cardMovieVote.setAttribute(
      "class",
      "badge rounded-pill bg-light text-dark"
    );
    cardMovieVote.setAttribute("style", "width: 2rem;");
    cardMovieVote.classList.add("card-title");
    cardMovieVote.innerText = recommendations[i].vote_average.toFixed(1);

    const cardImageATag = document.createElement("a");
    cardImageATag.setAttribute("href", `tv.html?id=${recommendations[i].id}`);

    const cardBackdrop = document.createElement("img");
    cardBackdrop.setAttribute("class", "card-img-top");
    cardBackdrop.setAttribute(
      "src",
      `https://image.tmdb.org/t/p/w500${recommendations[i].backdrop_path}`
    );
    cardBackdrop.setAttribute("alt", "movie-picture");

    cardContainer.appendChild(cardTitle);
    cardImageATag.appendChild(cardBackdrop);
    cardContainer.appendChild(cardImageATag);
    cardsContainer.appendChild(cardContainer);
    cardContainer.appendChild(cardTitle);
    cardContainer.appendChild(cardMovieVote);
    cardContainer.appendChild(cardReleaseDate);
  }
}

getRecommendationsData();