import React, { Component } from 'react';
import { connect } from 'react-redux';
import { evaluateGuessedRank, 
         updateScore, 
         evaluateSpecifiedRank, 
         correctGuess, 
         evaluateRandomMovies, 
         movieFetchImgData,
         showResult 
        } from '../actions'
import Movie from '../presentation-components/Movie'

class RandomMovieList extends Component {
     
  componentDidUpdate(prevProps) {
      let {randomMovies, specifiedRank, MoviesFetchImgData} = this.props; 
      
      if (prevProps.specifiedRank !== specifiedRank) {
          randomMovies.forEach(movie => MoviesFetchImgData(movie.tconst));
      }
      
  }
   
  render() {
    
    let {randomMovies, specifiedRank, //score, 
         EvaluateGuessedRank, EvaluateRandomMovies, 
         EvaluateSpecifiedRank, CorrectGuess, UpdateScore, ShowResult
        } = this.props;
    
    return(
      <div style={{
          display: specifiedRank.toString() === "0" ? 'none' : 'block'
        }}>
        <h2>
          Which of these movies is ranked {specifiedRank}?
        </h2>
        <ul>
          {randomMovies.map(movie => 
            <Movie
            key={movie.tconst}
            {...movie}
            onClick={() => {
              UpdateScore(movie.rank, specifiedRank)
              CorrectGuess(movie.rank, specifiedRank)
              EvaluateRandomMovies(movie.rank, specifiedRank)
              EvaluateGuessedRank(movie.rank, specifiedRank)
              EvaluateSpecifiedRank(movie.rank, specifiedRank)
              ShowResult()

              /* Quick Hack to show alerts...should use Redux store to manage alerts as well */
              /*
              if(movie.rank.toString() !== specifiedRank.toString())
              {
                score--;
                alert("Wrong Answer!\n\nYour Score is now: " + score)
              }
              else
              {
                score++;
                alert("Right Answer!\n\nYour Score is now: " + score)
              }
              */
            }}
            />
          )}

        </ul>
      </div>)
  }
}

const mapStateToProps = (state) => ({
  randomMovies: state.randomMovies,
  specifiedRank: state.specifiedRank
  //score: state.score
})

const mapDispatchToProps = {
  EvaluateGuessedRank: evaluateGuessedRank,
  UpdateScore: updateScore,
  CorrectGuess: correctGuess,
  EvaluateSpecifiedRank: evaluateSpecifiedRank,
  EvaluateRandomMovies: evaluateRandomMovies,
  MoviesFetchImgData: movieFetchImgData,
  ShowResult: showResult
}

RandomMovieList = connect(
  mapStateToProps,
  mapDispatchToProps
)(RandomMovieList)

export default RandomMovieList
