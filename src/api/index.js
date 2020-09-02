const api = {
  // Login: '/user/login',
  // UserInfo: '/user/userinfo',
  // UserName: '/user/name'
  HomeSwiper: "/api/Home/getHomeREC", // 首页轮播图
  SwiperList: "/api/Home/getHomeShowGoods", // 首页分类列表
  details: "/api/Goods/GetGoodsInfo", // 详情
  classifyOne: "/api/Goods/getCatsTree", // 分类页面一级分类
  classIfyTwo: "/api/Goods/getCadGoods", // 分类二级分类
  Phone: "/api/Verify/GetPhone", // 验证手机号时候被验证
  UserName: "/api/Verify/LoginName", // 验证用户名
  PhonePsw: "/api/SMSCode/GetCode", // 获取手机验证码
  // Reg: "/api/LoginPage/AddLogin", // 注册接口
  // LOGIN: "/api/LoginPage/Login", // 登录接口
};

export default api;
