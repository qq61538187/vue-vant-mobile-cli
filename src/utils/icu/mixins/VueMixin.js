import { Toast, Dialog } from 'vant'

export default {
  methods: {
    _showAlert(msg, confirm) {
      Dialog.alert({
        message: msg
      }).then(confirm)
    },

    _showConfirm(msg, confirm, cancel) {
      Dialog.confirm({
        message: msg
      }).then(confirm)
        .catch(cancel)
    },

    _routeReplace(toName, params) {
      this.$router.replace({
        name: toName,
        params: params
      })
    },

    _routePush(toName, params) {
      this.$router.push({
        name: toName,
        params: params
      })
    },

    /**
     * 路由跳转带有query参数
     */
    _routePushQ(toName, params) {
      this.$router.push({
        name: toName,
        query: params
      })
    },

    /**
     * 显示Toast
     */
    _showToast(msg) {
      Toast(msg)
    },

    /**
     * 显示打钩消息
     */
    _showSuccess(msg) {
      Toast.success(msg)
    },

    /**
     * 路由回退或者历史回退
     */
    _routerBack() {
      this.$router ? this.$router.back() : window.history.back()
    },

    /**
     * 显示Loading
     */
    _showLoading() {
      Toast.loading({
        mask: true,
        duration: 0,
        loadingType: 'spinner',
        message: 'Loading...'
      })
    },

    /**
     * 不显示Loading
     */
    _dismissLoading() {
      Toast.clear()
    },

    // 将base64文件转换为二进制
    _dataURLtoBlob(dataUrl) {
      const arr = dataUrl.split(',')
      const mime = arr[0].match(/:(.*?);/)[1]
      const bstr = atob(arr[1])
      let n = bstr.length
      const u8arr = new Uint8Array(n)
      while (n--) {
        u8arr[n] = bstr.charCodeAt(n)
      }
      return new Blob([u8arr], { type: mime })
    }
  }
}
