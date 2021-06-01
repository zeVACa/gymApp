export const profileActionTypes = {
  SET_PROFILE: 'PROFILE.SET_PROFILE',
};

export const profileActions = {
  setProfile: (payload) => ({ type: profileActionTypes.SET_PROFILE, payload }),
};
