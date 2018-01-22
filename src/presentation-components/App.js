import React from 'react';
import SpecifyRank from '../container-components/SpecifyRank'
import RandomMovieList from '../container-components/RandomMovieList'
import Result from './Result'
import Score from './Score'

const App = () => (
  <div>
    <SpecifyRank />
    <RandomMovieList />
    <Result />
    <Score />
  </div>
)

export default App
