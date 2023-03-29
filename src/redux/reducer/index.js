import {combineReducers} from 'redux';
import country  from './CountryReducer';



const appReducer = combineReducers({
    country
});

const reducer = (state, action) => {

    return appReducer(state, action);
}


export default reducer;