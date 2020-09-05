import { addcart, GainCart, DelShop } from "../../api/user";
const Cart = {
  state: {
    CartItem: '',
  },
  mutations: {
    ADDCART() {},
    DEL_SHOP() {},
    GAINCART(state, item) {
      // state.CartItem = item;
    },
  },
  actions: {
    //添加商品
    ADDCART(context, id) {
      addcart({
        product_id: id,
      })
        .then((res) => {
          console.log(res);
          context.commit("ADDCART", id);
        })
        .catch((err) => {
          console.log(err);
        });
    },
    // 获取商品信息
    GAINCART(context) {
      GainCart({
        params: {
          // page: 10,
          // pageSize: 30,
        },
      })
        .then((res) => {
          console.log(res.data);
          context.commit("GAINCART", res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    },
    // 删除商品
    DEL_SHOP(context, cart_id) {
      DelShop({
        carid: cart_id,
      })
        .then((res) => {
          console.log(res);
          context.commit("DEL_SHOP");
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
export default Cart;
