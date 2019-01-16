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
    case 'COMPUTER_SELECTS_UPGRADES':
      console.log('computer choosing...', action.computersDeal, action.computersHand)
      // let types = []
      // action.computersHand.forEach(card => types.push(card.soldier_type_id))
      // console.log(types)
      // let newHand = [...computersHand]
      // action.computersDeal.forEach(card =>{
      //   while (newHand.length < 10 && newHand.includes(card) === false){
      //     if (types.includes(card.soldier_type_id) && card.points === 3){
      //       newHand.push(card)
      //     }
      //   }
      //   while (newHand.length < 10 && newHand.includes(card) === false){
      //     if (types.includes(card.soldier_type_id) && card.points === 2){
      //       newHand.push(card)
      //     }
      //   }
      //   while (newHand.length < 10 && newHand.includes(card) === false){
      //     newHand.push(card)
      //   }
      // console.log(newHand)
      // })
      return [...computersHand, ...action.computersDeal.slice(0, 5)]
    case 'COMPUTER_DEPLOY_ARMY':
      console.log("computer making it's choice...", action.selectedArmy)
      let army = [...computersHand].filter(card => card.soldier_type_id === action.selectedArmy)
      return army
    default:
      return computersHand
  }
}
