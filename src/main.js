// 兼容 IE
// https://github.com/zloirock/core-js/blob/master/docs/2019-03-19-core-js-3-babel-and-a-look-into-the-future.md#babelpolyfill
import 'core-js/stable'
import 'regenerator-runtime/runtime'

import Vue from 'vue'
import App from './App.vue'
// 引入全局uView
import icu from '@/utils/icu/index'
import router from './router'

import store from '@/store'
import vuexStore from '@/store/$u.mixin.js'
import ScrollPosition from 'vue-keep-scroll-position'

// 全局引入按需引入UI库 vant
import '@/plugins/vant'
// 引入全局样式
import '@/assets/css/index.scss'
// 移动端适配
import 'lib-flexible/flexible.js'

Vue.use(icu)
Vue.mixin(vuexStore)
Vue.use(ScrollPosition)
Vue.config.productionTip = false

var app = new Vue({
  el: '#app',
  router,
  store,
  ...App
})

// http拦截器，此为需要加入的内容，如果不是写在common目录，请自行修改引入路径
import httpInterceptor from '@/common/http.interceptor.js'
// 这里需要写在最后，是为了等Vue创建对象完成，引入"app"对象(也即页面的"this"实例)
Vue.use(httpInterceptor, app)
app.$mount()
