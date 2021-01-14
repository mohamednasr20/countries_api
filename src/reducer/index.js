import { combineReducers } from "redux";

const countriesReducer = (state = [], action) => {
  switch (action.type) {
    case "FETCH_COUNTRIES":
      return action.payload;

    default:
      return state;
  }
};

const toggleDarkMode = (state = true, action) => {
  if (action.type === "SELECT_MODE") {
    return !state;
  } else return state;
};

export default combineReducers({
  countries: countriesReducer,
  isDarkMode: toggleDarkMode,
});
