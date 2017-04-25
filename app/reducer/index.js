import update from "react-addons-update"
import uuid from "uuid";
import {combineReducers} from "redux"
import {reducer as formReducer} from "redux-form"

import authReducer from "./authReducer";
import alertsReducer from "./alertsReducer";

module.exports = combineReducers({
   form: formReducer,
   auth: authReducer,
   alerts: alertsReducer

});








// = (state,action) => {
//    switch (action.type) {
//
//       case "ADD_TODO":
//       var newTodos =[
//          ...state.todos,
//          {
//             text:action.text,
//             id: uuid.v4()
//          }
//       ];
//       return {
//          todos: newTodos
//       };
//       break;
//
//
//    }
// }
