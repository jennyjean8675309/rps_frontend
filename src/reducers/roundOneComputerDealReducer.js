export const roundOneComputerDealReducer = (roundOneComputerDeal = [], action) =>{
  switch (action.type) {
    case 'ROUND_ONE_COMPUTER_DEAL':
      let soldiers = action.shuffledSoldiers
      let i = 0
      let newDeal = [...roundOneComputerDeal]
      while (newDeal.length < 7){
        if (i % 2 !== 0){
          newDeal.push(soldiers[i])
        } i++;
      }
      return newDeal
    default:
      return roundOneComputerDeal
  }
}
