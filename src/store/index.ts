import { createStore } from "vuex";
import axios from "axios";

import mutations from "./mutations";
import getters from "./getters";
import actions from "./actions";

const store = createStore({
    state ():any {
      return {
        count: 0,
        open:false,
        dogs:[],

        todos:[
            { id: 1, text: 'Holaa', done: true },
            { id: 2, text: '...', done: false }
        ]
      }
    },
    getters,
    mutations,
    actions
  })


  export default store