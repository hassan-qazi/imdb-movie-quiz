import React, {Component} from 'react'
import { connect } from 'react-redux'
import { hideResult } from '../actions'

class Result extends Component {
     
    componentWillUpdate(nextProps) {
        
        let {correctGuess, guessedRank, dispatch} = nextProps; 
        
        if(correctGuess === 0 && guessedRank.toString() !== "0")
        {
            setTimeout(() => dispatch(hideResult()), 750);
        }

    }

    render() {

        let {correctGuess, guessedRank, showResult} = this.props; 

        //console.log(showResult);
        
        if((guessedRank.toString() === "0" && correctGuess === 0))
        {
            return (<div className="result">
                        <span></span>
                    </div>)
        }
            
        if(correctGuess === 0)
        {
            return (<div className="result">
                        <span className={showResult ? "error": "error fadeOut"}>
                        Wrong Answer - please try again</span>
                    </div>)
        }
        else if (correctGuess === 1) {
            return (<div className="result">
                        <span className="success">You were correct - try another one now!</span>
                    </div>)
        }
    }
}

const mapStateToProps = (state) => ({
      correctGuess: state.correctGuess,
      guessedRank: state.guessedRank,
      showResult: state.showResult
})
  
Result = connect(
        mapStateToProps,
        null
      )(Result);
   
export default Result;







  
