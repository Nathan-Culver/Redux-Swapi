import { FETCH_SENT, FETCH_SUCCESS, FETCH_FAIL } from "../actions";
const initialState = {
  characters: [],
  fetching: true,
  error: null
};
export const charsReducer = (state = initialState, action) => {
  let newState = { ...state };
  switch (action.type) {
    case FETCH_SENT:
      newState.fetching = true;
      break;
    case FETCH_SUCCESS:
      newState = { ...state, characters: action.payload, fetching: false };
      break;
    case FETCH_FAIL:
      newState = { ...state, error: action.payload, fetching: false };
      break;
    default:
      return state;
  }
  
  return newState;
};