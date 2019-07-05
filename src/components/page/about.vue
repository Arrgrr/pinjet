<template>
  <div class="about">
    <div class="banner"></div>
    <div class="content_container">
      <div class="concept">
        <img src="https://arrgrr.github.io/proMask/static/core_value.png" alt="core_value" />
      </div>
      <div class="article">
        <h1>公司理念</h1>
        <p>本公司為專業生產半導體測試Socket、Pin、生產治具、測試板設計、製造與 測試機台電路板維修之廠商。針對各個領域培養專業工程人員，並配合客戶各種不同的需求發展先進的產品與技術，以迎合市場日趨嚴苛的要求。</p>
        <p>這幾年在團隊合作努力下，以品質、技術、創新與服務為導向建立不少成功案例並贏得客戶青睞。在socket 領域上我們有最新POP(Package on Package)產品提供手機晶片測試，並提供各式類型socket pin 供客戶選擇以達到最佳測試效果。也積極開發各式Handler的change kit與生產工具來滿足量產需求，在客戶成本考量上提供各式ATE測試機台電路板維修來降低生產成本。另外也開發出不少PCB測試板(load board, probe card, burn-in board 等)以滿足工程與量產需求，進而達到完整測試解決方案(Total Solution)。</p>
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
<style lang="scss">
@import "./src/globalStyle";
.banner,
.content_container,
.concept,
.article {
  display: flex;
}
.about {
  flex-direction: column;
  background: url(https://arrgrr.github.io/proMask/static/BG_pattern.jpg) bottom
    left no-repeat;
}
.banner {
  min-width: 1080px;
  height: 275px;
  background: url(https://arrgrr.github.io/proMask/static/about_banner.jpg)
    center center;
  background-size: cover;
}

.content_container {
  min-width: 1080px;
  width: 1080px;
  align-self: center;
  flex: 1;
}

.concept {
  flex: 2;
  padding-top: $sl;
  margin-right: $sl;
  img {
    width: 374px;
    height: 337px;
  }
}

.article {
  flex: 4;
  flex-direction: column;
  line-height: 250%;
  padding-top: $sl;
  h1 {
    font-size: 48px;
    font-weight: 200;
  }
  p {
    font-size: 18px;
    font-weight: 200;
  }
}
</style>


