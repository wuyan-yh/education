import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    token: [],
    tag: [],
    show: false,
    aside: true
  },
  mutations: {
    token(state, data) {
      console.log(data);
      state.token.push(data);
    },
    tag(state, data) {
      state.tag.push(data);
      console.log(state.tag);
    },
    tagdel(state, i) {
      state.tag.splice(i, 1);
    }
  },
  actions: {},
  modules: {}
});
