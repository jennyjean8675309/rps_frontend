export const setSoldierUpgradesReducer = (state = [], action) =>{
  switch (action.type) {
    case 'SET_SOLDIER_UPGRADES':
      return [...state, ...action.upgrades]
    default:
      return state
  }
}
