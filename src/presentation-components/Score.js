import React from 'react'
import { connect } from 'react-redux'


let Score = ({ score }) => (
    <div className="score">
      Your Score
      <span>{score}</span>
    </div>
)

const mapStateToProps = (state) => ({
    score: state.score 
})

Score = connect(
  mapStateToProps,
  null
)(Score)

export default Score
