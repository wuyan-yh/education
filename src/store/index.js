import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    token: [],
    tag: []
  },
  mutations: {
    token(state, data) {
      console.log(data);
      state.token.push(data);
    },
    tag(state, data) {
      state.tag.push(data);
    }
  },
  actions: {},
  modules: {}
});
