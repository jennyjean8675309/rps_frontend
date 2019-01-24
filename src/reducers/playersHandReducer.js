export const playersHandReducer = (playersHand = [], action) =>{
  switch (action.type) {
    case 'ADD_SOLDIER_TO_PLAYERS_HAND':
      let soldier = action.selectedSoldier
      let newHand = [...playersHand]
      if (playersHand.length < 5 && playersHand.includes(soldier) === false){
        newHand.push(soldier)
      } else {
        alert('You can only enlist five soldiers and cannot enlist the same soldier twice.')
      }
      return newHand
    case 'ADD_SOLDIER_OR_UPGRADE_TO_PLAYERS_HAND':
      console.log('adding card...', action.card)
      let card = action.card
      let updatedHand = [...playersHand]
      if (playersHand.length < 10 && playersHand.includes(card) === false){
        updatedHand.push(card)
      } else {
        alert('You can only choose five cards and cannot choose the same card twice.')
      }
      return updatedHand
    case 'PLAYER_DEPLOY_ARMY':
      return action.selectedArmy
    case 'CLEAR_PLAYERS_HAND':
      return []
    default:
      return playersHand
  }
}
