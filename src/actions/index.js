import { csvParse } from 'd3-dsv'

export const specifyRank = (rank) => ({
  type: 'SPECIFY_RANK',
  //rank transplies into rank: rank
  rank
})

export const evaluateSpecifiedRank = (guessedRank, specifiedRank) => ({
  type: 'EVALUATE_SPECIFIED_RANK',
  guessedRank,
  specifiedRank
})


export const evaluateGuessedRank = (guessedRank, specifiedRank) => ({
  type: 'EVALUATE_GUESSED_RANK',
  guessedRank,
  specifiedRank
})

export const resetGuess = () => ({
  type: 'RESET_GUESS'
})

export const correctGuess = (guessedRank, specifiedRank) => ({
  type: 'CORRECT_GUESS',
  guessedRank,
  specifiedRank
})

export const resetCorrectGuess = (guessedRank) => ({
  type: 'RESET_CORRECT_GUESS'
})

export const setRandomMovies = (randomMovies) => ({
  type: 'SET_RANDOM_MOVIES',
  randomMovies
})

export const evaluateRandomMovies = (guessedRank, specifiedRank) => ({
  type: 'EVALUATE_RANDOM_MOVIES',
  guessedRank,
  specifiedRank
})

/*
export const incrementScore = () => ({
  type: 'INCREMENT_SCORE'
})

export const decrementScore = () => ({
  type: 'DECREMENT_SCORE'
})
*/

export const resetScore = () => ({
  type: 'RESET_SCORE'
})


export const updateScore = (guessedRank, specifiedRank) => ({
  type: 'UPDATE_SCORE',
  guessedRank,
  specifiedRank
  
})


export function movieReqError(bool) {
  return {
      type: 'MOVIE_REQ_ERROR',
      hasErrored: bool
  };
}


export function movieReqRunning(bool) {
  return {
      type: 'MOVIE_REQ_RUNNING',
      reqRunning: bool
  };
}

export function setMovieImgUrl(tconst, imgUrl) {
  return {
      type: 'MOVIE_IMG_URL_SET',
      tconst,
      imgUrl
  };
}

const reqPath = (tconst) => "https://api.themoviedb.org/3/find/" + tconst +
    "?api_key=a85cc5d486c74e4d2d09a782fd34ef6f&language=en-US&external_source=imdb_id";

const imgUrl = (poster_path) => "https://image.tmdb.org/t/p/w185" + poster_path;

export function movieFetchImgData(tconst) {
  return (dispatch) => {
      dispatch(movieReqRunning(true));
      //console.log(url);
      fetch(reqPath(tconst))
          .then((response) => {
              if (!response.ok) {
                  throw Error(response.statusText);
              }

              dispatch(movieReqRunning(false));

              return response;
          })
          .then((response) => response.json())
          .then((movie) => dispatch(setMovieImgUrl(tconst, imgUrl(movie.movie_results[0].poster_path))))
          .catch((err) => {
            console.log(err);
            dispatch(movieReqError(true))});
  };
}

export const loadMovies = (movies) => ({
  type: 'SET_MOVIES',
  movies
})

export function loadCsvData() {
  return (dispatch) => {
    
      fetch("title.top100movies.csv")
          .then((response) => {
              if (!response.ok) {
                  throw Error(response.statusText);
              }
              return response;
          })
          .then((response) => response.text())
          .then((movies) => {           
            dispatch(loadMovies(csvParse(movies)));
          })
          .catch((err) => {
            //console.log(err);
            //dispatch(movieReqError(true))
          });
  };
}


