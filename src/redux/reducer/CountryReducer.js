import * as actions from '../../utils/Actions';

const initialState = {
    country: null,
    countries: [],
    countryDetails:null,
    loading: false
  
}

export default function country(state = initialState, action){

    if (typeof state === 'undefined') {
        return state;
    }

    switch (action.type){

        
        case actions.pending(actions.GET_LIST_COUNTRY):
            return {
                ...state,
                loading: true,
            }

        case actions.fulfilled(actions.GET_LIST_COUNTRY):
            return {
                ...state,
                loading: false,
                countries: action.payload.data,
            }

        case actions.rejected(actions.GET_LIST_COUNTRY):
            return {
                ...state,
                loading: false,
            }

        case actions.pending(actions.ADD_COUNTRY):
            return {
                ...state,
                loading: true,
            }

        case actions.fulfilled(actions.ADD_COUNTRY):
            return {
                ...state,
                loading: false,
                country: action.payload.data,
            }

        case actions.rejected(actions.ADD_COUNTRY):
            return {
                ...state,
                loading: false,
                country: action.payload.data.error,

            }  
        case actions.pending(actions.GET_COUNTRY):
            return {
                ...state,
                loading: true,
            }

        case actions.fulfilled(actions.GET_COUNTRY):
            return {
                ...state,
                loading: false,
                countryDetails: action.payload.data,
            }

        case actions.rejected(actions.GET_COUNTRY):
            return {
                ...state,
                loading: false,
            }    
            
        default:
            return {...state}
    }

}