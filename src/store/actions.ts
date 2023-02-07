import axios from 'axios'

export default {
    async fetchBreeds(context:any) {
        try {
            let allBreeds = [];
            const response = await axios.get('https://dog.ceo/api/breeds/list/all')
            // const result1 = response.data.message;
            allBreeds = (Object.keys(response.data.message))
            context.commit("getAllBreeds",allBreeds)
        } catch (error) {
            console.log(error)
        }
    }
}