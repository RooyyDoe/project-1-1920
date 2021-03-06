import { Fetcher } from "./fetcher.js";

// Get books
function getBooks(query) {
  // set endpoint url values
  const cors = "https://cors-anywhere.herokuapp.com/";
  const endpoint = "https://zoeken.oba.nl/api/v1/search/?q=";
  const key = "cdb8415c172ec6178b63451e222891a6";
  const secret = "31978bcbb4e5eb7239f01c180e2f07b1";
  const detail = "Default";
  const url = `${cors}${endpoint}${query}&authorization=${key}&detaillevel=${detail}&output=json`;

  const config = {
    Authorization: `Bearer ${secret}`
  };

  // Fetch
  return Fetcher.get(url, config).then(data => {
    return data.results;
  });
}

// Get books
function getBookDetail(query) {
  // set endpoint url values
  const cors = "https://cors-anywhere.herokuapp.com/";
  const endpoint = "https://zoeken.oba.nl/api/v1/search/?id=";
  const key = "cdb8415c172ec6178b63451e222891a6";
  const secret = "31978bcbb4e5eb7239f01c180e2f07b1";
  const detail = "Default";
  const url = `${cors}${endpoint}${query}&authorization=${key}&detaillevel=${detail}&output=json`;

  const config = {
    Authorization: `Bearer ${secret}`
  };

  // Fetch
  return Fetcher.get(url, config).then(data => {
    return data.results;
  });
}

export { getBooks, getBookDetail };
