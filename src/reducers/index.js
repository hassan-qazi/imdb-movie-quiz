import { combineReducers } from 'redux'
import movies from './movies'
import specifiedRank from './specifiedRank'
import randomMovies from './randomMovies'
import guessedRank from './guessedRank'
import correctGuess from './correctGuess'
import score from './score'
import { movieReqHasErrored, movieReqRunning, movieImgReqHasErrored, movieImgReqRunning } from './fetchData';

const movieQuizAppReducer = combineReducers({
  movies,
  specifiedRank,
  randomMovies,
  guessedRank,
  correctGuess,
  score,
  movieReqHasErrored, 
  movieReqRunning,
  movieImgReqHasErrored, 
  movieImgReqRunning 
  
})

export default movieQuizAppReducer
