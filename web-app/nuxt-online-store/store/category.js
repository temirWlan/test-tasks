import { apiBase } from '@/store';

export const state = () => ({
  categories: [],
  activeCategory: 1,
});

export const actions = {
  async fetchCategories({ commit }) {
    const URL = `${apiBase}/product-category`;
    const res = await fetch(URL);

    if (!res.ok) {
      throw new Error(`Could not fetch on ${URL}`);
    }

    const categories = await res.json();
    commit('updateCategories', categories);
  },
  setActiveCategory({ state, commit }, category) {
    commit('setActiveCategory', category);
  },
};
export const mutations = {
  updateCategories(state, categories) {
    state.categories = categories;
  },
  setActiveCategory(state, category) {
    state.activeCategory = category;
  },
};
export const getters = {
  categories(state) {
    return state.categories;
  },
  activeCategory(state) {
    return state.activeCategory;
  },
};
