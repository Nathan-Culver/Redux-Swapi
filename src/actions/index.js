import axios from 'axios';

export const FETCH_SENT = "FETCH_SENT";
export const FETCH_SUCCESS = "FETCH_SUCCESS";
export const FETCH_FAIL = "FETCH_FAIL";

export const fetchCharacters = () => dispatch => {
  dispatch({ type: FETCH_SENT });
  axios
      .get(
          "https://swapi.co/api/people/"
      )
      .then(res => dispatch({ type: FETCH_SUCCESS, payload: res.data.results }))
      .catch(err => dispatch({ type: FETCH_FAIL, payload: err }))
}