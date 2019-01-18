export const playersScoreReducer = (playersScore = 0, action) =>{
  switch (action.type) {
    case 'SET_PLAYERS_SCORE':
      return action.playersScore
    case 'SET_PLAYERS_FINAL_SCORE':
      return playersScore + action.bonusPoints
    default:
        return playersScore
  }
}
