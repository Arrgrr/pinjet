<template>
  <div class="search_box">
    <div class="search_container">
      <div class="input_container">
        <font-awesome-icon class="arrow" :icon="['fal', 'search']" />
        <input class="search_input" type="text" v-model="filterInput" placeholder="請輸入搜尋內容" />
      </div>
      <div class="list_container">
        <div class="list_column">
          <h2>項目細項</h2>

          <template v-for="item in filterArray">
            <router-link
              class="link_item"
              to="/services/service03"
              v-if="item.name != 0"
              :key="item.index"
            >{{item.name}}</router-link>
          </template>
        </div>
        <div class="list_column">
          <h2>工程實績</h2>

          <template v-for="item in filterArray">
            <router-link
              class="link_item"
              to="/services/service03"
              v-if="item.project != 0"
              :key="item.index"
            >{{item.project}}</router-link>
          </template>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      filterInput: "",
      list: [
        { name: "項目be", project: 0, goto: "/" },
        { name: "項目de", project: 0 },
        { name: "工程項目cc", project: 0 },
        { name: "工程項目ab", project: 0 },
        { name: "項目af", project: 0 },
        { name: 0, project: "工程實績eee" },
        { name: 0, project: "工程實績ddd" },
        { name: 0, project: "工程實績ccc" },
        { name: 0, project: "工程實績bbb" },
        { name: 0, project: "工程實績aaa" }
      ]
    };
  },
  computed: {
    filterArray: function() {
      var vm = this;
      return vm.list.filter(function(item) {
        if (item.name != 0 || null) {
          return item.name.match(vm.filterInput);
        } else if (item.project != 0 || null) {
          return item.project.match(vm.filterInput);
        }
      });
    }
  }
};
</script>
<style lang="scss">
@import "./src/globalStyle";
.search_box {
  justify-content: center;
}
.search_container,
.search_input,
.list_column,
.list_container,
.input_container,
.gotoPage {
  display: flex;
}

.search_container {
  width: 1080px;
  flex-direction: column;
  padding-top: $sl * 2;
}

.input_container {
  border-bottom: 2px solid $black80;
}

.search_input {
  height: 80px;
  outline: none;
  flex: 1;
  border: 0;
  font-size: 48px;
  font-weight: 100;
}
.list_container {
  flex-direction: row;
  padding-top: $sm;
}

.list_column {
  flex-direction: column;
  flex: 1;
  padding: 0 $sm;
  h2 {
    font-style: normal;
    font-weight: 300;
    font-size: 36px;
    border-bottom: 1px solid $fire;
  }
}

.link_item {
  text-decoration: none;
  padding: $ss 0;
  font-weight: 300;
  font-size: 24px;
  color: $black60;
  transition: 200ms;
  &:hover {
    color: $black;
  }
}

.arrow {
  font-size: 28px;
  align-self: center;
  margin-right: $sms;
}
</style>
