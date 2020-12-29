"use strict";

var api_key = '708273cba9ec34fa09df0c427481bbfe'; // const url = 'http://api.themoviedb.org/3/search/movie?api_key=708273cba9ec34fa09df0c427481bbfe'

var image_url = 'https://image.tmdb.org/t/p/w500';
var url = 'https://api.themoviedb.org/3/trending/all/day?api_key=708273cba9ec34fa09df0c427481bbfe';
var slideShow = document.querySelector('#slideshow'); // original_title

function movieImageSection(movies) {
  return movies.map(function (movie) {
    return " \n        <div class=\"mySlides fade\">\n        <img class=\"slider_images\" src=".concat(image_url + movie.backdrop_path, "  />\n        <div class=\"text fade\">\n        ").concat(movie.title || movie.original_name, "\n        </div>   \n        <div class=\"synopsis fade\">\n       <h5>").concat(movie.overview, "<br>").concat(movie.media_type, "</h5>\n   \n        </div>\n        </div> \n         ");
  });
}

function image_slider(movies) {
  var slider_container = document.createElement('div');
  slider_container.setAttribute('class', 'images');
  var movieTemplate = "\n     \n        ".concat(movieImageSection(movies), "\n        <a class=\"prev\" onclick=\"plusSlides(-1)\">&#10094;</a>\n        <a class=\"next\" onclick=\"plusSlides(1)\">&#10095;</a>\n      </div>\n  \n      ");
  slider_container.innerHTML = movieTemplate;
  return slider_container;
}

fetch(url).then(function (res) {
  return res.json();
}).then(function (data) {
  var movies = data.results;
  var MovieBlock = image_slider(movies);
  slideShow.append(MovieBlock);
  console.log('trending data', data);
})["catch"](function (error) {
  console.log('err', error);
}); // backdrop_path
// function sliderlogic(movies){
// }
// function imageSlider(movies){
//     var swiper_images = document.createElement('div');
//     swiper_images.setAttribute('images','class');
//     const movieTemplate=
//     `  
//     <div>
//      ${sliderlogic(movies)}
// </div>
//     `
//     swiper_images.innerHTML=movieTemplate;
//     return swiper_images;
// }
// }
// return movies.map((movie)=>{
//     return `  
//     <img src=${image_url + movie.backdrop_path}></div> `