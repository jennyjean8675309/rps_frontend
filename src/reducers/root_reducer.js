//combineReducers function will be used here...
import { combineReducers } from 'redux';

import { setSoldiersReducer } from './setSoldiersReducer';
import { setCurrentUserReducer } from './setCurrentUserReducer';
import { showLoginReducer } from './showLoginReducer'
import { setSoldierUpgradesReducer } from './setSoldierUpgradesReducer'
import { setUsersReducer } from './setUsersReducer'

const rootReducer = combineReducers({
  soldiers: setSoldiersReducer,
  currentUser: setCurrentUserReducer,
  showLogin: showLoginReducer,
  soldierUpgrades: setSoldierUpgradesReducer,
  users: setUsersReducer
});

export default rootReducer;
