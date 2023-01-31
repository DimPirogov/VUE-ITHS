const app = Vue.createApp({})

// const hem = {
//   methods: {
//     onClick(){
//       this.$router.push('/page-1')
//     }
//   },
//   template: `
//   <h1>Home</h1>
//   <input type="button" value="Page 1" @click="onClick" >
// `
// }
const pages = { template: ` <h1>Page {{$route.params.pageNumber}}</h1>` }
const one = {
  template: ` <h1>{{$route.params.first}}{{$route.params.second}}</h1>`
}
// const hello = { template: `<h1></h1> `}

const routes = [
  {
    component: pages,
    path: '/pages/:pageNumber'
  },
  {
    component: one,
    path: '/:first/:second'
  },
  // {
  //   component: page2,
  //   path: '/page-2'
  // }
]

const router = VueRouter.createRouter({
  history: VueRouter.createWebHashHistory(),
  routes
})

app.use(router)

app.mount('#app')
