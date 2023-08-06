import { createRouter, createWebHistory } from 'vue-router'
const Home = () => import("../views/Home.vue");
const Login = () => import("../views/Login.vue")
const Register=()=>import("../views/Register.vue")
const Dashboard=()=>import("../views/Dashboard.vue")
const NotFound = () => import("../views/NotFound.vue")

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
    },
 
    {
      path: '/login',
      name: 'Login',  
      component:Login
    },
    {
      path: '/register',
      name:'Register',
      component: Register,
      props:true
    },
    {
      path: '/dashboard',
      name:'Dashboard',
      component: Dashboard,
      props:true
    },
    {
      path: "/:pathMatch(.*)*",
      name: "NotFound",
      component:NotFound
    }
   
  ]
})

export default router