import Vue from 'vue'
import App from './App.vue'
import PubgHeader from './PubgHeader.vue'
import RatingBoard from './RatingBoard.vue'
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(VueAxios, axios)

Vue.component('pubg-header', PubgHeader)
Vue.component('rating-board', RatingBoard)

new Vue({
  el: '#app',
  render: h => h(App)
})
