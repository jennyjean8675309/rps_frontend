export const roundTwoPlayerDealReducer = (roundTwoPlayerDeal = [], action) =>{
  switch (action.type) {
    case 'ROUND_TWO_PLAYER_DEAL':
      let upgrades = action.combinedDeck
      let i = 0
      let newDeal = [...roundTwoPlayerDeal]
      while (newDeal.length < 7){
        if (i % 2 === 0){
          newDeal.push(upgrades[i])
        } i++;
      }
      return newDeal
    case 'REMOVE_SOLDIER_FROM_PLAYERS_SECOND_DEAL':
      let discard = [...roundTwoPlayerDeal]
      let index = discard.indexOf(action.selectedCard)
      console.log(index)
      return [...discard.slice(0, index), ...discard.slice(index + 1)]
    default:
      return roundTwoPlayerDeal
  }
}
