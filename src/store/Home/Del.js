import { HomeDel } from "@/api/user.js";
const Del = {
  state: {
    details: [],
  },
  mutations: {
    DETAILS(state, item) {
      state.details = [...item]
    },
  },
  actions: {
    DETAILS(context, goodsId) {
      //   state.details = [...item];
      HomeDel({ goodsId: goodsId })
        .then((res) => {
          console.log(res.data);
          context.commit("DETAILS", res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
export default Del;
