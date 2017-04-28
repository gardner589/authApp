import axios from "axios";
import * as Keychain from "react-native-keychain"
import {TODO_URL,TODOS_URL} from "../api/index"
import {addAlert} from "./alertsActions";

exports.createTodo = (text) => {
   return function(dispatch){
      return Keychain.getGenericPassword().then((credentials)=>{
         var {username, password} = credentials;
         return axios.post(TODOS_URL(username),{text},{
            headers:{authorization:password}
         }).then((response)=>{
            dispatch(addTodo(response.data.todo));
         }).catch((err)=>{
            dispatch(addAlert("There was a problem, couldn't create Todo."))
         })
      })
   }
};
exports.getTodos = function(dispatch){
      return Keychain.getGenericPassword().then((credentials)=>{
         var {username, password} = credentials;
         return axios.get(TODOS_URL(username),{
            headers:{authorization:password}
         }).then((response)=>{
            dispatch(setTodos(response.data.todos));
         }).catch((err)=>{
            dispatch(addAlert("There was a problem, couldn't get Todos."))
         })
      })
   }

var addTodo= (newTodo)=>{
   return {
      type: "ADD_TODO",
      newTodo
   }
}

var setTodos = (todos) => {
   return {
      type:"SET_TODOS",
      todos
   }
}
exports.deleteTodo = (id) =>{
   return {
      type: "DELETE_TODO",
      id
   }
};
