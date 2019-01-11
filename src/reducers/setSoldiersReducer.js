export const setSoldiersReducer = (state = [], action) =>{
  switch (action.type) {
    case 'SET_SOLDIERS':
      return [...state, ...action.soldiers]
    default:
      return state
  }
}
