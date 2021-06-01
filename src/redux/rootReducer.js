import { combineReducers } from 'redux';

import { profileReducer as profile } from './profile/reducer';

const rootReducer = combineReducers({
  profile,
});

export default rootReducer;
