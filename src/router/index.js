import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Huiy from '@/components/Huiy'
import Car from '@/components/Car'
import Seach from '@/components/Seach'
import Newlist from '@/components/children/Newlist'
import Newinfor from '@/components/children/Newinfor'
import Comment from '@/components/grandson/Comment'
import Fenxiang from '@/components/children/Fenxiang'
// import  Buy from '@/components/children/Buy'
// import Liuyan from '@/components/children/Liuyan'
// import Shipin from '@/components/children/Shipin'
// import Call from '@/components/children/Call'
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
	},
	{
		path: '/home/newlist',
		name: 'Newlist',
		component: Newlist
	},
	{
		path: '/home/newlist/:id',
		name: 'Newinfor',
		component: Newinfor
	},
	{
		path: '/home/fenxiang',
		name: 'Fenxiang',
		component: Fenxiang
	},
	// {
	// 	path: '/home/buy',
	// 	name: 'Buy',
	// 	component: Buy
	// },
	// {
	// 	path: '/home/liuyan',
	// 	name: 'Liuyan',
	// 	component: Liuyan
	// },
	// {
	// 	path: '/home/shipin',
	// 	name: 'Shipin',
	// 	component: Shipin
	// },
	// {
	// 	path: '/home/call',
	// 	name: 'Call',
	// 	component: Call
	// }
  ]
})
