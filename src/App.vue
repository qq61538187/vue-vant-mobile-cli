<template>
  <div id="app">
       <!--缓存的页面-->
    <keep-alive>
      <router-view v-if="$route.meta.keepAlive">
      </router-view>
    </keep-alive>
    <!--不缓存的页面-->
    <router-view v-if="!$route.meta.keepAlive">
    </router-view>
  </div>
</template>
<script>
export default {
  name: 'App'
}
</script>
<style lang="scss">
@import "@/style/index.scss";

  /* 主视图宽度限制 */
    // #app {
    //     max-width: 7.5rem;
    //     margin: 0 auto;
    // }

    // .container {
    //     max-width: 7.5rem;
    //     margin: 0 auto;
    //     overflow-x: hidden;
    // }
</style>
