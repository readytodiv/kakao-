async function fetchMovies(){
    const url = "https://api.themoviedb.org/3/movie/popular?api_key=c933460f20c1289576e32c382d67160b&language=ko-KR";


    try{
        const response = await fetch(url);
        const data = await response.json();
        console.log(data.results);
    }
    catch(error){
        console.error(`에러발생: ${error}`);
    }
}

fetchMovies();