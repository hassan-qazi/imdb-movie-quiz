import {loadState, saveState} from '../localStorage'

let _score = loadState('score') === undefined ? 0 : loadState('score');

const score = (state = 0, action) => {
    switch (action.type) {
      case 'UPDATE_SCORE':
      {  
         
          if(action.specifiedRank === action.guessedRank)
              _score++
          else
              _score--
         
          saveState('score', _score);

      return _score;
      }
      case 'RESET_SCORE':
      {  
        _score = 0;
        saveState('score', _score);
        return _score;
      }
      default:
        {
            return state;
        }
    }
  }
  
  export default score
  