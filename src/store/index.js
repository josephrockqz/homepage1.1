import Vue from 'vue';
import Vuex from 'vuex';
import router from '../router/index.js';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    pagesVisited: 0
  },
  mutations: {
    INCREASE_PAGE_VISITED_BOOL(state) {
      state.pagesVisited++;
    }
  },
  actions: {
    pushPathToRouter({ commit }, { pathName }) {
      router.push({
        path: pathName
      })
      .catch(() => {
      });
      commit('INCREASE_PAGE_VISITED_BOOL');
    }
  },
  modules: {
  }
});
