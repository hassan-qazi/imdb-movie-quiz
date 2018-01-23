import React, { Component } from 'react';
import { connect } from 'react-redux'
import { specifyRank, setRandomMovies, resetGuess, resetCorrectGuess} from '../actions'
import { getRandomMovies} from '../helpers'

class SpecifyRank extends Component {
  
  componentDidUpdate(prevProps){
    let {specifiedRank} = this.props;
    
    if (prevProps.specifiedRank !== specifiedRank) {
      //this.input.focus(); 
    }
  }

  handleSubmit = () => {
    
    let {movies, specifiedRank, dispatch} = this.props;
    
    if (!this.input.value.trim()) {
      this.input.focus();
      return
    }
    dispatch(resetGuess());  

    dispatch(resetCorrectGuess());

    dispatch(specifyRank(this.input.value));
  
    if(specifiedRank.toString() !== this.input.value)
    {
      dispatch(setRandomMovies(getRandomMovies(movies,this.input.value)));
    }

    this.input.value = ''

  }

  render() {
    
    let {specifiedRank} = this.props;
    
    return (
      <div style={{
              display: specifiedRank.toString() === "0" ? 'block' : 'none'
            }}>
        <form onSubmit={e => {
                                e.preventDefault()
                                this.handleSubmit()
                              }
                        } >
          <h2> IMDB Top 100 Movie Quiz </h2>
          <h3>Enter in the movie ranking you want to guess...</h3>
          <input autoFocus type="number" min="1" max="100" placeholder="Rank" ref={node => {
                                                            this.input = node;
                                                          }} />
          <br/>
          <button type="submit">
            Start Quiz
          </button>
        
        </form>
      </div>
    )
  }
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
