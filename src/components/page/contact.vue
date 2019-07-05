<template>
  <div class="contact">
    <div class="contact_container">
      <div class="sec">
        <h2>您的需求，我們的第一優先！</h2>
        <div class="form">
          <input class="detail" placeholder="聯絡人姓名及稱謂" type="text" />
          <input class="detail" placeholder="公司" type="text" />
          <input class="detail" placeholder="聯絡電話" type="tel" name id />
          <input class="detail" placeholder="聯絡 Email" type="email" name id />
          <textarea class="detail_body" placeholder="諮詢事宜" name id cols="30" rows="5"></textarea>
          <input class="btn" type="submit" mailto="service@sun-jet.com.co" value="送出業務詢問表單" />
        </div>
      </div>
      <div class="sec">
        <h2>三俱精密股份有限公司</h2>
        <div class="map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d678.4434234246744!2d120.92498260393273!3d24.708111789588276!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x34684b6225ff1d8b%3A0xf886d4c681b8f1a!2zMzUw6IuX5qCX57ij56u55Y2X6Y6u5Lit6I-v6LevODjomZ9D5qOf!5e0!3m2!1szh-TW!2stw!4v1562152168590!5m2!1szh-TW!2stw"
            width="100%"
            height="200"
            frameborder="0"
            style="border:0"
            allowfullscreen
          ></iframe>
        </div>
        <ul class="info">
          <li>竹南辦公室 苗栗縣竹南鎮中華路88號C棟</li>
          <li>TEL：037-689526</li>
          <li>FAX：037-689527</li>
          <li>Email：service@sun-jet.com.co</li>
        </ul>
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
.contact_container,
.sec,
.form,
.map,
.info {
  display: flex;
}

.contact {
  background: url(https://arrgrr.github.io/proMask/static/BG_pattern.jpg) bottom
    left no-repeat;
  justify-content: center;
}

.contact_container {
  width: 1366px;
}
.sec {
  flex: 1;
  flex-direction: column;
  padding: $sl * 2 $sl;
}
.form {
  flex-direction: column;
}
.detail {
  height: 40px;
  margin: $ss 0;
  padding: $sxs $ss;
  font-size: 18px;
}

.detail_body {
  margin: $ss 0 $sm;
  font-size: 18px;
  padding: $sxs $ss;
}

.btn {
  height: 60px;
  background: linear-gradient(90.08deg, #d72903 0.01%, #ff6b00 99.99%);
  box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.25);
  border-radius: 100px;
  color: $white;
  font-size: 24px;
  font-weight: 200;
}

.info {
  flex-direction: column;
  list-style: none;
  padding: 0;
  li {
    padding: $ss 0;
    color: $black80;
  }
}

h2 {
  font-size: 36px;
  font-weight: 200;
}
</style>

