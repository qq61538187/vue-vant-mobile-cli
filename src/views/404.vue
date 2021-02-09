<template>
  <div class="not-found-content">
    <img src="@/assets/images/404/not_found.png" class="not-found-pic">
    <p>咦，页面不见了~</p>
    <a href="/" class="return-index">返回首页</a>
</div>
</template>

<script>
  export default {
    name: 'Page404',
    data() {
      return {
      
      }
    },
    mounted() {
    },
    beforeDestroy() {

    },
    methods: {
      
    },
  }
</script>

<style lang="scss" scoped>
 .not-found-content {
    padding: 120px 0 50px;
    text-align: center;
    background-color: #fff;
    .not-found-pic {
    width: 31.667%;
}
p {
    margin-top: 13px;
    font-size: 17px;
    text-align: center;
    color: #333;
}
.return-index {
    display: block;
    margin: 41px auto 0;
    width: 180px;
    height: 45px;
    line-height: 45px;
    font-size: 17px;
    color: #fff;
    background-color: #34cd65;
    border-radius: 23px;
}
}
</style>
