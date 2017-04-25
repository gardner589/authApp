import thunk from "redux-thunk"
import {applyMiddleware, createStore, compose} from "redux";
import {persistStore, autoRehydrate} from "redux-persist";
import {AsyncStorage} from "react-native";
// import reducer from "../reducer";
import logger from "redux-logger"
import combineReducers from "../reducer";

var defaultState ={};
var middleware= [thunk,logger];
// if (process.env.NODE_ENV !== 'production') {
//   middleware = [ ...middleware, logger]
// }
exports.configureStore = (initialState = defaultState) =>{
   var store = createStore(combineReducers,initialState,compose(
         applyMiddleware(...middleware),
         autoRehydrate(),
      ));
      persistStore(store, {storage: AsyncStorage});
   return store;
};
