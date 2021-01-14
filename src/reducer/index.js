import { combineReducers } from "redux";

const countriesReducer = (state = [], action) => {
  switch (action.type) {
    case "FETCH_COUNTRIES":
      return action.payload;

    default:
      return state;
  }
};

export default combineReducers({
  countries: countriesReducer,
});
