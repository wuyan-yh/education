import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    token: []
  },
  mutations: {
    token(state, data) {
      console.log(data);
      state.token.push(data);
    }
  },
  actions: {},
  modules: {}
});
