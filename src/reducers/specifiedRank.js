const specifiedRank = (state = 0, action) => {
    switch (action.type) {
      case 'SPECIFY_RANK':
        return action.rank
      case 'EVALUATE_SPECIFIED_RANK':
        return action.specifiedRank === action.guessedRank ? 0 : action.specifiedRank
      default:
        return state
    }
  }
  
  export default specifiedRank
  