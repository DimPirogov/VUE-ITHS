// Vue.createApp({
//   created(){
//     fetch('https://api.chucknorris.io/jokes/categories')
//       .then((response) => response.json())
//       .then((result) => { this.jokes_cats = result })
//   },
//   data(){
//     return {
//       jokes_cats: null
//     }
//   }
// }).mount("#app")
Vue.createApp({
  created() {
    this.fetchCities()
  },
  data() {
    return {
      cities: null,
      name: '',
      population: '',
      id: ''
    }
  },
  methods: {
    fetchCities(){
      console.log('loading');
      return fetch('https://avancera.app/cities/')
              .then((response) => response.json())
              .then((result) => { this.cities = result })
    },
    addCity(){
      fetch('https://avancera.app/cities/', {
        body: JSON.stringify({
          name: this.name,
          population: this.population
        }),
        headers: { 'Content-Type': 'application/json' },
        method: 'POST'
      }).then((response) => response.json())
        .then((results)=> {this.cities = results})
    },
    eraseCity(){
      fetch(`https://avancera.app/cities/${this.id}`, { method: 'DELETE' })
        .then((response => console.log( response)))
      //const myTimeout = setTimeout(this.fetchCities(), 500)
    }
  }
}).mount('#app')
