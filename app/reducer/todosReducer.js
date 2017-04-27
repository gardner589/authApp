import uuid from "uuid";

var defaultState = [{
   _id:"297193321789231",
   text:"Mow Lawn"
}]

module.exports = (state=defaultState, action) => {
   switch(action.type) {
      case "ADD_TODO":
         return [
            ...state,
            action.newTodo
         ]

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
