import { profileActionTypes } from './actions';

const initialState = {
  profile: null,
};

export const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case profileActionTypes.SET_PROFILE:
      return { ...state, profile: action.payload };
    default:
      return state;
  }
};
