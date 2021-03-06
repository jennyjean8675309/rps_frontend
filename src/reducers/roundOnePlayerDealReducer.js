export const roundOnePlayerDealReducer = (roundOnePlayerDeal = [], action) =>{
  switch (action.type) {
    case 'ROUND_ONE_PLAYER_DEAL':
      let soldiers = action.shuffledSoldiers
      let i = 0
      let newDeal = []
      while (newDeal.length < 7){
        if (i % 2 === 0){
          newDeal.push(soldiers[i])
        } i++;
      }
      return newDeal
    case 'REMOVE_SOLDIER_FROM_PLAYERS_FIRST_DEAL':
      let discard = [...roundOnePlayerDeal]
      if (discard.length <= 2){
        return discard
      } else {
      let index = discard.indexOf(action.selectedSoldier)
      return [...discard.slice(0, index), ...discard.slice(index + 1)]}
    case 'CLEAR_PLAYERS_DEAL':
      return []
    default:
      return roundOnePlayerDeal
  }
}
