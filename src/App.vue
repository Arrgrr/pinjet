<template>
  <div id="app">
    <router-view class="header" name="header"></router-view>
    <router-view class="container" name="search" v-if="isOpen= true"></router-view>
    <router-view class="container"></router-view>
    <router-view class="footer" name="footer"></router-view>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isOpen: false
    };
  }
};
</script>

<style lang="scss">
@import "./src/globalStyle";
#app {
  display: flex;
  flex-direction: column;
  flex: 1 100%;
  height: 100vh;
  margin: 0;
}
.header {
  display: flex;
  z-index: 1;
}
.container {
  display: flex;
  flex: 1;
  height: 100%;
  z-index: 0;
}
.footer {
  display: flex;
}
</style>
