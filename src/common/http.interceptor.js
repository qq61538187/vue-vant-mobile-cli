const install = (Vue, vm) => {
  Vue.prototype.$icu.request.interceptors.request.use(
    (config) => {
      console.log('经过了这里')
      return config
    },
    (error) => {
      return Promise.reject(error)
    }
  )

  Vue.prototype.$icu.request.interceptors.response.use(
    (response) => {
      console.log('3333')
      return {}
    },
    (error) => {
      console.log('12121212')
      return Promise.reject(error)
    })
}

export default {
  install
}
