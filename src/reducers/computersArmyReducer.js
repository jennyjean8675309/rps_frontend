export const computersArmyReducer = (computersArmy = null, action) =>{
  switch (action.type) {
    case 'SET_COMPUTERS_ARMY':
      return action.computersArmy
    default:
      return computersArmy
  }
}
