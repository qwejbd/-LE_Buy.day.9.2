<template>
  <div class="top">
    <van-swipe-cell v-for="(item, index) in CartItem" :key="index">
      <van-card
        num="2"
        price="0"
        desc="描述信息"
        :title="item.title"
        class="goods-card"
        :thumb="item.image"
      >
        <template #tag>
          <input type="checkbox" />
        </template>
        <template #num>
          <span>2</span>
          <van-stepper v-model="num" v-show="isShow" />
        </template>
      </van-card>
      <template #right>
        <van-button
          square
          text="删除"
          type="danger"
          @click="dele(item.cart_id)"
          class="delete-button"
        />
      </template>
    </van-swipe-cell>
    <!-- ＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝ -->
    <div class="Footer">
      <div>
        <input type="checkbox" />
      </div>
      <div>
        价格
      </div>
      <div>
        <!-- <van-button round type="info" size="normal">圆形按钮</van-button> -->
      </div>
      <!-- <van-submit-bar :price="3050" button-text="提交订单" @submit="onSubmit">
        <template #tip>
          你的收货地址不支持同城送,
          <span @click="onClickEditAddress">修改地址</span>
        </template>
      </van-submit-bar> -->
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      num: "",
      isShow: false,
    };
  },
  computed: {
    CartItem: function() {
      return this.$store.state.Cart.CartItem;
    },
  },
  mounted() {
    console.log(this.CartItem);
  },
  methods: {
    dele(cart_id) {
      console.log(cart_id);
      this.$store.dispatch("DEL_SHOP", cart_id);
    },
    onSubmit() {},
    onClickEditAddress() {},
  },
};
</script>

<style lang="scss" scoped>
.top {
  margin-top: 100px;
}
.goods-card {
  margin: 0;
  background-color: white;
}

.delete-button {
  height: 100%;
}
.Footer {
  position: fixed;
  bottom: 100px;
  width: 100%;
  height: 94px;
  background: palevioletred;
  z-index: 999999;
  display: flex;
  justify-content: space-around;
  &.Footer div {
    width: 30%;
    height: 94px;
    background: darkmagenta;
    text-align: center;
    line-height: 94px;
  }
}
</style>
