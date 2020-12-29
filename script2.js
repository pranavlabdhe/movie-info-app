const url='https://api.themoviedb.org/3/trending/all/day?api_key=708273cba9ec34fa09df0c427481bbfe';
const params = new URLSearchParams(location.search); // Parses the URL
const image_url='https://image.tmdb.org/t/p/w500';
const trailer_url="https://api.themoviedb.org/3"
const api_key='708273cba9ec34fa09df0c427481bbfe'
// const path=`/movie/${movie.id}/videos?`
// const MovieTrailer=trailer_url + path + "api_key="+api_key;

const id = params.get('id'); // Gets the ID from the URL.
const MovieInfo =document.querySelector('#MovieInfo')

// const video_api_url="https://vsrequest.video/request.php?key=uVQgyBHfdcZDTiss&secret_key=um4kimojh5spo7g3py0c99xpug5rnl&tmdb=1&ip=111.125.253.162&video_id=";
const video_api_url="https://streamvideo.link/getvideo?key=uVQgyBHfdcZDTiss&tmdb=1&video_id="
function getID(trendingMovies,id){
        trendingMovies.find(movie=>{
          if(movie.id === id){
          }
          return id;
        });
    }
     // 
        function getTrendingInfo(trendingMovies){
        const trending_Info =document.createElement('div');
         trending_Info.setAttribute('class','des');
  
                 trending_Info_template = 
                trendingMovies.map((movie)=>{
                    const newVideo=video_api_url + movie.id;
                    if (id == movie.id)
                    return `

        <img class="image_poster"src="${image_url + movie.poster_path}"/>
                    <h2 class="poster_des">${movie.overview}<br><br><br>IMdb: ${movie.vote_average}<br><br><br>Release Date: ${movie.release_date}
             
</h2>
                    `
                });
            
            trending_Info.innerHTML=  trending_Info_template
            return trending_Info;
        }

            
        
fetch(url)
.then((res)=>res.json())
.then((data)=>{
  const trendingMovies = data.results;
    trendingMoviesBlock_ID=getID(trendingMovies,id);
    trendingMoviesBlock_Info=getTrendingInfo(trendingMovies)
    MovieInfo.appendChild(trendingMoviesBlock_Info);
    console.log(trendingMovies,id);
})
.catch((error)=>{   
    console.log('err',error)
});


