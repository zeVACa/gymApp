import { combineReducers } from 'redux';
// import trainingPlanReducer from './trainingPlan';

const setUser = (state = null, action) => {
  return { ...state };
};

const setTrainingPlan = (state = null, action) => {
  return { ...state };
};

const setLastTraining = (state = null, action) => {
  return { ...state };
};

const rootReducer = combineReducers({
  user: setUser,
  trainingPlan: setTrainingPlan,
  lastTraining: setLastTraining,
});

export default rootReducer;
