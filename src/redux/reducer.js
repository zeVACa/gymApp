export const reducer = (state = {}, action) => {
  switch (action.type) {
    case 'SOME_ACTION':
      break;

    case undefined:
      return state;
    case 'ANOTHER_ACTION':
      return state + 1;

    default:
      return state;
  }
};
