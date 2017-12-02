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
  increment() {
    state.count += 1;
  },
  decrement() {
    state.count -= 1;
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
  namespaced: true,
};
