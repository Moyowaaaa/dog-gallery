import { createStore } from "vuex";
import axios from "axios";
import { INCREASE } from "./mutation-types";

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
    mutations: {
      increment (state) {
        state.count++
      },
      decrease(state){
        state.count--
      },
      toggle(state) {
        state.open = !state.open
      },
      increaseByNumber(state,payload){
        state.count += payload.amount
        return state.count
      },
      decreaseByNumber(state,payload){
        state.count -= payload.amount

      }
    }, getters:{
        doneTodos(state) {
            return state.todos.filter((todo:any) => todo.done)
        },
        textTodo(state) {
            return state.todos.filter((todo:any) => todo.text === 'Holaa')
        },
        getTodoById:(state) => (id:number) => {
            return state.todos.find((todo:any) => todo.id === id)
        }
        
    }, actions:  {
        increment(context) {
            context.commit('increment')
        }
    }
  })


  export default store