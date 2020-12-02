export const state = () => ({
  isVisible: false,
  label: 'цене',
});

export const actions = {
  toggleVisibility({ state, commit }) {
    commit('toggleVisibility');
  },
  setLabel({ commit, rootGetters }) {
    commit('setLabel', rootGetters['card/sortType']);
  },
};

export const mutations = {
  toggleVisibility(state) {
    state.isVisible = !state.isVisible;
  },
  setLabel(state, sortType) {
    switch (sortType) {
      case 'price':
        state.label = 'цене';
        break;
      case 'rating':
        state.label = 'популярности';
        break;
      default:
        state.label = 'цене';
        break;
    }
  },
};

export const getters = {
  visibility(state) {
    return state.isVisible;
  },
  label(state) {
    return state.label;
  },
};
