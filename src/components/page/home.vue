<template>
  <div class="home">
    <div class="banner">
      <div class="slogan">
        <p id="slogan1">專業工程規劃</p>
        <p id="slogan2">品質永遠堅持</p>
        <p id="slogan3">安全施工管理</p>
      </div>
    </div>
    <div class="item_container">
      <div class="service_block">
        <img src="https://arrgrr.github.io/proMask/static/service01.png" class="service_img" />
        <p class="service_title">辦公室規劃設計工</p>
      </div>
      <div class="service_block">
        <img src="https://arrgrr.github.io/proMask/static/service02.png" class="service_img" />
        <p class="service_title">廠務各式修改維修工程</p>
      </div>
      <div class="service_block">
        <img src="https://arrgrr.github.io/proMask/static/service03.png" class="service_img" />
        <p class="service_title">專案廠房建置工程</p>
      </div>
      <div class="service_block">
        <img src="https://arrgrr.github.io/proMask/static/service04.png" class="service_img" />
        <p class="service_title">無塵室產線各式加工件製品</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  }
};
</script>

<style lang="scss" scoped>
@import "./src/globalStyle";
.banner,
.item_container,
.service_block,
.service_img,
.service_title {
  display: flex;
}

.home,
.service_block {
  flex-direction: column;
}

.item_container {
  justify-content: space-around;
  padding: 60px 120px 0;
  width: 1200px;
  min-width: 960px;
  align-self: center;
}

.service_block {
  align-items: center;
}

.service_img {
  width: 200px;
  height: 200px;
}

.service_title {
  font-size: 20px;
  font-weight: light;
  color: $black80;
}
.banner {
  height: 500px;
  background: url(https://arrgrr.github.io/proMask/static/banner.jpg) top center
    no-repeat;
  justify-content: center;
  background-size: cover;
}

.slogan,
.slogan p {
  display: flex;
}

.slogan {
  flex-direction: column;
  width: 1440px;
  min-width: 1080px;
  align-items: flex-end;
  justify-content: center;
  p {
    font-size: 36px;
    color: $white;
    font-weight: 900px;
    background: #fc2d00;
    padding: 8px 16px;
    text-shadow: 0 0 10px rgba(#000, 0.5);
    margin: 8px 32px;
  }
}

#slogan1 {
  margin-right: 64px;
}
#slogan2 {
  margin-right: 32px;
}
#slogan3 {
  margin-right: 0px;
}
</style>


