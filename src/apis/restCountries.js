import axios from "axios";

const restCountries = axios.create({
  baseURL: "https://restcountries.eu/rest/v2",
});

export default restCountries;
