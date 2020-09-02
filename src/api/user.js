import api from "./index";
// axios
import request from "@/utils/request";

// 轮播图
export function Swiper(data) {
  return request({
    url: api.HomeSwiper,
    method: "get",
    data,
  });
}
// 首页分类
export function HomeList(params) {
  return request({
    url: api.SwiperList,
    method: "get",
    params,
  });
}
// 首页商品详情
export function HomeDel(data) {
  return request({
    url: api.details,
    method: "get",
    data,
  });
}
// 分类页面一级分类
export function classify(data) {
  return request({
    url: api.classifyOne,
    method: "get",
    data,
  });
}
// 分类页面二级分类
export function classify2(params) {
  return request({
    url: api.classIfyTwo,
    method: "get",
    // data,
    params,
  });
}
// 验证手机号时候成功
export function LoginPhone(params) {
  return request({
    url: api.Phone,
    method: "get",
    // params: {
    params,
    // },
  });
}
// 验证用户名是否可用
export function LoginUser(params) {
  return request({
    url: api.UserName,
    method: "get",
    params,
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
// //  注册接口
// export function Register(params) {
//   return request({
//     url: api.Reg,
//     method: "post",
//     params,
//   });
// }
//  登录接口
// export function Login(params) {
//   return request({
//     url: api.LOGIN,
//     method: "post",
//     params,
//   });
// }
// ===============================================================
// 登录
export function login(data) {
  return request({
    url: api.Login,
    method: "post",
    data,
  });
}

// 用户信息 post 方法
export function getUserInfo(data) {
  return request({
    url: api.UserInfo,
    method: "post",
    data,
    hideloading: true,
  });
}

// 用户名称 get 方法
export function getUserName(params) {
  return request({
    url: api.UserName,
    method: "get",
    params,
    hideloading: true,
  });
}
