import Vue from 'vue'
import VueRouter from 'vue-router'
import MyDashboard from '../views/MyDashboard.vue'
import MyProject from '../views/MyProject.vue'
import MyTeam from '../views/MyTeam.vue'
// import DataTable from '../views/DataTable.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'dashboard',
    component: MyDashboard
  },
  {
    path: '/projects',
    name: 'project',
    component: MyProject
  },
  {
    path: '/team',
    name: 'team',
    component: MyTeam
  },
  // {
  //   path: '/datatable',
  //   name: 'DataTable',
  //   component: DataTable
  // }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
