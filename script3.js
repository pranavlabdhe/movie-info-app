const multi_search='https://api.themoviedb.org/3/search/multi?api_key=708273cba9ec34fa09df0c427481bbfe&language=en-US&page=1&include_adult=false';
const params = new URLSearchParams(window.location.search); // Parses the URL
const image_url='https://image.tmdb.org/t/p/w500';
const value = params.get('value');
// const video_api_url="https://vsrequest.video/request.php?key=uVQgyBHfdcZDTiss&secret_key=um4kimojh5spo7g3py0c99xpug5rnl&tmdb=1&ip=111.125.253.162&video_id="
const video_api_url="https://streamvideo.link/getvideo?key=uVQgyBHfdcZDTiss&tmdb=1&video_id="
// const video_api_url="https://streamvideo.link/getvideo?key=uVQgyBHfdcZDTiss&video_id="

// const video_api_url="https://vsrequest.video/request.php?key=uVQgyBHfdcZDTiss&secret_key=um4kimojh5spo7g3py0c99xpug5rnl&video_id="
// original_name

const Searched_Movie =document.querySelector('#Searched_movie');
const newUrl = multi_search + '&query='+ value;
const watch_movie=document.querySelector("#watch");
// function getID(searchedMovies,id){
//     searchedMovies.find(movie=>{
//       if(movie.id===id){
//       }
//       return id;
//     });
// }
// function getInfo_OfSearchMovie(searchedMovies){
//     const SearchMovie = document.createElement('div')
//     SearchMovie.setAttribute('class','des');
//     Search_movie_Template = 
//     searchedMovies.map((movie)=>{
//         const newVideo=video_api_url + movie.id 
//         if (value == movie.title && value == movie.original_title || value == movie.original_name)
//             return `
//             <img class="image_poster" src="${image_url + movie.poster_path}"/>
//             <h2 class="poster_des">${movie.overview}<br><br><br>IMdb: ${movie.vote_average}<br><br><br>Release Date: ${movie.release_date}
//             <a href="${newVideo}"></a>
//             </h2>
//            `
//         });  
    
//     SearchMovie.innerHTML =Search_movie_Template
//     return SearchMovie;
// }
function getInfo_OfSearchMovie(searchedMovies) {

    const SearchMovie = document.createElement('div')
    SearchMovie.setAttribute('class','des');
 ;
    Search_movie_Template = 
    searchedMovies.map((movie)=>{
        
        const newVideo=video_api_url + movie.id 
        if (value == movie.title && value == movie.original_title || value == movie.original_name)
            return `
            <img class="image_poster" src="${image_url + movie.poster_path}"/>
            <h2 class="poster_des">${movie.overview}<br><br><br>IMdb: ${movie.vote_average}<br><br><br>Release Date: ${movie.release_date}
       <br>
</h2>
           `
        });  
    
    SearchMovie.innerHTML =Search_movie_Template
    return SearchMovie;
}

/* <a href="${newVideo}">Watch</a> */
fetch(newUrl)
.then((res)=>res.json())
.then((data)=>{
    const searchedMovies=data.results;
    // searchedMoviesBlock_ID=getID(searchedMovies,id);
    const searchedMoviesBlock_Info=getInfo_OfSearchMovie(searchedMovies);
    Searched_Movie.appendChild(searchedMoviesBlock_Info);
    console.log(searchedMovies);
})
.catch((error)=>{   
    console.log('err',error)
}) 
