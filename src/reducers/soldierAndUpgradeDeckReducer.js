export const soldierAndUpgradeDeckReducer = (soldierAndUpgradeDeck = [], action) =>{
  switch (action.type) {
    case 'SET_COMBINED_DECK':
      return [...soldierAndUpgradeDeck, ...action.combinedDeck]
    default:
      return soldierAndUpgradeDeck
  }
}
