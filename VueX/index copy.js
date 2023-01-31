const app = Vue.createApp({})

const state = {
  value: 'sträng',
  value1: 0,
  value2: false
}

const mutations = {
  changeNumber(state, addNumber){
    state.value1 = state.value1 + parseInt(addNumber)
  }
}

const store = Vuex.createStore({ mutations, state, strict: true })

app.use(store)

app.component('some-component', {
  data(){
    return {
      addNumber: ''
    }
  },
  template: `
    <input type="text" v-model="addNumber">
    <input type="button" @click="$store.commit('changeNumber', addNumber)" value="add">
    <div>{{ $store.state.value1 }}</div>
  `
})

app.mount('#app')
