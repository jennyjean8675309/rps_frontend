export const computersHandReducer = (computersHand = [], action) =>{
  switch (action.type) {
    case 'COMPUTER_SELECTS_SOLDIERS':
      let deal = action.computersDeal;
      let rocks = [];
      let papers = [];
      let scissors = [];
      deal.forEach(card => {
        if (card.soldier_type_id === 1) {
          rocks.push(card)
        } else if (card.soldier_type_id === 2) {
          papers.push(card)
        } else {
          scissors.push(card)
        }
      })
      let sorted = [rocks, papers, scissors].sort(function (a, b) {
        return b.length - a.length
      })
      return [...sorted.flat().slice(0, 5)]
    case 'COMPUTER_SELECTS_UPGRADES':
      let types = []
      action.computersHand.forEach(card => types.push(card.soldier_type_id))
      console.log(types)
      let newHand = [...computersHand]
      action.computersDeal.map(card => {
        if (types.includes(card.soldier_type_id)) {
          newHand.push(card)
        }
        return newHand
      })
      let reducedDeal = action.computersDeal.filter(card => newHand.includes(card) === false)
      console.log(reducedDeal)
      reducedDeal.sort(function (a, b) {
        return a.points - b.points
      })
      if (newHand.length === 10){
        return newHand
      } else if (newHand.length > 10) {
        return newHand.slice(0, 10)
      } else {
        let i = 0
        do {
          newHand.push(reducedDeal[i])
          i++
        } while (newHand.length < 10);
        return newHand
      }
    case 'COMPUTER_DEPLOY_ARMY':
      console.log("computer making it's choice...", action.selectedArmy)
      let army = [...computersHand].filter(card => card.soldier_type_id === action.selectedArmy)
      return army
    case 'CLEAR_COMPUTERS_HAND':
      return []
    default:
      return computersHand
  }
}
