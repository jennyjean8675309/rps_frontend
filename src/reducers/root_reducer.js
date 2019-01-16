//combineReducers function will be used here...
import { combineReducers } from 'redux';

import { setSoldiersReducer } from './setSoldiersReducer';
import { setCurrentUserReducer } from './setCurrentUserReducer';
import { showLoginReducer } from './showLoginReducer';
import { setSoldierUpgradesReducer } from './setSoldierUpgradesReducer';
import { setUsersReducer } from './setUsersReducer';
import { roundOneComputerDealReducer } from './roundOneComputerDealReducer';
import { roundOnePlayerDealReducer } from './roundOnePlayerDealReducer';
import { playersHandReducer } from './playersHandReducer';
import { computersHandReducer } from './computersHandReducer';
import { soldierAndUpgradeDeckReducer } from './soldierAndUpgradeDeckReducer';
import { roundTwoComputerDealReducer } from './roundTwoComputerDealReducer'
import { roundTwoPlayerDealReducer } from './roundTwoPlayerDealReducer'

const rootReducer = combineReducers({
  soldiers: setSoldiersReducer,
  currentUser: setCurrentUserReducer,
  showLogin: showLoginReducer,
  soldierUpgrades: setSoldierUpgradesReducer,
  users: setUsersReducer,
  roundOneComputerDeal: roundOneComputerDealReducer,
  roundOnePlayerDeal: roundOnePlayerDealReducer,
  playersHand: playersHandReducer,
  computersHand: computersHandReducer,
  soldierAndUpgradeDeck: soldierAndUpgradeDeckReducer,
  roundTwoComputerDeal: roundTwoComputerDealReducer,
  roundTwoPlayerDeal: roundTwoPlayerDealReducer
});

export default rootReducer;
