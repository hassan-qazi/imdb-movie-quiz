export const getRandomIntInclusive = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive 
}

export const getRandomMovies = (movies, specifiedRank) => {
  
    let firstRandomRank, secondRandomRank;
    
    if (specifiedRank === 1)
    {
        firstRandomRank = getRandomIntInclusive(2,100);
        secondRandomRank = getRandomIntInclusive(2,100);
  
        while (firstRandomRank === secondRandomRank) {
            secondRandomRank = getRandomIntInclusive(2,100);
        }
  
    }
    else if (specifiedRank === 100)
    {
        firstRandomRank = getRandomIntInclusive(1,99);
        secondRandomRank = getRandomIntInclusive(1,99);
        
        while (firstRandomRank === secondRandomRank) {
            secondRandomRank = getRandomIntInclusive(1,99);
        }
    }
    else
    {
        firstRandomRank = getRandomIntInclusive(1,100);
        secondRandomRank = getRandomIntInclusive(1,100);
        
        while (firstRandomRank === specifiedRank 
               || secondRandomRank === specifiedRank
               || firstRandomRank === secondRandomRank) {
            
            firstRandomRank = getRandomIntInclusive(1,100);
            secondRandomRank = getRandomIntInclusive(1,100);
        }
  
    }
  
    let randomMovies = movies.filter(movie => movie.rank === firstRandomRank.toString() 
                                    || movie.rank === secondRandomRank.toString() 
                                    || movie.rank === specifiedRank.toString())
                             .sort(function(a, b){return 0.5 - Math.random()});
  
                 
   return randomMovies;
}
  