export const setSoldiersReducer = (soldiers = [], action) =>{
  switch (action.type) {
    case 'SET_SOLDIERS':
      return [...soldiers, ...action.soldiers]
    case 'REDUCE_SOLDIER_DECK_AFTER_ROUND':
      console.log("taking players' cards out of soldier deck...")
      let playersCards = [...action.playersHand, ...action.computersHand]
      console.log(playersCards)
      let reducedSoldiers = soldiers.filter(soldier => playersCards.includes(soldier) === false )
      return reducedSoldiers
    default:
      return soldiers
  }
}
