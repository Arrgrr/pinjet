<template>
  <div class="service">
    <div class="service_container">
      <div class="menu_sec">
        <h3>我們的服務</h3>
        <router-link class="menu" to="/services/">辦公室規劃設計工程</router-link>
        <router-link class="menu" to="/services/service02">專案廠房建置工程</router-link>
        <router-link class="menu" to="/services/service03">廠務各式修改維修工程</router-link>
        <router-link class="menu" to="/services/service04">無塵室產線各式加工件製品</router-link>
      </div>
      <router-view class="content"></router-view>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isOpen: true
    };
  }
};
</script>

<style lang="scss" scoped>
@import "./src/globalStyle";
.service_container,
.content,
.menu_sec,
.menu {
  display: flex;
}

.service {
  background: url(https://arrgrr.github.io/proMask/static//BG_pattern.jpg)
    bottom left no-repeat;
  justify-content: center;
}

.service_container {
  width: 1080px;
  padding-top: $sl * 2;
}
.menu_sec {
  flex: 2;
  flex-direction: column;
}
.content {
  flex: 4;
  flex-direction: column;
}
h3 {
  font-size: 24px;
  color: $black80;
}

.menu {
  text-decoration: none;
  color: $black60;
  font-size: 20px;
  font-weight: 200;
  padding: $ss 0;
  transition: 200ms;
  &:hover {
    font-weight: 400;
    color: $black;
  }
}
</style>


