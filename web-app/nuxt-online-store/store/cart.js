export const state = () => ({
  isVisible: false,
  items: [],
});

export const actions = {
  setVisibility({ state, commit }) {
    commit('setVisibility');
  },
  addToItems({ commit, rootGetters }, id) {
    commit({
      type: 'addToItems',
      arr: rootGetters['card/allList'],
      id,
    });
  },
  removeFromItems({ commit }, id) {
    commit('removeFromItems', id);
  },
  setItems({ commit }, items) {
    commit('setItems', items);
  },
};
export const mutations = {
  addToItems(state, { arr, id }) {
    const item = [...arr].find((elem) => elem.id === id);
    state.items = [...state.items, item];
  },
  removeFromItems(state, id) {
    const items = [...state.items];
    const idx = items.findIndex((elem) => elem.id === id);
    const start = items.slice(0, idx);
    const end = items.slice(idx + 1);
    state.items = [...start, ...end];
  },
  setVisibility(state) {
    state.isVisible = !state.isVisible;
  },
  setItems(state, items) {
    state.items = items;
  },
};
export const getters = {
  visibility(state) {
    return state.isVisible;
  },
  items(state) {
    return state.items;
  },
};
