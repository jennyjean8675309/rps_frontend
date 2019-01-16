export const roundOnePlayerDealReducer = (roundOnePlayerDeal = [], action) =>{
  switch (action.type) {
    case 'ROUND_ONE_PLAYER_DEAL':
      let soldiers = action.shuffledSoldiers
      let i = 0
      let newDeal = [...roundOnePlayerDeal]
      while (newDeal.length < 7){
        if (i % 2 === 0){
          newDeal.push(soldiers[i])
        } i++;
      }
      return newDeal
    case 'REMOVE_SOLDIER_FROM_PLAYERS_FIRST_DEAL':
      let discard = [...roundOnePlayerDeal]
      let index = discard.indexOf(action.selectedSoldier)
      return [...discard.slice(0, index), ...discard.slice(index + 1)]
    default:
      return roundOnePlayerDeal
  }
}
