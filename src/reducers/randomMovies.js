const randomMovies = (state = [], action) => {
    switch (action.type) {
      case 'SET_RANDOM_MOVIES':
        return action.randomMovies
      case 'EVALUATE_RANDOM_MOVIES':
        return action.specifiedRank === action.guessedRank ? [] : state
      case 'MOVIE_IMG_URL_SET':
        return state.map(movie => {
          
          if(movie.tconst.toString() === action.tconst.toString()) 
          {
             return {...movie, imgUrl: action.imgUrl}
          }
          else
          {
             return movie
          }
        }
        )
      default:
        return state
    }
  }
  
  export default randomMovies
  