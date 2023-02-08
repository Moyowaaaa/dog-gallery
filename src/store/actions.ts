import axios from 'axios'
const actions = {
    async fetchAllBreeds(context:any){
        try { 
            const responsefirst:any = await axios.get('https://dog.ceo/api/breeds/image/random/50')
            const responseSecond:any = await axios.get('https://dog.ceo/api/breeds/image/random/50')
            const images= [...responsefirst.data.message, ...responseSecond.data.message]
            context.commit("allBreeds",images)
        } catch (error) {
            throw Error
        }
    }
}



export default actions