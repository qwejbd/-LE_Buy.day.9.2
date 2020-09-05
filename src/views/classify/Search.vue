<template>
  <div>
    <van-nav-bar
      title="商品搜索"
      left-arrow
      @click-left="back"
      color="black"
    ></van-nav-bar>
    <!-- ================================================= -->
    <van-search
      v-model="Search"
      show-action
      label="商品名称"
      placeholder="请输入搜索关键词"
      @keydown.enter="onSearch"
    >
      <template #action>
        <div @click="onSearch">搜索</div>
      </template>
    </van-search>
    <!-- ================================================================ -->
    <van-divider>全网热搜</van-divider>
    <div class="Wrap">
      <div v-for="(item, index) in search" :key="index" class="box">
        <span @click="goComenter(item)">
          {{ item }}
        </span>
      </div>
    </div>
    <!-- 搜索历史 -->
    <!-- ================================================================ -->
    <div v-show="history">
      <van-divider>搜索历史</van-divider>
    </div>
  </div>
</template>

<script>
// import { mapState, mapGetters, mapActions, mapMutations } from "vuex";
export default {
  data() {
    return {
      Search: "",
      history: false,
    };
  },
  computed: {
    search: function() {
      return this.$store.state.Hot.search;
    },
  },

  methods: {
    back() {
      window.history.back();
    },
    goComenter(item) {
      console.log(item)
    },
    onSearch() {
      // alert("d")
      this.history = true;
      console.log(this.Search);
      this.$store.dispatch("MySearchConte", this.Search);
      this.$router.push({
        name: "searchConent",
      });
    },
  },
  mounted() {},
  created() {
    this.$store.dispatch("MY_SEARCH");
  },
};
</script>

<style lang="scss" scoped>
.Wrap {
  width: 80%;
  margin: 0 auto;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  .box {
    margin: 10px 10px 10px 10px;
    border: 1px solid #999999;
  }
}
</style>
