const api = {
  HomeSwiper: "/api/Home/getHomeREC", // 首页轮播图
  SwiperList: "/api/Home/getHomeShowGoods", // 首页分类列表
  details: "/api/Goods/GetGoodsInfo", // 详情
  classifyOne: "/api/Goods/getCatsTree", // 分类页面一级分类
  classIfyTwo: "/api/Goods/getCadGoods", // 分类二级分类
  Phone: "/api/Verify/GetPhone", // 验证手机号时候被验证
  UserName: "/api/Verify/LoginName", // 验证用户名
  PhonePsw: "/api/SMSCode/GetCode", // 获取手机验证码
  Hot: "/api/Goods/getSearchHot", //热搜关键词
  addCart: "/api/Cart/addCart", // 添加购物车
  gain: "/api/Cart/getCart", // 获取信息
  Del: "/api/Cart/DeleteCart", // 删除商品
  onSearch: "/api/Goods/getGoods", //搜索内容
};

export default api;
