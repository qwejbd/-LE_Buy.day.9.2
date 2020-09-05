<template>
  <div>
    <van-tabs title-active-color="red" line-height="0px" scrollspy sticky>
      <template #nav-left>
        <span @click="back">
          <img src="../../assets/img/common/back.png" class="back" alt="" />
        </span>
      </template>
      <van-tab title="商品 ">
        <div>
          <img width="100%" :src="content1.goodsLogo" alt />
          <p style="font-size:18px;">{{ content1.goodsName }}</p>
          <p>
            <span style="color:#FF90A5;font-size:20px;"
              >￥{{ content1.goodsPrice }}</span
            >
            <s>{{ content1.goodsOldPrice }}</s>
          </p>
        </div> </van-tab
      >s
      <van-tab title="评论 ">
        <div class="yanchibipei">
          <div v-for="(item, index) in icondata" :key="index">
            <img :src="item.icon" width="10px" alt="" />
            <span style="font-size:1px">{{ item.name }}</span>
          </div>
        </div>
        <van-cell-group>
          <van-cell title="买家评价" value="更多" />
        </van-cell-group>
        <van-divider />
        <div class="comment2">
          <!-- <img :src="coment.comment_body.user_img" class="conmmentImg" alt="" />
          <p>{{ coment.comment_body.content }}</p>
          <p>{{ coment.comment_body.modified_time }}</p> -->
          <!-- <img
            :src="coment1.comment_body.user_img"
            class="conmmentImg"
            alt=""
          />
          <p>{{ coment1.comment_body.content }}</p> -->
        </div>
        <p>1</p>
        <div class="merchant">
          <div class="mer">
            <span> {{ content2.shopName }}</span>
            <img :src="content2.shopLogo" width="30px" height="20px" alt="" />
          </div>
          <p>{{ content2.shopCpy }}</p>
          <p>{{ content2.shopAre }}</p>
          <p>{{ content2.creteTime }}</p>
        </div>
      </van-tab>
      <van-tab title="详情 ">
        <div class="myhtml" v-html="content1.goodsIntroduce"></div>
      </van-tab>
      <van-tab title="推荐 "> 内容 </van-tab>
    </van-tabs>
    <!-- 最下面的购买商品的导航 -->
    <FooterTaber @goCart="goCart" @cart="cart"></FooterTaber>
    <!-- 返回顶部的组件 -->
    <ScrollTop></ScrollTop>
  </div>
</template>

<script>
import { HomeDel } from "@/api/user";
import FooterTaber from "../../components/Home/FooterTaber";
import ScrollTop from "../../components/ScrollTop";

export default {
  components: {
    FooterTaber,
    ScrollTop,
  },
  data() {
    return {
      content1: {},
      icondata: [],
      content2: {},
      // num: 1,
      id: "",
    };
  },
  methods: {
    back() {
      window.history.back();
    },
    goCart() {
      // alert("d");
      this.$store.dispatch("ADDCART", this.id);
      this.$store.dispatch("GAINCART");
    },
    cart() {
      // alert("wd")
      this.$router.push({
        name: "Cart",
      });
    },
  },
  mounted() {
    // console.log(content1.goodsPrice);

    let id = this.$route.query.goodsId;
    HomeDel({
      goodsId: id,
    }).then((res) => {
      // console.log(res.data);
      this.content1 = res.data[0];
      this.content2 = res.data[1];
      this.content3 = res.data[3][0];
      this.icondata = res.data[2];
      // this.coment = res.data[3][0];
      // this.coment1 = res.data[3][1];
    });
  },
};
</script>

<style scoped>
.header {
  width: 100%;
  height: 100px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background: white;
}
.header span {
  font-size: 30px;
}
.myhtml {
  margin-top: 100px;
}
.myhtml >>> img {
  width: 100%;
}
.xiaoliang {
  margin-top: 10px;
  width: 100%;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: space-around;
}
.yanchibipei {
  margin-top: 40px;
  width: 100%;
  height: 100px;
  display: flex;
  justify-content: space-around;
  align-items: center;
}
.yanchibipei img {
  vertical-align: middle;
}
.merchant {
  width: 100%;
  height: 200px;
}
.mer {
  display: flex;
}
.comment {
  width: 100%;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0px 50px;
  box-sizing: border-box;
}
.comment2 {
  width: 100%;
  height: 400px;
  background: darkkhaki;
}
.yun {
  width: 100%;
  display: flex;
}
.conmmentImg {
  width: 90px;
  height: 90px;
  border-radius: 50%;
}
.back {
  width: 40px;
  height: 40px;
  margin-top: 25px;
  margin-left: 25px;
}
</style>
