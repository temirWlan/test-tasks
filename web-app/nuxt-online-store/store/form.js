export const state = () => ({
  userData: [],
  isSent: false,
});

export const actions = {
  addToUserData({ commit }, data) {
    commit('addToUserData', data);
  },
};

export const mutations = {
  addToUserData(state, data) {
    state.userData = [...state.userData, data];
    state.isSent = true;
  },
};

export const getters = {
  userData(state) {
    return state.userData;
  },
  isSent(state) {
    return state.isSent;
  },
};
