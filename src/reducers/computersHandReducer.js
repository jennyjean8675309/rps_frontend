export const computersHandReducer = (computersHand = [], action) =>{
  switch (action.type) {
    case 'COMPUTER_SELECTS_SOLDIERS':
      // console.log('computer choosing soldiers...', action.computersDeal)
      let cards = []
      action.computersDeal.forEach(card =>{
        if (cards[card.soldier_type_id]){
          cards[card.soldier_type_id]++
        } else {
          cards[card.soldier_type_id] = 1
        }
      })
      // console.log(cards)
      let cardArray = []
      let card_type;
      for (card_type in cards) {
      cardArray.push({ card_type: cards[card_type]})
      }
      // console.log(cardArray)
      // cards.sort(function (a, b){
      //   return a.value - b.value;
      // })
      return [...action.computersDeal.slice(0, 5)]
    default:
      return computersHand
  }
}
