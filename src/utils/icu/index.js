import mixin from './mixins/VueMixin'
import request from './libs/request'
import scrollAnimation from './libs/function/scrollAnimation'
// filters
import './filters'
const $icu = {
  request,
  scrollAnimation
}

const install = Vue => {
  Vue.mixin(mixin)
  Vue.prototype.$icu = $icu
}

export default {
  install
}
