export const computersScoreReducer = (computersScore = 0, action) =>{
  switch (action.type) {
    case 'SET_COMPUTERS_SCORE':
      return action.computersScore
    case 'SET_COMPUTERS_FINAL_SCORE':
      return computersScore + action.bonusPoints
    default:
      return computersScore
  }
}
