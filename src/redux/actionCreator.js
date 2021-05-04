import { SET_LAST_TRAINING_BY_DAY, TRAINING_DAY_EXERCISES_LOADED } from './actionTypes';

const fetchExercisesByDay = (dayNumber = 1) => {
  return (dispatch) => {
    // ... dispatch({type: 'const', payload: null})
    if (!trainingPlan) {
      fetch(
        `http://fitness-app.germanywestcentral.cloudapp.azure.com/api/getPlan/1/${dayNumber}/${user.id}`,
      )
        .then((res) => res.json())
        .then((dayExercisesObj) => {
          dispatch({ type: TRAINING_DAY_EXERCISES_LOADED, payload: dayExercisesObj });
        });
    }
  };
};

const someAction = () => ({ type: SET_LAST_TRAINING_BY_DAY, payload: null }); // someAction() - in other files to get obj
