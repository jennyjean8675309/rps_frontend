//combineReducers function will be used here...
import { combineReducers } from 'redux';

import { initialReducer } from './initialReducer';

const rootReducer = combineReducers({
  soldiers: initialReducer
});

export default rootReducer;
