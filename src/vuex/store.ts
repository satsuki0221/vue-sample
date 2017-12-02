import Vuex from 'vuex';
import Vue from 'vue';
import test from '@/vuex/modules/test';

Vue.use(Vuex);

export type State = {
  count: number,
};

const state: State = {
  count: 0,
};
const actions = {
  increment({ commit }: any) {
    commit('increment');
  },
  decrement({ commit }: any) {
    commit('decrement');
  },
};
const getters = {};
const mutations = {
  increment(state: State) {
    state.count += 1;
  },
  decrement() {
    state.count -= 1;
  },
};

export default new Vuex.Store({
  state,
  getters,
  actions,
  mutations,
  modules: {
    test,
  },
});
