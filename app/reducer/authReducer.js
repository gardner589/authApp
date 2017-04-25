var defaultState = {
   user_id: undefined,
};

module.exports = (state=defaultState, action) => {
   switch(action.type) {
      case "AUTH_USER":

         return {
            user_id: action.user_id
         }

         break;

      case "UNAUTH_USER":

         return {
            user_id: undefined
         }
         break;

      default:
         return state;

   }
}
