//GO WATCH IT API=a606821cbb4c2c89b834b93e27cd0267
const multi_search='https://api.themoviedb.org/3/search/multi?api_key=708273cba9ec34fa09df0c427481bbfe&language=en-US&page=1&include_adult=false'
const api_key='708273cba9ec34fa09df0c427481bbfe'
// const url = 'http://api.themoviedb.org/3/search/movie?api_key=708273cba9ec34fa09df0c427481bbfe'
const image_url='https://image.tmdb.org/t/p/w500';
const video_url="https://api.themoviedb.org/3/movie/370172/videos?api_key=708273cba9ec34fa09df0c427481bbfe&language=en-US"
const url='https://api.themoviedb.org/3/trending/movie/day?api_key=708273cba9ec34fa09df0c427481bbfe';
const slideShow = document.querySelector('#slideshow');
const topMovies =document.querySelector('#top_movies');
const SearchButton =document.querySelector('#search');
const InputValue = document.querySelector('#input_value');
const Trending_movies_section = document.querySelector('#trending_movies_section');

// original_title
function movieImageSection(movies){
    return movies.map((movie)=>{
        return ` 
        <div class="mySlides fade">
        <div class="slider_images"style="background-image:url(${image_url + movie.backdrop_path});background-size:cover;background-position:center;">
        <span class="text fade">
        ${movie.title || movie.original_name}
        </span>
        <span class="synopsis fade">
        <h4>(${movie.media_type})</h4>
       <h5>${movie.overview}</h5>
   
        </span>
      </div>
       
        </div> 
         `;

    }) 
}
SearchButton.onclick = function(event){
    event.preventDefault();
    $('#search').prop('disabled', true);
    $('#search').prop('disabled', false);
    const value = InputValue.value;
    
    console.log(value);
    const newUrl =multi_search + '&query=' +value; 
   
    function TopMovies(searched_movies){
        const sectionOfMovies = document.createElement('div');
        sectionOfMovies.classList.add('search_movie_section');
        sectionOfMovies.setAttribute('class','search_movie_section')
        searched_movies.map((searched_movie)=>{
            const img= document.createElement('img');
            const a= document.createElement('a');
            img.src= image_url + searched_movie.poster_path;
            a.href=`index3.html?value=${searched_movie.title || searched_movie.original_name || searched_movie.original_title}`;
            a.appendChild(img);
            sectionOfMovies.appendChild(a);
          
        });
        
        return sectionOfMovies;
    }

    fetch(newUrl)
    .then((res)=>res.json())
    .then((movie_data)=>{
        const searched_movies= movie_data.results;
        const Poster_Block = TopMovies(searched_movies);
        topMovies.append(Poster_Block)
        console.log('movies',movie_data);
        InputValue.value='';
        $('#top_movies').html('');
        $('#top_movies').append(Poster_Block)
    })
    .catch((error)=>{   
        console.log('err',error)
    }) 
}

    function image_slider(movies){
       const movie_Template=document.createElement('div')
       movie_Template.setAttribute('class','images')
       const movies_top=
       `
        ${movieImageSection(movies)}
        <a class="prev" onclick="plusSlides(-1)">&#10094;</a>
        <a class="next" onclick="plusSlides(1)">&#10095;</a>
      `
      movie_Template.innerHTML=movies_top;
        return movie_Template
    }  
function getTrendingMovies(Trending_movies){
  const trending = document.createElement('div')
  trending.classList.add('All_trending_movies')
  Trending_movies.map((Trending_movie)=>{
    const img = document.createElement('img');
    const a = document.createElement('a'); 
    const Content =document.createElement('div');
    const img_text=document.createElement('div')
    const img_container=document.createElement('div');
    a.className="main_container"
    img_container.className="container"
    img.className="img_effect";
 
    // over.className="overlay"
    img_text.className="text"
    Content.className="content"
    img.src = image_url + Trending_movie.backdrop_path;
    img_text.innerHTML=`${Trending_movie.original_title}`
    // a.textContent=Trending_movie.overview;
    a.href=`index2.html?id=${Trending_movie.id}`

    a.appendChild(img_container);
    img_container.appendChild(img);
    img_container.appendChild(Content);
    Content.appendChild(img_text);
    // img.appendChild(over);
    // over.appendChild(h1)
    trending.appendChild(a);

  });  
  return trending;
}



    ///SLIDER

    fetch(url)
    .then((res)=>res.json())
    .then((data)=>{
        let movies = data.results;
        const MovieBlock = image_slider(movies)
        slideShow.append(MovieBlock);
        console.log('slider Movies',data);
    })
    .catch((error)=>{   
        console.log('err',error)
    }); 

    // TRENDING MOVIES
    fetch(url)
    .then((res)=>res.json())
    .then((data)=>{
        let Trending_movies =data.results
        const Trending_block =getTrendingMovies(Trending_movies);
        Trending_movies_section.appendChild(Trending_block)
        console.log('trending data',data);
    })
    .catch((error)=>{   
        console.log('err',error)
    });
    
  


         



// backdrop_path
// function sliderlogic(movies){
//  I have only used const newUrl=multi_search +'&query='+title to fetch the API so that I can get the array of objects of movies.So with the help of that I can display properties of object.I just want to know is there any other way to write that line.And writing something else instead of "title" ,and get the right URL to fetch the API.   

    
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

