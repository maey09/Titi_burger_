fetch ("https://titi.startwin.fr/products/type/burger")
.then(function(response) {
    return response.json();
})

.then(function(burgers) {
    console.log(burgers);


})

// for (const burger of burgers) {
//     const id = burger._id;
//     const name = burger.name;
//     const description = burger.description;
//     const price = burger.price.$numberDecimal;
//     const img = burger.image;
// return <div>
//     <h3 class= "burger">

//     </h3>
// </div>

// }


/*
créer une fonction
créer concatener String
revoir les éléments du DOM
*/

/* Page accompagnement */


// fetch ("accompagnementUrl")

// export const boissonUrl = "https://titi.startwin.fr/products/type/boisson/";
// export const burgerUrl = "https://titi.startwin.fr/products/type/burger/";
// export const accompagnementUrl = "https://titi.startwin.fr/products/type/accompagnement/";
// export const dessertUrl = "https://titi.startwin.fr/products/type/dessert/";

// import { accompagnementUrl } from "./entry-points";
// const accompagnementEl = document.querySelector("#accompagnement");

// function getJson (url) {
//     return fetch (url).then (function (response) {
//         return response.json();

// }
// );
// }

// getJson (accompagnementUrl)

// fetch ("https://titi.startwin.fr/products/type/accompagnement")
// .then(function(response) {
//     return response.json();
// })

// .then(function(accompagnements){
//     console.log(accompagnements);
// })

// function generateAccompagnementHtml (accompagnements, inputName = "accompagnement") {
//     const id = accompagnement._id;
//     const name = accompagnement.name;
//     const description = accompagnement.description;
//     const price = accompagnement.price.$numberDecimal;
//     const img = accompagnement.image;
//     return `<div>
//         <h3 class= "Les accompagnements"></h3>



let map;

function initMap() {
  map = new google.maps.Map(document.getElementById("maps"), {
    center: { lat: 48.860160, lng: 2.346190 },
    zoom: 8,
  });
}

window.initMap = initMap;



$('.multiple-items').slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 4,
    slideToScroll: 4,


  });



