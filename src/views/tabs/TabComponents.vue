<template>
  <div>
    <van-cell-group title="展示组件">
       <van-cell title="List 列表"  is-link  to="/components/list"/>
    </van-cell-group>
  </div>
</template>

<script>
export default {
  name: 'TabComponents',
  data() {
    return {

    }
  },
  mounted() {
    // console.log(this.$icu)
    this.$icu.request({

    }).then(res => {
      console.log('成功')
    }, err => {
      console.log(err)
    })
    console.log('ab-components-初始化了')
  },
  methods: {

  }
}
</script>

<style scoped lang="scss">
 .test-card{
   height: 100px;
 }
</style>
