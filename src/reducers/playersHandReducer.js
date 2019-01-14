export const playersHandReducer = (playersHand = [], action) =>{
  switch (action.type) {
    case 'ROUND_ONE_PLAYER_DEAL':
      let soldiers = action.shuffledSoldiers
      let i = 0
      let newDeal = [...playersHand]
      while (newDeal.length < 7){
        if (i % 2 === 0){
          newDeal.push(soldiers[i])
        } i++;
      }
      console.log("player's hand...", newDeal)
      return newDeal
    default:
      return playersHand
  }
}
