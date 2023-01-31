const app = Vue.createApp({})

const cities = {
  created(){
    // this.$watch(
    //   () => this.$route.params,
    //   () => {
    //     this.fetchCities()
    //   },
    //   { immediate: true }
    // )
    this.fetchCities(),
    this.fetchCity()
  },
  data(){
    return {
      cities: null,
      city: null
    }
  },
  methods: {
    fetchCities(){
      fetch(`https://avancera.app/cities`)
        .then((response) => response.json())
        .then((result) => {this.cities = result})
    },
    fetchCity(){
      fetch(`https://avancera.app/${city.id}`)
        .then((response) => response.json())
        .then((result) => {this.city = result})
    }
  },
  template: `
    <h1>{{$route.params.cityName}}</h1>
    <p>{{$route.params.cityPop}}<p>
  `
}

const routes = [
  {
    component: cities,
    path: "/:`${city.id}`"
  }
]

const router = VueRouter.createRouter({
  history: VueRouter.createWebHashHistory(),
  routes
})

app.use(router)

app.mount('#app')

//${$route.params.cityid}
