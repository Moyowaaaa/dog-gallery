export default{
    increment (state:any) {
        state.count++
      },
      decrease(state:any){
        state.count--
      },
      toggle(state:any) {
        state.open = !state.open
      },
      increaseByNumber(state:any,payload:any){
        state.count += payload.amount
        return state.count
      },
      decreaseByNumber(state:any,payload:any){
        state.count -= payload.amount

      },
      getAllBreeds(state:any,payload:any) {
        state.dogs = payload
      }
      
      
}





