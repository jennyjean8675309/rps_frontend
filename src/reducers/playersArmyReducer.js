export const playersArmyReducer = (playersArmy = null, action) =>{
  switch (action.type) {
    case 'SET_PLAYERS_ARMY':
      return action.playersArmy
    default:
      return playersArmy
  }
}
