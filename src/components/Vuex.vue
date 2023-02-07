<template>
    <div>
        <button @click="increase">Store</button>


        <button @click="toggle">Togglr</button>
<button @click="decrease">Store</button>


<button @click="fetchTodo">Fetch</button>

<button @click="increasee">LAMOS</button>


<button @click="decreaseByObjectStyle">Kall</button>
    </div>
</template>

<script setup lang="ts">
import store from '@/store';
import { computed,onMounted } from 'vue';

import { mapState } from 'vuex'



const increase = () => {
  store.commit('increment')
  console.log(store.state.count)
}

const increasee = () => {
    store.commit('increaseByNumber', {
        amount:10
    })
    console.log(store.state.count)
}

const increaseByObjectStyle = () => {
    store.commit({
        type:'increaseByNumber',
        amount:10
    })

    console.log(store.state.count)
}


const decreaseByObjectStyle = () => {
    store.commit({
        type:'decreaseByNumber',
        amount:10
    })
    console.log(store.state.count)
}

const decrease = () => {
  store.commit('decrease')
  console.log(store.state.count)
}

const toggle = () => {
    store.commit('toggle')
    console.log(store.state.open)
}

const fetchTodo = () => {
    console.log(store.getters.getTodoById(2))
    
}

onMounted(() => {
    console.log(store.getters.doneTodos)
    console.log(store.getters.textTodo)
})


</script>

<style scoped>

</style>