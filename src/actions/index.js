import restCountries from "../apis/restCountries";

export const fetchCountries = () => async (dispatch) => {
  const response = await restCountries.get("/all");

  dispatch({ type: "FETCH_COUNTRIES", payload: response.data });
};

export const filterCountries = (region) => async (dispatch) => {
  const response = await restCountries.get(`/region/${region}`);

  dispatch({ type: "FILTER_COUNTRIES", payload: response.data });
};

export const onSelectCountry = (name) => async (dispatch) => {
  const response = await restCountries.get(`/name/${name}?fullText=true`);
  dispatch({ type: "SELECT_COUNTRY", payload: response.data[0] });
};

export const onSearchByName = (search) => async (dispatch, getState) => {
  restCountries
    .get(`/name/${search}`)
    .then((response) => {
      dispatch({ type: "SEARCH_NAME", payload: response.data });
    })
    .catch((error) => {
      alert("please add valid search term");
    });
};

export const toggleDarkMode = () => (dispatch) => {
  dispatch({ type: "TOGGLE_DARKMODE" });
};
