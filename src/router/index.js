import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Huiy from '@/components/Huiy'
import Car from '@/components/Car'
import Seach from '@/components/Seach'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
	{
	  path: '/home',
	  name: 'Home',
	  component: Home
	},
	{
	  path: '/huiy',
	  name: 'Huiy',
	  component: Huiy
	},
	{
	  path: '/car',
	  name: 'Car',
	  component: Car
	},
	{
	  path: '/seach',
	  name: 'Seach',
	  component: Seach
	}
  ]
})
