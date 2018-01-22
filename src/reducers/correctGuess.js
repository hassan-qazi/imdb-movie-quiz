const correctGuess = (state = 0, action) => {
    switch (action.type) {
      case 'CORRECT_GUESS':
        return action.specifiedRank === action.guessedRank ? 1 : 0
      case 'RESET_CORRECT_GUESS':
        return 0
      default:
        return state
    }
  }
  
  export default correctGuess
  