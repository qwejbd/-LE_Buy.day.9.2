<template>
  <div>
    <van-sticky>
      <div class="wrap">
        <div class="title">
          商品分类
        </div>
        <van-search v-model="value" placeholder="请输入搜索关键词" />
      </div>
    </van-sticky>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value: "",
    };
  },
};
</script>

<style lang="scss" scoped>
.wrap {
  width: 100%;
  height: 185px;
  text-align: center;
  background: gainsboro;
  z-index: 9;
  .title {
    width: 100%;
    height: 70px;
    background: white;
    font-size: 40px;
  }
}
</style>
