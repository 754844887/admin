import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './plugins/element.js'
import { Menu, MenuItem, Submenu, Row,
  Col, Container, Header, Aside, Footer,
  Icon, Main
} from 'element-ui'


Vue.use(Menu)
Vue.use(MenuItem)
Vue.use(Submenu)
Vue.use(Row)
Vue.use(Col)
Vue.use(Container)
Vue.use(Header)
Vue.use(Aside)
Vue.use(Footer)
Vue.use(Icon)
Vue.use(Main)

Vue.config.productionTip = false


new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
