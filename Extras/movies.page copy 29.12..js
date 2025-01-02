const api_URL_TopMovies = `https://api.themoviedb.org/3/movie/popular?api_key=${api_key}`;

// chrismas movies

//   "https://api.themoviedb.org/3/search/movie?api_key=${api_key}&query=christmas";
// "https://api.themoviedb.org/3/search/keyword?api_key=${api_key}&query=christmas";
// search with keywords
// "https://api.themoviedb.org/3/discover/movie?api_key=${api_key}&with_keywords=207317";

function getData() {
  fetch(api_URL_TopMovies)
    .then((response) => {
      console.log(response);
      return response.json();
    })
    .then((data) => {
      console.log(data.results);
      const movies = data.results;

      controller(movies);
    })
    .catch((error) => {
      console.log("error");
    });
}

function displayFilms(movies) {
  const cardsContainer = document.querySelector(".cards-container");
  cardsContainer.innerText = "";

  for (let i = 0; i < movies.length; i++) {
    const cardContainer = document.createElement("div");
    cardContainer.setAttribute("class", "card");
    cardContainer.setAttribute("style", "width: 20rem;");
    cardContainer.setAttribute("id", movies[i].id);

    // cardContainer
    const cardTitle = document.createElement("h6");
    cardTitle.classList.add("card-title");
    cardTitle.innerText = movies[i].title;

    const cardReleaseDate = document.createElement("h6");
    cardReleaseDate.classList.add("card-release-date");
    cardReleaseDate.innerText = movies[i].release_date;

    const cardMovieVote = document.createElement("span");
    cardMovieVote.setAttribute(
      "class",
      "badge rounded-pill bg-light text-dark"
    );
    cardMovieVote.setAttribute("style", "width: 2rem;");
    cardMovieVote.classList.add("card-title");
    cardMovieVote.innerText = movies[i].vote_average.toFixed(1);

    const cardImageATag = document.createElement("a");
    cardImageATag.setAttribute("href", `movie.html?id=${movies[i].id}`);

    const cardBackdrop = document.createElement("img");
    cardBackdrop.setAttribute("class", "card-img-top");
    cardBackdrop.setAttribute(
      "src",
      `https://image.tmdb.org/t/p/w500${movies[i].backdrop_path}`
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
getData();




// Dropdown function
//*  generate Dropdown options
const createDropDown = (movies) => {
  const dropdown = document.getElementById("leagueDropdown");
  const differentGenres = movies.map((movie) => {
    return movie.genre_ids;
  });
  console.log(differentGenres);
  // flat function, putting all numbers in different arrays together
  const allGenres = differentGenres.flat(Infinity);
  // console.log(allGenres);
  // set function: Each value can only occur once in a Set.
  const setOfGenres = new Set(allGenres);
  // console.log(setOfGenres);
  // transforms an set into an array
  const uniqueGenresArray = [...setOfGenres];
  console.log(uniqueGenresArray);

  for (let i = 0; i < uniqueGenresArray.length; i++) {
    const option = document.createElement("option");
    option.innerText = uniqueGenresArray[i];
    option.value = uniqueGenresArray[i];
    dropdown.appendChild(option);
  }
};

//*5 add event listeners Dropdown
const setEventListeners = (movies) => {
  const genreDropdown = document.querySelector("#leagueDropdown");
  genreDropdown.addEventListener("change", function () {
    console.log("selected");
    // function
    filterByDropDown(movies);
  });
};

//* 6 fiter by dropdown
const filterByDropDown = (movies) => {
  console.log(movies);
  const selectedGenre = document.querySelector("#leagueDropdown").value;
  // console.log(typeof selectedGenre);
  //>Transforming a string into a number: here are 3 different ways
  //1. Number()
  // const selectedGenreNumber = Number(selectedGenre)
  //2. parseInt()
  // const selectedGenreNumber =parseInt(selectedGenre)
  //3. +
  const selectedGenreNumber = +selectedGenre;
console.log(selectedGenreNumber);

  // filter
  const filteredMovies = movies.filter((movie) => {
    return movie.genre_ids.includes(selectedGenreNumber);
  });
  console.log(filteredMovies);
  displayFilms(filteredMovies);
};






// fetch genres
const url_GenreList = `https://api.themoviedb.org/3/genre/movie/list?api_key=${api_key}`;

function getGenreList() {
  fetch(url_GenreList)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      const genreList = data.genres;
      // console.log(genreList);
    })
    .catch((error) => {
      console.log("error");
    });
}
getGenreList();





//* make controller function

function controller(movies) {
  //get the data

  // build table with all data
  displayFilms(movies);
  //generate DropDown filter options
  createDropDown(movies);
  //create filter functions
  setEventListeners(movies);
  // set event listeners
  setEventListeners2(movies);
}






// search function
//* add event listeners search
const setEventListeners2 = (movies) => {
  const searchButtom = document.querySelector("#myInput");
  searchButtom.addEventListener("input", function () {
    console.log("gewählt");
    filterBySearch(movies);
  });
};
// filter by search function
const filterBySearch = (movies) => {
  //   // console.log(movies);
  const selectedMovieTitle = document
    .querySelector("#myInput")
    .value.toLowerCase();
  // console.log(selectedMovieTitle);
  // // filter
  const searchedMovies = movies.filter((movie) => {
    return selectedMovieTitle === movie.original_title.toLowerCase();
  });
  console.log(searchedMovies);
  displayFilms(searchedMovies);
};


