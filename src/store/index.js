import Vue from "vue";
import Vuex from "vuex";
import getters from "./getters";
import app from "./modules/app";
import swiper from "./Home/swiper";
import homeList from "./Home/HomeList";
import Del from "./Home/Del";
import oneNav from "./Classify/oneNav";
import TwoNav from "./Classify/TwoNav";

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    app,
    swiper,
    homeList,
    Del,
    oneNav,
    TwoNav,
  },
  getters,
});

export default store;
