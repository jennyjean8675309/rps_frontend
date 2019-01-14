export const computersHandReducer = (computersHand = [], action) =>{
  switch (action.type) {
    case 'ROUND_ONE_COMPUTER_DEAL':
      let soldiers = action.shuffledSoldiers
      let i = 0
      let newDeal = [...computersHand]
      while (newDeal.length < 7){
        if (i % 2 !== 0){
          newDeal.push(soldiers[i])
        } i++;
      }
      console.log("computer's hand...", newDeal)
      return newDeal
    default:
      return computersHand
  }
}
