//    function getData() {fetch ("")
//     .then(
//         (response) => {
//         console.log(response);

//    })

//    function getData() {
//     fetch("https://ghibliapi.vercel.app/films")
//       .then((response) => {
//         console.log("response :>> ", response);
//         const resolvedResponse = response.json();
//           console.log("resolvedResponse :>> ", resolvedResponse);
//         return resolvedResponse;
//         return response.json();
//       })}

//   function getData() {
//     fetch("https://restcountries.com/v3.1/all")
//       .then((response) => {
//         // console.log("response :>> ", response);
//         const resolvedResponse = response.json();
//           console.log("resolvedResponse :>> ", resolvedResponse);
//         return resolvedResponse;
//         return response.json();
//       })
//       .then((result) => {
//         // console.log("result :>> ", result);
//         const countries = result;
//         buildMyCards(result);
//         buildMyCardsWithTemplating(result);
//         console.log(result);
//       })
//       .catch((error) => {
//         console.log("error :>> ", error);
//       });
//   }

//   buildMyCards(countries);



