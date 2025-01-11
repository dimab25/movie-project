const api_URL_now_playing = `https://api.themoviedb.org/3/movie/now_playing?api_key=${api_key}`;

// fetch whole data movies
function getData() {
  fetch(api_URL_now_playing)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      // console.log(data.results);
      const movies = data.results;
      controller(movies);
    })
    .catch((error) => {
      console.log("error");
    });
}

// CREATE CONTAINER AND DISPLAY MOVIES
function displayFilms(movies) {
  const cardsContainer = document.querySelector(".cards-container");
  cardsContainer.innerText = "";

  for (let i = 0; i < movies.length; i++) {
    const cardContainer = document.createElement("div");
    cardContainer.setAttribute("class", "card");
    cardContainer.setAttribute("style", "width: 15rem;");
    cardContainer.setAttribute("id", movies[i].id);

    const cardTitle = document.createElement("h5");
    cardTitle.classList.add("card-title");
    cardTitle.innerText = movies[i].title;
    // POPULARITY
    // const cardPopularity= document.createElement("h5")
    // cardPopularity.innerText = movies[i].popularity

    const cardReleaseDate = document.createElement("h6");
    cardReleaseDate.classList.add("card-release-date");
    cardReleaseDate.innerText = new Date(movies[i].release_date).toLocaleString(
      "en-GB",
      {
        day: "numeric",
        month: "short",
        year: "numeric",
      }
    );
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

    const cardPoster = document.createElement("img");
    cardPoster.setAttribute("class", "card-img-top");
    cardPoster.setAttribute(
      "src",
      `https://image.tmdb.org/t/p/original${movies[i].poster_path}`
    );
    cardPoster.setAttribute("alt", "movie-picture");

    const cardAddDiv = document.createElement("div");
    cardAddDiv.classList.add("card-body");

    const cardDiv1 = document.createElement("div");
    const cardAddCircle = document.createElement("span");
    cardAddCircle.classList.add("material-symbols-outlined");
    cardAddCircle.innerText = "add_circle";

    cardContainer.appendChild(cardTitle);
    cardImageATag.appendChild(cardPoster);
    cardContainer.appendChild(cardImageATag);
    cardsContainer.appendChild(cardContainer);
    cardContainer.appendChild(cardTitle);
    cardContainer.appendChild(cardAddDiv);
    cardAddDiv.appendChild(cardMovieVote);
    cardAddDiv.appendChild(cardReleaseDate);
    cardAddDiv.appendChild(cardDiv1);
    cardDiv1.appendChild(cardAddCircle);
    // cardContainer.appendChild (cardPopularity)
  }
}
getData();

// fetch genres
const url_GenreList = `https://api.themoviedb.org/3/genre/movie/list?api_key=${api_key}`;

// Dropdown function
//*  generate Dropdown options
const createDropDown = (movies) => {
  const dropdown = document.getElementById("movieGenreDropdown");
  const differentGenreIds = movies.map((movie) => {
    return movie.genre_ids;
  });
  // console.log("differentGenreIds", differentGenreIds);
  // FLAT FUNCTION, putting all numbers in different arrays together
  const allGenres = differentGenreIds.flat(Infinity);
  // console.log(allGenres);
  // SET FUNCTION: Each value can only occur once in a Set.
  const setOfGenres = new Set(allGenres);
  // console.log(setOfGenres);
  // transforms an set into an array
  const uniqueGenresArray = [...setOfGenres];
  // console.log("uniqueGenresArray", uniqueGenresArray);
  // uniqueGenresArray is an  Array of numbers (no ids)

  fetch(url_GenreList)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      const genreList = data.genres;
      // console.log("genrelist", genreList);
      // genreList is the Array with ids and  matching genrenames
      const genreNamesResult = uniqueGenresArray.map((id) => {
        const sameId = genreList.find((genre) => genre.id === id);
        // sameId is not an array, but various objects containing matching ids and genre names
        if (sameId) {
          return { id, name: sameId.name };
        }
      });
      for (let i = 0; i < genreNamesResult.length; i++) {
        const option = document.createElement("option");
        option.innerText = genreNamesResult[i].name;
        option.value = genreNamesResult[i].name;
        dropdown.appendChild(option);
      }
    })
    .catch((error) => {
      console.log("error");
    });
};

//* add event listeners Dropdown
const setEventListenersDropDown = (movies) => {
  const genreDropdown = document.querySelector("#movieGenreDropdown");
  genreDropdown.addEventListener("change", function () {
    console.log("selected");
    // function
    // filterByDropDown(movies);
    combinedFilters(movies);
  });
};

// add event listeners Sort function
const setEventListenersSort = (movies) => {
  const sortDropdown = document.querySelector("#sort");
  sortDropdown.addEventListener("change", function () {
    console.log("sort selected");
    // filterBySortFunction(movies);
    combinedFilters(movies);
  });
};

const combinedFilters = (movies) => {
  // ;console.log("works");
  const selectedGenre = document.querySelector("#movieGenreDropdown").value;
  const selectedSortFunction = document.querySelector("#sort").value;
  console.log(selectedGenre);
  if (selectedGenre === "all") {
    if (selectedSortFunction === "sort") {
      displayFilms(movies);
    }
    if (selectedSortFunction === "Rating") {
      movies.sort((a, b) => b.vote_average - a.vote_average);
      // console.log("sorted movies", movies);
      // console.log("funktinoiert");
      displayFilms(movies);
    }
    if (selectedSortFunction === "Popularity") {
      movies.sort((a, b) => b.popularity - a.popularity);
      displayFilms(movies);
    }
    if (selectedSortFunction === "ReleaseDate") {
      movies.sort(
        (a, b) => new Date(b.release_date) - new Date(a.release_date)
      );
      displayFilms(movies);
    }
  } else {
    fetch(url_GenreList)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        const genreList = data.genres;
        console.log("genrelist", genreList);
        // result is an object with id and genre name, the one which is choosen in dropdown

        const result = genreList.find((genre) => genre.name === selectedGenre);
        console.log("result", result.id);
        // filter
        const filteredMovies = movies.filter((movie) => {
          return movie.genre_ids.includes(result.id);
        });
        console.log(filteredMovies);
        // displayFilms(filteredMovies);

        if (selectedSortFunction === "sort") {
          // filteredMovies.sort((a, b) => new Date(b.release_date) - new Date(a.release_date));
          displayFilms(filteredMovies);
        }
        if (selectedSortFunction === "Rating") {
          filteredMovies.sort((a, b) => b.vote_average - a.vote_average);
          // console.log("sorted movies", movies);
          // console.log("funktinoiert");
          displayFilms(filteredMovies);
        }
        if (selectedSortFunction === "Popularity") {
          filteredMovies.sort((a, b) => b.popularity - a.popularity);
          displayFilms(filteredMovies);
        }
        if (selectedSortFunction === "ReleaseDate") {
          filteredMovies.sort(
            (a, b) => new Date(b.release_date) - new Date(a.release_date)
          );
          displayFilms(filteredMovies);
        }
      })
      .catch((error) => {
        console.log("error");
      });
  }
};

//*controller function
function controller(movies) {
  displayFilms(movies);
  //generate DropDown filter options
  createDropDown(movies);
  //create filter functions
  setEventListenersDropDown(movies);
  setEventListenersSort(movies);
  setEventListenersSearch(movies);
}

// SEARCH FUNCTION
//* add event listeners search
const setEventListenersSearch = (movies) => {
  const searchInput = document.querySelector("#myInput");
  searchInput.addEventListener("input", function () {
    console.log("gewählt");

    filterBySearch(movies);
  });
};
// filter by search function
const filterBySearch = (movies) => {
  const typedMovieTitle = document
    .querySelector("#myInput")
    .value.toLowerCase();
  console.log(typedMovieTitle);

  if (typedMovieTitle === "") {
    displayFilms(movies);
  } else {
    const searchedMovies = movies.filter((movie) => {
      return movie.title.toLowerCase().includes(typedMovieTitle);
    });
    console.log("typedMovieTitle", typedMovieTitle);
    console.log("searchedMovies", searchedMovies);
    displayFilms(searchedMovies);
  }
};

// USED ALREADY IN COMBINED FILTERS
//*  fiter by dropdown
// const filterByDropDown = (movies) => {
//   console.log(movies);
//   const selectedGenre = document.querySelector("#movieGenreDropdown").value;
//   console.log(selectedGenre);
//   if (selectedGenre === "all") {
//     displayFilms(movies);
//   } else {
//     fetch(url_GenreList)
//       .then((response) => {
//         return response.json();
//       })
//       .then((data) => {
//         const genreList = data.genres;
//         console.log("genrelist", genreList);
//         // result is an object with id and genre name, the one which is choosen in dropdown
//         const result = genreList.find((genre) => genre.name === selectedGenre);
//         console.log("result", result.id);
//         // filter
//         const filteredMovies = movies.filter((movie) => {
//           return movie.genre_ids.includes(result.id);
//         });
//         displayFilms(filteredMovies);
//       })
//       .catch((error) => {
//         console.log("error");
//       });
//   }
// };

// filter by sortfunction
// const filterBySortFunction = (movies) => {
//   console.log("unsorted movies", movies);
//   const selectedSortFunction = document.querySelector("#sort").value;
//   console.log(selectedSortFunction);
//   if (selectedSortFunction === "Rating") {
//     movies.sort((a, b) => a.vote_average - b.vote_average);
//     // console.log("sorted movies", movies);
//     // console.log("funktinoiert");
//     displayFilms(movies);
//   }
//   if (selectedSortFunction === "Popularity") {
//     movies.sort((a, b) => b.popularity - a.popularity);
//     displayFilms(movies);
//   }
//   if (selectedSortFunction === "ReleaseDate") {
//     movies.sort((a, b) => new Date(b.release_date) - new Date(a.release_date));
//     displayFilms(movies);
//   }
// };
