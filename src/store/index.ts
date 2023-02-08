import { createStore } from "vuex";
import axios from "axios";

import mutations from "./mutations";
import getters from "./getters";
import actions from "./actions";
import Breeds from "./modules/Breeds";

export const store = createStore({
    state ():any {
      return {
        dogs:[],
        
      }
    },
    getters,
    mutations,
    actions
  })


  export default store