<template>
  <div>
    <HomeTop></HomeTop>
    <Swiper></Swiper>
    <SwiperList></SwiperList>
    <HomeClissify></HomeClissify>
    <ScrollTop></ScrollTop>
  </div>
</template>

<script>
import HomeTop from "../../components/Home/HomeTop";
import Swiper from "../../components/Home/Swiper";
import SwiperList from "../../components/Home/SwiperList";
import HomeClissify from "../../components/Home/HomeClissify";
import ScrollTop from "../../components/ScrollTop";
export default {
  components: {
    Swiper,
    HomeTop,
    SwiperList,
    HomeClissify,
    ScrollTop,
  },
};
</script>

<style lang="scss" scoped></style>
