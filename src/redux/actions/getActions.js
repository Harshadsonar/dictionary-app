import { GET_FETCHING,GET_FETCHING_SUCCESS,GET_FETCHING_ERROR } from "./actionTypes";
import axios from "axios"
export const getFetching = () => ({
  type: GET_FETCHING
});

export const getFetchingSuccess = (data) => ({
  type: GET_FETCHING_SUCCESS,
  payload: data
});

export const getFetchingError = (error) => ({
  type: GET_FETCHING_ERROR,
  payload: error
});

export default function getFetchData(word){
    return (dispatch) => {
        dispatch(getFetching());
        axios.get(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`)
      .then(res => {
            dispatch(getFetchingSuccess(res.data));
            
        })
      .catch(err => {
            dispatch(getFetchingError(err.data));
        })
    }
}