export const setSoldiersReducer = (soldiers = [], action) =>{
  switch (action.type) {
    case 'SET_SOLDIERS':
      return [...soldiers, ...action.soldiers]      
    default:
      return soldiers
  }
}
