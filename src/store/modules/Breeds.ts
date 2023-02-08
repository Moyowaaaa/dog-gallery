import axios from "axios";


const state = {
    dogs:[]
}

const getters = {
    allBreeds:(state:any) => state.dogs
}

const actions = {
    async fetchBreeds({commit}:any){
        const response = await axios.get('https://dog.ceo/api/breeds/list/all')
        commit('setBreeds',response.data.message)
    }
    
}

const mutations = {
    setBreeds: (state:any,dogs:any) => (state.dogs = dogs)
}


export default {
    state,
    getters,
    actions,
    mutations
  };