export const setSoldiersReducer = (state = [], action) =>{
  switch (action.type) {
    case 'SET_SOLDIERS':
      return [...state, ...action.soldiers]
    case 'SHUFFLE_SOLDIERS':
      let count = action.soldiers.length;
      let t;
      let i;
      while (count){
        i = Math.floor(Math.random() * count--);
        t = action.soldiers[count];
        action.soldiers[count] = action.soldiers[i];
        action.soldiers[i] = t;}
      return [...state, ...action.soldiers]
    default:
      return state
  }
}
