<template>
  <div class="header_bg">
    <header class="header_container">
      <div class="logo">
        <img src="https://arrgrr.github.io/proMask/static/logo.png" alt="三俱精密" />
      </div>
      <div class="btn_group">
        <router-link class="navBtn" @click="isOpen = true" to="/index">首頁</router-link>
        <router-link class="navBtn" @click="isOpen = true" to="/about">關於品捷</router-link>
        <router-link class="navBtn" @click="isOpen = true" to="/services">產品列表</router-link>
        <router-link class="navBtn" @click="isOpen = true" to="/contact">聯絡我們</router-link>
        <router-link class="navBtn_search" v-if="isOpen == false" to="/search">
          <div @click="isOpen = true">
            <font-awesome-icon class="icon" :icon="['fal', 'search']" />
          </div>
        </router-link>
        <a class="navBtn_search" v-if="isOpen == true" @click="$router.go(-1),isOpen = false">
          <font-awesome-icon class="icon" :icon="['fal', 'times']" />
        </a>
        <a class="navBtn_search">En</a>
      </div>
    </header>
  </div>
</template>


<script>
export default {
  data() {
    return {
      isOpen: false
    };
  },
  methods: {
    openSearch() {
      this.isOpen = false;
    }
  }
};
</script>
<style lang="scss" scoped>
@import "./src/globalStyle";
.header_bg {
  justify-content: center;
  height: 80px;
}
.header_container {
  display: flex;
  width: 1470px;
  min-width: 1080px;
}
.logo {
  display: flex;
  flex: 1;
  margin: 15px 0 0 150px;
}
.logo img {
  width: 260px;
  height: 72px;
}

.btn_group {
  display: flex;
  flex: 4;
  justify-content: flex-end;
}

.navBtn {
  color: $black60;
  text-decoration: none;
  align-items: center;
  display: flex;
  padding: 0 16px;
  height: 80px;
  box-sizing: border-box;
  &:hover {
    color: $black;
    border-bottom: $fire solid 3px;
    transition: 300ms;
    font-weight: bold;
  }
}

.navBtn_search {
  align-items: center;
  justify-content: center;
  margin-top: 18px;
  display: flex;
  border: 1px solid $black20;
  width: 32px;
  height: 32px;
  border-radius: 100px;
  cursor: pointer;
  .icon {
    font-size: 16px;
  }
}
</style>


