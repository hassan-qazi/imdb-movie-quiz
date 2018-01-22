import React from 'react'
import { connect } from 'react-redux'
import { getRandomIntInclusive } from '../helpers'

let Result = ({correctGuess, guessedRank}) => {   
   
    let bRed = getRandomIntInclusive(150,255), 
        bGreen = getRandomIntInclusive(0,70),
        bBlue = bGreen;

    if(guessedRank.toString() === "0" && correctGuess === 0)
    {
        return (<div className="result">
                    <span></span>
                </div>)
    }
        
    if(correctGuess === 0)
    {
        return (<div className="result">
                    <span className="error" style={{
                                                        backgroundColor: 'rgba(' + bRed + ',' + bGreen + ',' + bBlue + ', 1)'
                                                    }}>
                    Wrong Answer - please try again</span>
                </div>)
    }
    else if (correctGuess === 1) {
        return (<div className="result">
                    <span className="success">You were correct - try another one now!</span>
                </div>)
    }
    
}

const mapStateToProps = (state) => ({
      correctGuess: state.correctGuess,
      guessedRank: state.guessedRank
})
  
Result = connect(
        mapStateToProps,
        null
      )(Result);
   
export default Result;







  
