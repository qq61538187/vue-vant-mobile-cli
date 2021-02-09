<template>
  <div class="icu-body" :style="[bodyStyle]">
    <img v-if="loading == 1"
      class="icu-body-image"
      src="@/assets/images/body-status/loading.gif">
    <img
      v-if="loading == -1"
      class="icu-body-image"
      src="@/assets/images/body-status/anomaly.png"
    >
    <div v-if="loading == -1" class="u-p-t-10 u-p-b-10">
      <p class="icu-body-p">{{ errp }}</p>
    </div>
    <div class="icu-body-slot-wrap" v-if="loading == -1" @click="actions">
      <img class="icu-body-action" src="@/assets/images/body-status/nonet_rl.png">
    </div>
  </div>
</template>

<script>
export default {
  props: {
    height: {
      type: String,
      default: ''
    },
    loading: {
      type: Number,
      default: 0// 初始化 0  1加载中   2加载完成    -1加载失败
    },
    errp: {
      type: String,
      default: '试试刷新页面吧'
    }
  },
  data() {
    return {
        img_loading: require('@/assets/images/body-status/loading.gif'),
        img_anomaly:require('@/assets/images/body-status/anomaly.png'),
        img_nonet_rl:require('@/assets/images/body-status/nonet_rl.png'),
    }
  },
  computed: {
    bodyStyle() {
      const style = {}
      let height = ''
      if (this.height !== '') {
        height = this.height
      } else {
        height = this.getClientHeight()+'px'
      }
      style.height = height
      return style
    }
  },
  created() {

  },
  methods: {
    getClientHeight() {
      var clientHeight = 0
      if (document.body.clientHeight && document.documentElement.clientHeight) {
        clientHeight = (document.body.clientHeight < document.documentElement.clientHeight) ? document.body.clientHeight : document.documentElement.clientHeight
      } else {
        clientHeight = (document.body.clientHeight > document.documentElement.clientHeight) ? document.body.clientHeight : document.documentElement.clientHeight
      }
      return clientHeight
    },

    actions() {
      this.$emit('reload')
    }
  }

}
</script>

<style lang="scss" scoped>
.icu-body {
  position: relative;
  width: 375px;
  display: flex;
  flex-direction: row;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  &-image {
    display: block;
    width: 100px;
    height: 100px;
  }
  &-action {
    width: 30px;
    height: 30px;
  }
  &-p {
    font-size: 12px;
    color: #eee;
  }
  &-slot-wrap {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin-top: 10px;
  }
}
</style>
