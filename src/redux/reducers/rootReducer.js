import { combineReducers } from 'redux';
import { SET_USER, TRAINING_DAY_EXERCISES_LOADED, SET_LAST_TRAINING_BY_DAY } from '../actionTypes';

// import trainingPlanReducer from './trainingPlan';

const userReducer = (state = { id: 1 }, action = {}) => {
  switch (action.type) {
    case SET_USER:
      return { ...state, user: action.payload };

    default:
      return state;
  }
};

const trainingPlanReducer = (state = null, action) => {
  switch (action.type) {
    case TRAINING_DAY_EXERCISES_LOADED:
      break;

    default:
      return state;
  }
};

const lastTrainingReducer = (state = null, action) => {
  switch (action.type) {
    case SET_LAST_TRAINING_BY_DAY:
      return { ...state, last_training: action.payload };

    default:
      return { ...state };
  }
};

const rootReducer = combineReducers({
  user: userReducer,
  trainingPlan: trainingPlanReducer,
  lastTraining: lastTrainingReducer,
});

export default rootReducer;
