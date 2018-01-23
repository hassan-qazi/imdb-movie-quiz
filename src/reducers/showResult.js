const showResult = (state = 1, action) => {
    switch (action.type) {
      case 'SHOW_RESULT':
          return 1
      case 'HIDE_RESULT':
          return 0
      case 'EVALUATE_RESULT':
          return action.specifiedRank === action.guessedRank ? 1 : 0
       
      default:
        return state
    }
  }
  
  export default showResult