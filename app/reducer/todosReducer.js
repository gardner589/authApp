import uuid from "uuid";
var defaultState = []

module.exports = (state=defaultState, action) => {
   switch(action.type) {
      case "ADD_TODO":
         return [
            ...state,
            action.newTodo
         ];

         break;

      case "SET_TODOS":
         return
            action.todos
         break;

      case "REMOVE_TODO":

         return state.filter((alert)=>{
            if (todo._id=== action.id){
               return false
            }else{
               return true
            }
         })

      default:
         return state;

   }
}
