export const roundTwoComputerDealReducer = (roundTwoComputerDeal = [], action) =>{
  switch (action.type) {
    case 'ROUND_TWO_COMPUTER_DEAL':
      let upgrades = action.combinedDeck
      let i = 0
      let newDeal = [...roundTwoComputerDeal]
      while (newDeal.length < 7){
        if (i % 2 !== 0){
          newDeal.push(upgrades[i])
        } i++;
      }
      console.log(newDeal)
      return newDeal
    case 'CLEAR_COMPUTERS_SECOND_DEAL':
      return []
    default:
      return roundTwoComputerDeal
  }
}
