import Vue from 'vue'
import MintUI from 'mint-ui'
import './lib/mui/css/mui.min.css'
import 'mint-ui/lib/style.css'
import './lib/mui/css/icons-extra.css'
import App from './App'
import router from './router'
import { Swipe, SwipeItem } from 'mint-ui';
import VueResource from 'vue-resource'
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);
Vue.use(MintUI)
Vue.use(VueResource)
Vue.config.productionTip = false
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
