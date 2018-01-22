import React from 'react'
import { connect } from 'react-redux'
//import { specifyRank, setRandomMovies, resetGuess, resetEvaluation} from '../actions'
import { specifyRank, setRandomMovies, resetGuess, resetCorrectGuess} from '../actions'
import { getRandomMovies} from '../helpers'

let SpecifyRank = ({ movies, specifiedRank, dispatch }) => {
  let input;


  return (
    <div style={{
            display: specifiedRank.toString() === "0" ? 'block' : 'none'
          }}>
      <form onSubmit={e => {
                              e.preventDefault()
                              if (!input.value.trim()) {
                                return
                              }
                              dispatch(resetGuess());  

                              dispatch(resetCorrectGuess());

                              dispatch(specifyRank(input.value));
                            
                              if(specifiedRank.toString() !== input.value)
                              {
                                dispatch(setRandomMovies(getRandomMovies(movies,input.value)));
                              }

                              input.value = ''
                           }
                      } >
        <h2> IMDB Top 100 Movie Quiz </h2>
        <h3>Enter in the movie ranking you want to guess...</h3>
        <input type="number" min="1" max="100" placeholder="Rank" ref={node => {
                                                          input = node
                                                        }} />
        <br/>
        <button type="submit">
          Start Quiz
        </button>
      
      </form>
    </div>
  )
}
const mapStateToProps = (state) => ({
  movies: state.movies,
  specifiedRank: state.specifiedRank
})

SpecifyRank = connect(
  mapStateToProps,
  null
)(SpecifyRank)

export default SpecifyRank
