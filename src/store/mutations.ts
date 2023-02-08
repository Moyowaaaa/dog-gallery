export default{
      allBreeds(state:any,payload:any){
        state.dogs = payload
      },
      search(state:any,payload:any) {
        state.searchedItem = state.dogs.filter((dog:any) => {
            dog.split("/")[4].includes(payload.toLowerCase())
        })
      }
      
}





