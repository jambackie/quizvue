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
    getPage: (state) =>
      state.pages.find((page) => page.id === state.currentPage),
    getMaxPage: (state) =>
      Math.max.apply(
        null,
        [...state.pages].map((el) => el.step)
      ),
  },

  mutations: {
    setPages(state, arr) {
      state.pages = arr;
    },
    setCurrentPage(state, num) {
      state.currentPage = num;
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
