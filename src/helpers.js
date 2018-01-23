// This function is a copy of Mozilla's implementation
export const getRandomIntInclusive = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive 
}

export const getRandomMovies = (movies, specifiedRank) => {
  
    let firstRandomRank, secondRandomRank;

    firstRandomRank = getRandomIntInclusive(1,100);
    secondRandomRank = getRandomIntInclusive(1,100);

    while (firstRandomRank.toString() === specifiedRank.toString() 
        || secondRandomRank.toString() === specifiedRank.toString()
        || firstRandomRank.toString() === secondRandomRank.toString()) {
     
        firstRandomRank = getRandomIntInclusive(1,100);
        secondRandomRank = getRandomIntInclusive(1,100);
    }

    let randomMovies = movies.filter(movie => movie.rank === firstRandomRank.toString() 
                                    || movie.rank === secondRandomRank.toString() 
                                    || movie.rank === specifiedRank.toString())
                             .sort(function(a, b){return 0.5 - Math.random()});
  
                 
   return randomMovies;
}

export const reqPath = (tconst) => "https://api.themoviedb.org/3/find/" + tconst +
    "?api_key=a85cc5d486c74e4d2d09a782fd34ef6f&language=en-US&external_source=imdb_id";

export const imgUrl = (poster_path) => "https://image.tmdb.org/t/p/w185" + poster_path;
  