import { combineReducers } from "redux";

const fetchCountries = (state = [], action) => {
  switch (action.type) {
    case "FETCH_COUNTRIES":
      return action.payload;
    case "FILTER_COUNTRIES":
      return action.payload;
    case "SEARCH_NAME":
      return action.payload;
    //
    default:
      return state;
  }
};

const handleSelectCountry = (state = {}, action) => {
  return action.type === "SELECT_COUNTRY" ? action.payload : state;
};

const toggleDarkMode = (state = false, action) => {
  return action.type === "TOGGLE_DARKMODE" ? !state : state;
};

export default combineReducers({
  countries: fetchCountries,
  isDarkMode: toggleDarkMode,
  selectedCountry: handleSelectCountry,
});
