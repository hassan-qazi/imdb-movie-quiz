const guessedRank = (state = 0, action) => {
    switch (action.type) {
      case 'RESET_GUESS':
          return 0
      case 'EVALUATE_GUESSED_RANK':
          return action.specifiedRank === action.guessedRank ? 0 : action.guessedRank
       
      default:
        return state
    }
  }
  
  export default guessedRank