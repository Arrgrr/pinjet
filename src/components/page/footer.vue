<template>
  <div class="footer_bg">
    <div class="footer_container">
      <div class="company_title">
        <p>品捷精密股份有限公司</p>
        <p>Pin-Jet Microtech., Co, Ltd</p>
      </div>
      <div class="address">
        <p>總 部</p>
        <p>新竹縣竹北市嘉勤南路96號5樓之2</p>
        <p>+886-3-6572708</p>
      </div>
      <div class="address">
        <p>竹南辦公室</p>
        <p>苗栗縣竹南鎮中華路88號C棟</p>
        <p>+886-37-688378</p>
      </div>
      <div class="address">
        <p>聯絡我們</p>
        <p>service@pin-jet.com</p>
        <p>www.pin-jet.com</p>
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
@import "./src/reset";
.footer_bg {
  color: $black60;
  background: $white;
  height: 96px;
  justify-content: center;
}
.footer_container {
  display: flex;
  width: 1080px;
}

.company_title,
.address,
.address p,
.company_title p {
  display: flex;
}

.company_title,
.address {
  flex-direction: column;
  flex-wrap: wrap;
  padding: $sm 0;
}

.company_title {
  flex: 1;
  p {
    border-right: 1px solid $fire;
    padding: 2px 16px;
  }
}
.address {
  flex: 1;
  p {
    flex: 1;
    align-items: center;
  }
}
</style>



