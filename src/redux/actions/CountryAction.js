import { request } from "../../utils/Request";
import {
  ADD_COUNTRY,
  GET_LIST_COUNTRY,GET_COUNTRY
} from '../../utils/Actions';
const url = "http://localhost:8080/"
export function getCountries(){
  return (dispatch)=>
    dispatch({
      type: GET_LIST_COUNTRY,
      payload: request(url).get(`/country`)
    }).catch(response => {});
}

export function createCountry(data){
    return (dispatch)=>
      dispatch({
        type: ADD_COUNTRY,
        payload: request(url).post('/country/add', data)
      }).catch(response => {});
}

export function getCountryById(id){
  return (dispatch)=>
    dispatch({
      type: GET_COUNTRY,
      payload: request(url).get(`/country/${id}`)
    }).catch(response => {});
}



