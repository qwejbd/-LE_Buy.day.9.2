<template>
  <div>
    <van-tabs line-height="0px" title-active-color="#EB4868" scrollspy sticky>
      <template #nav-left>
        <span> 返回</span>
      </template>
      <van-tab title="商品">
        <!-- 商品商品主图 -->
        <div v-for="(item, index) in details" :key="index">
          <img :src="item.goodsLogo" class="Image" alt="" />
          <p>{{ item.goodsName }}</p>
          <p> {{item.goodsOldPrice}} </p>
          <p>{{item.goodsPrice}} </p>
        </div>

        <!-- {{ details.goodsName }} -->
      </van-tab>
      <van-tab title="评论"> </van-tab>
      <van-tab title="详情"> </van-tab>
      <van-tab title="推荐"> </van-tab>
    </van-tabs>
  </div>
</template>

<script>
export default {
  mounted() {
    this.$store.dispatch("DETAILS", this.$route.query.goodsId);
  },
  computed: {
    details: function() {
      return this.$store.state.Del.details;
    },
  },
};
</script>
<style lang="scss" scoped>
.Image {
  width: 100%;
  height: 500px;
  // background: indianred;
}
</style>
