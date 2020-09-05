import api from "./index";
// axios
import request from "@/utils/request";

// 轮播图
export function Swiper(data) {
  return request({
    url: api.HomeSwiper,
    method: "get",
    data,
    hideloading: false,
  });
}
// 首页分类
export function HomeList(params) {
  return request({
    url: api.SwiperList,
    method: "get",
    params,
    hideloading: false,
  });
}
// 首页商品详情
export function HomeDel(params) {
  return request({
    url: api.details,
    method: "get",
    params,
    hideloading: false,
  });
}
// 分类页面一级分类
export function classify(data) {
  return request({
    url: api.classifyOne,
    method: "get",
    data,
    hideloading: false,
  });
}
// 分类页面二级分类
export function classify2(params) {
  return request({
    url: api.classIfyTwo,
    method: "get",
    params,
    hideloading: false,
  });
}
// 验证手机号时候成功
export function LoginPhone(params) {
  return request({
    url: api.Phone,
    method: "get",
    params,
    hideloading: false,
  });
}
// 验证用户名是否可用
export function LoginUser(params) {
  return request({
    url: api.UserName,
    method: "get",
    params,
    hideloading: false,
  });
}
// 获取手机验证码
export function PhonePwd(params) {
  return request({
    url: api.PhonePsw,
    method: "get",
    params,
  });
}
//  热搜关键词
export function SearchHot(params) {
  return request({
    url: api.Hot,
    method: "get",
    params,
  });
}
//  搜索内容
export function onSearch(params) {
  return request({
    url: api.onSearch,
    method: "get",
    params,
  });
}
// 添加购物车
export function addcart(params) {
  return request({
    url: api.addCart,
    method: "post",
    params,
  });
}
// 获取购物车信息
export function GainCart(data) {
  return request({
    url: api.gain,
    method: "get",
    data,
    hideloading: false,
  });
}
// 删除商品
export function DelShop(params) {
  return request({
    url: api.Del,
    method: "patch",
    params,
    hideloading: false,
  });
}

// ===============================================================
