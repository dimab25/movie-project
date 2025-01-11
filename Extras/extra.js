// chrismas movies
//   "https://api.themoviedb.org/3/search/movie?api_key=${api_key}&query=christmas";
// "https://api.themoviedb.org/3/search/keyword?api_key=${api_key}&query=christmas";
// search with keywords
// "https://api.themoviedb.org/3/discover/movie?api_key=${api_key}&with_keywords=207317";


// console.log(products);

// const displayFilms = (productsArray) => {
//     const cardsContainer = document.querySelector(".cards-container");


//     for (let i = 0; i < productsArray.length; i++) {
//         const cardContainer = document.createElement("div")
//         cardContainer.setAttribute("class","card")
//         cardContainer.setAttribute("style","width: 18rem;");


// const cardTitle = document.createElement ("h2");
// cardTitle.classList.add("card-title");
// cardTitle.innerText = productsArray[i].original_title;

// const cardDefinition = document.createElement ("h5");
// cardDefinition.classList.add("card-definition");
// cardDefinition.innerText = productsArray[i].overview;


// const cardImagePoster =document.createElement("img");
// cardImagePoster.setAttribute("src",'https://image.tmdb.org/t/p/w500'+productsArray[i].poster_path);
// cardImagePoster.setAttribute("alt", "movie-picture");
// const cardImage =document.createElement("img");
// cardImage.setAttribute("src",'https://image.tmdb.org/t/p/w500'+productsArray[i].backdrop_path);
// cardImage.setAttribute("alt", "movie-picture");



// // cardContainer.appendChild(cardImagePoster)
// cardContainer.appendChild(cardImage)
// cardsContainer.appendChild(cardContainer)
// cardContainer.appendChild(cardTitle)
// cardContainer.appendChild(cardDefinition)
//     }
 
// };

// displayFilms (products)

// console.log(tv_list);
// const displaytv_list = (tv_listArray) => {
//     const cardsContainer = document.querySelector(".cards-container2");


//     for (let i = 0; i < 5; i++) 
//         {
//         const cardContainer = document.createElement("div")
//         cardContainer.setAttribute("class","card")
//         cardContainer.setAttribute("style","width: 18rem;");

// const cardTitle = document.createElement ("h2");
// cardTitle.classList.add("card-title");
// cardTitle.innerText = tv_list[i].original_name;

// const cardDefinition = document.createElement ("h5");
// cardDefinition.classList.add("card-definition");
// cardDefinition.innerText = tv_list[i].overview;


// const cardImagePoster =document.createElement("img");
// cardImagePoster.setAttribute("src",'https://image.tmdb.org/t/p/w500'+tv_list[i].poster_path);
// cardImagePoster.setAttribute("alt", "movie-picture");
// const cardImage =document.createElement("img");
// cardImage.setAttribute("src",'https://image.tmdb.org/t/p/w500'+tv_list[i].backdrop_path);
// cardImage.setAttribute("alt", "movie-picture");



// cardContainer.appendChild(cardImagePoster)
// // cardContainer.appendChild(cardImage)
// cardsContainer.appendChild(cardContainer)
// cardContainer.appendChild(cardTitle)
// // cardContainer.appendChild(cardDefinition)
//     }
 
// };

// displaytv_list (tv_list)

// console.log(tv_list[0].original_name);




// funktioniert:
// const showimage = (tv_listArray) => {
//     const imagecontainer = document.querySelector(".extrablatt");


//     const image33 =document.createElement("img");
//    image33.setAttribute("src",'https://image.tmdb.org/t/p/w500'+ tv_list[0].poster_path);
// image33.setAttribute("alt", "movie-picture");

// imagecontainer.appendChild(image33)
// }
//    showimage ()

//    ------------------------------------------------------------------------------------------------------------

// const showimage2 = (tv_listArray) => {
//     const imagecontainer = document.querySelector(".extrablatt");


//     const image33 =document.createElement("img");
//    image33.setAttribute("src",'https://image.tmdb.org/t/p/w500'+ tv_list[1].poster_path);
// image33.setAttribute("alt", "movie-picture");

// imagecontainer.appendChild(image33)
// }
//    showimage2 ()

   //    ------------------------------------------------------------------------------------------------------------

  

   //    ------------------------------------------------------------------------------------------------------------


   //    ------------------------------------------------------------------------------------------------------------


     // carousel

        // const showimage4 = (tv_listArray) => {
        //     const imagecontainer = document.querySelector("div.carousel-item.first-item");
        
        
        //     const image33 =document.createElement("img");
        //     image33.setAttribute("class", "d-block w-100")
        //    image33.setAttribute("src",'https://image.tmdb.org/t/p/w500'+ tv_list[1].poster_path);
        // image33.setAttribute("alt", "movie-picture");
        
        // imagecontainer.appendChild(image33)
        // }
        //    showimage4 ()
        
        //    const showimage3 = (tv_listArray) => {
        //     const imagecontainer = document.querySelector("div.carousel-item.second-item");
        
        
        //     const image33 =document.createElement("img");
        //     image33.setAttribute("class", "d-block w-100")
        //    image33.setAttribute("src",'https://image.tmdb.org/t/p/w500'+ tv_list[2].poster_path);
        // image33.setAttribute("alt", "movie-picture");
        
        // imagecontainer.appendChild(image33)
        // }
        //    showimage3 ()
        
        
        //    const showimage5 = (tv_listArray) => {
        //     const imagecontainer = document.querySelector("div.carousel-item.third-item");
        
        
        //     const image33 =document.createElement("img");
        //     image33.setAttribute("class", "d-block w-100")
        //    image33.setAttribute("src",'https://image.tmdb.org/t/p/w500'+ tv_list[3].poster_path);
        // image33.setAttribute("alt", "movie-picture");
        
        // imagecontainer.appendChild(image33)
        // }
        //    showimage5 ()



      //   from moviepage

      // ---------------------------------------------------------------------------------------------------------------------------------------------
// Movies Page

//  TopMovies (cards-container)

const api_key = "89d00b1de712df024dd3a5fdea200041";
const api_URL_TopMovies = `https://api.themoviedb.org/3/movie/popular?api_key=${api_key}`;

console.log(api_key);

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

  for (let i = 0; i < movies.length; i++) {
    const cardContainer = document.createElement("div");
    cardContainer.setAttribute("class", "card");
    cardContainer.setAttribute("style", "width: 18rem;");

    const cardTitle = document.createElement("h6");
    cardTitle.classList.add("card-title");
    cardTitle.innerText = movies[i].original_title;

    const cardImagePoster = document.createElement("img");
    cardImagePoster.setAttribute(
      "src",
      "https://image.tmdb.org/t/p/w500" + movies[i].poster_path
    );
    cardImagePoster.setAttribute("alt", "movie-picture");

    const cardBackdrop = document.createElement("img");
    cardBackdrop.setAttribute(
      "src",
      "https://image.tmdb.org/t/p/w500" + movies[i].backdrop_path
    );
    cardBackdrop.setAttribute("alt", "movie-picture");

    cardContainer.appendChild(cardBackdrop);
    // cardContainer.appendChild(cardImagePoster);
    cardsContainer.appendChild(cardContainer);
    cardContainer.appendChild(cardTitle);
  }
}
getData();

//* 3 generate Dropdown options
const createDropDown = (movies) => {
  const dropdown = document.getElementById("leagueDropdown");

  const competitions = movies.map((movie) => {
    return movie.original_title;
  });

  const setOfCompetitions = new Set(competitions);
  const uniqueCompetitionsArray = [...setOfCompetitions];
  console.log(uniqueCompetitionsArray);

  for (let i = 0; i < uniqueCompetitionsArray.length; i++) {
    const option = document.createElement("option");
    option.innerText = uniqueCompetitionsArray[i];
    option.value = uniqueCompetitionsArray[i];

    dropdown.appendChild(option);
  }
};

//* 4 make controller function

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

//*5 add event listeners
const setEventListeners = (movies) => {
  const competitionDropdown = document.querySelector("#leagueDropdown");
  competitionDropdown.addEventListener("change", function () {
    console.log("selected");
    filterByDropDown(movies);
  });
};

const setEventListeners2 = (movies) => {
  const searchButtom = document.querySelector("#myInput");
  searchButtom.addEventListener("input", function () {
    console.log("gewählt");
    filterBySearch(movies);
  });
};

//* 6 fiter by dropdown
const filterByDropDown = (movies) => {
  // console.log(movies);
  const selectedCompetition = document.querySelector("#leagueDropdown").value;
  console.log(selectedCompetition);

  // filter
  const filteredGames = movies.filter((movie) => {
    return selectedCompetition === movie.original_title;
  });
  console.log(filteredGames);
  displayFilms(filteredGames);
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
