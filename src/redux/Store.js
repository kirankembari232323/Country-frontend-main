import { applyMiddleware, compose, createStore } from "redux";
import logger from "redux-logger";
import thunkMiddleware from "redux-thunk";
import promise from "redux-promise-middleware";
import reducer from "./reducer";
import { empty } from "../utils/Validation";


const customMiddleWare = store => next => action => {
  
  if(action.type.includes("REJECTED")){
    // toggleToast(store, next, action);
    // toggleError(store, next, action)

  }

  next(action);
}

function toggleError(store, next, action){


  if(!empty(action.payload.message) && action.type !== "SET_ERROR_LOG_REJECTED"){
    let config = JSON.parse(action.payload.config)

    let descriptionObject={
      api:config.config.url,
      errorMessage:action.payload.message
    }
  }
}

// async function toggleToast(store, next, action){

//   if(!empty(action.payload.message)){
//     store.dispatch(globalAction.showErrorToast(action.payload.message));

//     setTimeout(()=>{
//       store.dispatch(globalAction.resetErrorToast());
//       next(action);
//     },5000);
//   }
// }

export default function configureStore(initialState) {
  const env = process.env.REACT_APP_ENV;
  
  const isDevelopment = env !== "production" && env !== "staging";

  // Use below store for production version
  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  const store = isDevelopment
    ? createStore(
        reducer,
        initialState,
        composeEnhancers(applyMiddleware(promise, thunkMiddleware, customMiddleWare))
      )
    : createStore(
        reducer,
        initialState,
        compose(applyMiddleware(promise, thunkMiddleware, customMiddleWare))
      );

  return store;
}
