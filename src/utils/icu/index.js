import mixin from './mixins/VueMixin'
import request from './libs/request'
// filters
import './filters'
const $icu = {
  request
}

const install = Vue => {
  Vue.mixin(mixin)
  Vue.prototype.$icu = $icu
}

export default {
  install
}
