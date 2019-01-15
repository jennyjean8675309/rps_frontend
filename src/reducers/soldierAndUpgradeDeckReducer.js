export const soldierAndUpgradeDeckReducer = (soldierAndUpgradeDeck = [], action) =>{
  switch (action.type) {
    case 'COMBINE_SOLDIER_AND_UPGRADE_DECK':
      console.log('combining soldiers with upgrades...')
      let combinedDeck = [...soldierAndUpgradeDeck, ...action.soldiers, ...action.upgrades]
      let count = combinedDeck.length;
      let t;
      let i;
      while (count){
        i = Math.floor(Math.random() * count--);
        t = combinedDeck[count];
        combinedDeck[count] = combinedDeck[i];
        combinedDeck[i] = t;
      }
      return combinedDeck
    default:
      return soldierAndUpgradeDeck
  }
}
