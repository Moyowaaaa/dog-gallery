export default{
    doneTodos(state:any) {
        return state.todos.filter((todo:any) => todo.done)
    },
    textTodo(state:any) {
        return state.todos.filter((todo:any) => todo.text === 'Holaa')
    },
    getTodoById:(state:any) => (id:number) => {
        return state.todos.find((todo:any) => todo.id === id)
    },
    breeds(state:any) {
        return state.dog
    }
}