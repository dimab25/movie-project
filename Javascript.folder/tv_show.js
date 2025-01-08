
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

      displayMovieInformatino(movie);
      getGenres(movie);
    })
    .catch((error) => {
      console.log("error");
    });
}

function getGenres(movie) {
  // console.log(movie.genres);
  const genreArray = movie.genres.map((genre) => {
    return genre.name;
  });
  // console.log(genreArray);

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

  const movieImage = document.getElementById("movie-Image");
  // const movieImage= document.createElement ("img");
  movieImage.setAttribute(
    "src",
    "https://image.tmdb.org/t/p/w500" + movie.poster_path
  );
  movieImage.setAttribute("alt", "movie-picture");

  const movieInfoOverview = document.getElementById("movie-overview");
  movieInfoOverview.innerText = movie.overview;

  const movieTagline = document.getElementById("movie-tagline");

  movieTagline.innerText = movie.tagline;

  const movieDate = document.getElementById("movie-date");
  movieDate.innerText = new Date(movie.first_air_date).toLocaleString("en-GB", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });

  // const movieRuntime = document.getElementById("movie-runtime");
  // movieRuntime.innerText = movie.runtime + " min";

  const cardMovieVote = document.getElementById("vote-span");
  cardMovieVote.setAttribute("style", "width: 2rem;");
  cardMovieVote.classList.add("card-title");
  cardMovieVote.innerText = movie.vote_average.toFixed(1);

  const cardMovieHomepage = document.getElementById("homepage-link");
  cardMovieHomepage.setAttribute("href", movie.homepage);

  const cardBackdropContainer = document.getElementById("BackdropContainer");
  const cardBackdropImage = document.createElement("img");
  cardBackdropImage.classList.add ("card-img")
  cardBackdropImage.setAttribute(
    "src",
    "https://image.tmdb.org/t/p/original" + movie.backdrop_path
  );
  cardBackdropContainer.appendChild(cardBackdropImage);
}

getData();

// Fetch Movietrailer with ID

const url_Trailer = `https://api.themoviedb.org/3/tv/${movieID}/videos?api_key=${api_key}`;
console.log(url_Trailer);

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
      const newTrailerKey = trailer[i].key;

      console.log("trailerkey", newTrailerKey);
      console.log(typeof newTrailerKey);

      const movieTrailer = document.querySelector(".youtube");
      movieTrailer.setAttribute(
        "src",
        `https://www.youtube.com/embed/${newTrailerKey}`
      );
      // console.log(movie.videos.results); suchen nach Type"trailer"
    }
  }
}
// hier wird der key mehrere male angezeigt, ich muss es so einstellen, dass er nur einmal angezeigt wird und dann auch in anderen funktionen zu verwenden ist.
getTrailerData();
// fetch MovieCredits with ID

const url_Credits = `https://api.themoviedb.org/3/tv/${movieID}/credits?api_key=${api_key}`;

function getCreditsData() {
  fetch(url_Credits)
    .then((response) => {
      console.log(response);
      return response.json();
    })
    .then((data) => {
      const creditsCrew = data.crew;
      console.log("crew", creditsCrew);
      const credits = data.cast;
      console.log(credits);
      displayCreditsCrew(creditsCrew);
      displayCreditsCast(credits);
    })
    .catch((error) => {
      console.log("error");
    });
}
getCreditsData();

function displayCreditsCrew(creditsCrew) {
  const crewContainer = document.getElementById("crew-Container");

  const creator = creditsCrew.find((position) => position.job === "Executive Producer");
  console.log("creator", creator);
  console.log(creator.name);
  if (creator !== undefined) {
    const creatorPTag = document.createElement("p");
    creatorPTag.innerText = `${creator.job}: ${creator.name}`;
    crewContainer.appendChild(creatorPTag);
  }

  // const screenplay = creditsCrew.find(
  //   (position) => position.job === "Screenplay"
  // );
  // console.log("screenplay", screenplay);
  // if (screenplay !== undefined) {
  //   const screenplayPTag = document.createElement("p");
  //   screenplayPTag.innerText = `${screenplay.job}: ${screenplay.name}`;
  //   crewContainer.appendChild(screenplayPTag);
  // }

  // const novel = creditsCrew.find((position) => position.job === "Novel");
  // console.log("novel", novel);
  // if (novel !== undefined ) {
  //   const novelPTag = document.createElement("p");
  //   novelPTag.innerText = `${novel.job}: ${novel.name}`;
  //   crewContainer.appendChild(novelPTag);
  // }

  // const story = creditsCrew.find((position) => position.job === "Story");
  // console.log("story", story);
  // if (story !== undefined) {
  //   const storyPTag = document.createElement("p");
  //   storyPTag.innerText = `${story.job}: ${story.name}`;
  //   crewContainer.appendChild(storyPTag);
  // }
 }

function displayCreditsCast(credits) {
  const creditsContainer = document.getElementById("movie-cast");

  for (let i = 0; i < 5; i++) {
    const creditContainer = document.createElement("div");
    creditContainer.setAttribute("class", "card");
    creditContainer.setAttribute("style", "width: 12rem;");

    const castImage = document.createElement("img");

    // castImage.setAttribute(
    //   "src",
    //   `https://image.tmdb.org/t/p/original${credits[i].profile_path}`
    // );
    // castImage.setAttribute("src", "https://upload.wikimedia.org/wikipedia/commons/6/65/No-Image-Placeholder.svg");

    castImage.setAttribute("class", "card-img-top");

    if (credits[i].profile_path === null) {
      castImage.setAttribute(
        "src",
        `https://upload.wikimedia.org/wikipedia/commons/6/65/No-Image-Placeholder.svg`
      );
    } else {
      castImage.setAttribute(
        "src",
        `https://image.tmdb.org/t/p/original${credits[i].profile_path}`
      );
    }

    const castTextBody = document.createElement("div");
    castTextBody.setAttribute("class", "card-bodyX");

    const castName = document.createElement("h6");
    castName.innerText = credits[i].name;
    const castCharacter = document.createElement("p");
    castCharacter.innerText = credits[i].character;

    creditsContainer.appendChild(creditContainer);
    creditContainer.appendChild(castImage);
    creditContainer.appendChild(castTextBody);
    castTextBody.appendChild(castName);
    castTextBody.appendChild(castCharacter);
  }
}

// Recommendations

const url_Recommendations = `https://api.themoviedb.org/3/tv/${movieID}/recommendations?api_key=${api_key}`;

function getRecommendationsData() {
  fetch(url_Recommendations)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      const recommendations = data.results;
      // console.log(recommendations);
      displayRecommendations(recommendations);
    })
    .catch((error) => {
      console.log("error");
    });
}

function displayRecommendations(recommendations) {
  const cardsContainer = document.querySelector(".card-container");

  for (let i = 0; i < 6; i++) {
    const cardContainer = document.createElement("div");
    cardContainer.setAttribute("class", "card");
    cardContainer.setAttribute("style", "width: 13rem;");
    cardContainer.setAttribute("id", recommendations[i].id);

    // cardContainer
    const cardTitle = document.createElement("h6");
    cardTitle.classList.add("card-title");
    cardTitle.innerText = recommendations[i].title;

    const cardReleaseDate = document.createElement("h6");
    cardReleaseDate.classList.add("card-release-date");
    cardReleaseDate.innerText = recommendations[i].release_date;

    const cardMovieVote = document.createElement("span");
    cardMovieVote.setAttribute(
      "class",
      "badge rounded-pill bg-light text-dark"
    );
    cardMovieVote.setAttribute("style", "width: 2rem;");
    cardMovieVote.classList.add("card-title");
    cardMovieVote.innerText = recommendations[i].vote_average.toFixed(1);

    const cardImageATag = document.createElement("a");
    cardImageATag.setAttribute(
      "href",
      `tv_show.html?id=${recommendations[i].id}`
    );

    const cardPoster = document.createElement("img");
    cardPoster.setAttribute("class", "card-img-top");
    cardPoster.setAttribute(
      "src",
      `https://image.tmdb.org/t/p/original${recommendations[i].poster_path}`
    );
    cardPoster.setAttribute("alt", "movie-picture");

    cardImageATag.appendChild(cardPoster);
    cardContainer.appendChild(cardImageATag);
    cardsContainer.appendChild(cardContainer);
  }
}

getRecommendationsData();
