import Vue from "vue";
import Vuex from "vuex";
import Axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    pages: [],
    currentPage: 1,
  },
  getters: {
    page: (state) => state.pages.find((page) => page.id === state.currentPage),
  },
  mutations: {
    setPages(state, arr) {
      state.pages = arr;
    },
  },
  actions: {
    async loadPages({ commit }) {
      try {
        await Axios.get("./quiz.json").then((response) => {
          commit("setPages", response.data);
        });
      } catch (error) {
        console.log(error);
      }
    },
  },
});
