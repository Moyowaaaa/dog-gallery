import { createStore } from "vuex";
import axios from "axios";

const store = createStore({
    state ():any {
      return {
        dogs:[],
      }
    },
    mutations: {
        allBreeds(state:any,payload:any){
            state.dogs = payload
          },
    }, getters:{
        AllBreeds(state:any) {
            return state.dogs
        }
    }, actions:  {
        async fetchAllBreeds(context:any){
            try { 
                const responsefirst:any = await axios.get('https://dog.ceo/api/breeds/image/random/50')
                const responseSecond:any = await axios.get('https://dog.ceo/api/breeds/image/random/50')
                const images= [...responsefirst.data.message, ...responseSecond.data.message]
                context.commit("allBreeds",images)
            } catch (error) {
                console.log(error)
            }
        },
    }
  })


  export default store