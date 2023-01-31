const app = Vue.createApp({})

const state = {
  word: 'sträng',
}

const mutations = {
  updateArea(state, area){
    state.word = area
  }
}

const store = Vuex.createStore({ mutations, state, strict: true })

app.use(store)

app.component('some-component', {
  computed: {
    area: {
      get(){
        return this.$store.state.word
      },
      set (value) {
        this.$store.commit('updateArea', value)
      }
    }
  },
  template: `
    <textarea v-model="area"></textarea>
      <div>{{ $store.state.word }}</div>
  `
})

app.mount('#app')
