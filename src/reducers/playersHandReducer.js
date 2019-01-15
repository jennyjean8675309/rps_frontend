export const playersHandReducer = (playersHand = [], action) =>{
  switch (action.type) {
    case 'ADD_SOLDIER_TO_PLAYERS_HAND':
      console.log('adding soldier...', action.selectedSoldier)
      let soldier = action.selectedSoldier
      let newHand = [...playersHand]
      if (playersHand.length < 5 && playersHand.includes(soldier) === false){
        newHand.push(soldier)
      } else {
        alert('You can only enlist five soldiers and cannot enlist the same soldier twice.')
      }
      return newHand
    default:
      return playersHand
  }
}
