import { createStore } from "vuex";
import axios from "axios";

type state = {
    dogs:string[],
    search:any
}

const store = createStore({
    state ():state {
      return {
        dogs:[],
        search:''
      }
    },
    mutations: {
        allBreeds(state:state,payload:string[]):void{
            state.dogs = payload
          },
    }, getters:{
        AllBreeds(state:state):string[] {
            return state.dogs
        },

    }, actions:  {
        async fetchAllBreeds(context:any){
            try { 
                const responsefirst:any = await axios.get('https://dog.ceo/api/breeds/image/random/50')
                const responseSecond:any = await axios.get('https://dog.ceo/api/breeds/image/random/50')
                const images= [...responsefirst.data.message, ...responseSecond.data.message]
                context.commit("allBreeds",images)
            } catch (error) {
                return error
            }
        },
    }
  })


  export default store