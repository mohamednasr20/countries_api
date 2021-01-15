import restCountries from "../apis/restCountries";

export const fetchCountries = () => async (dispatch) => {
  const response = await restCountries.get("/all");
  dispatch({ type: "FETCH_COUNTRIES", payload: response.data });
};

export const filterCountries = (region) => async (dispatch) => {
  const response = await restCountries.get(`/region/${region}`);
  dispatch({ type: "FILTER_COUNTRIES", payload: response.data });
  console.log(response.data);
};

export const toggleDarkMode = () => (dispatch) => {
  dispatch({ type: "TOGGLE_DARKMODE" });
};
