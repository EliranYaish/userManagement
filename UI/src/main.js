import Vue from 'vue'
//import the App component
import App from './App'
//import the vue router
import VueRouter from 'vue-router'
//tell vue to use the router
Vue.use(VueRouter)

import NewUser from './components/NewUser'
import  UserList from './components/UserList'
import Error from './components/Error'
import UpdateUser from './components/UpdateUser'

//define your routes
const routes = [

  {
    path: '/newUser',
    name: 'NewUser',
    component: NewUser
  },
  {
    path: '/error/:errorMsg',
    name: 'Error',
    component: Error
  },
  {
    path: '/',
    name: 'UserList',
    component: UserList
  },
  {
    path: '/update/:id',
    name: 'UpdateUser',
    component: UpdateUser
  }

]

// Create the router instance and pass the `routes` option
// You can pass in additional options here, but let's
// keep it simple for now.
const router = new VueRouter({
  routes, // short for routes: routes
  mode: 'history'
})
//instatinat the vue instance
new Vue({
//define the selector for the root component
  el: '#app',
  //pass the template to the root component
  template: '<App/>',
  //declare components that the root component can access
  components: { App },
  //pass in the router to the Vue instance
  router
}).$mount('#app')//mount the router on the app
