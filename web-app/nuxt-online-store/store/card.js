import { apiBase } from '@/store';

export const state = () => ({
  allList: [],
  list: [],
  pagesCount: 0,
  cardsCount: 12,
  sortType: 'price',
  currentPage: 0,
  activeCategory: 1,
});

export const actions = {
  async fetchCardsData({ state, commit }) {
    const res = await fetch(`${apiBase}/product`);

    if (!res.ok) {
      throw new Error(`Could not fetch data on ${apiBase}/product`);
    }

    const list = await res.json();
    commit('updateCards', list);
  },
  setStateOptions({ state, commit, rootGetters }) {
    let pagesCount = 0;

    commit('setActiveCategory', rootGetters['category/activeCategory']);
    commit('filterByCategory', state.activeCategory);

    pagesCount = Math.ceil(state.list.length / state.cardsCount);

    commit('sortList', state.sortType);
    commit('setPagesCount', pagesCount);
  },
  setCurrentPage({ commit }, pageNumber) {
    commit('setCurrentPage', pageNumber);
  },
};

export const mutations = {
  updateCards(state, list) {
    state.allList = list;
  },
  setPagesCount(state, count) {
    state.pagesCount = count;
  },
  setCardsCount(state, count) {
    state.cardsCount = count;
  },
  sortList(state, sortType) {
    state.sortType = sortType;
    state.list = [...state.list].sort((a, b) => b[sortType] - a[sortType]);
  },
  setActiveCategory(state, category) {
    state.activeCategory = category;
  },
  filterByCategory(state, category) {
    state.list = [...state.allList].filter((item) => {
      return item.category === category;
    });
    state.currentPage = 0;
  },
  setCurrentPage(state, pageNumber) {
    state.currentPage = pageNumber;
  },
};

export const getters = {
  allList(state) {
    return state.allList;
  },
  list(state) {
    return state.list;
  },
  pagesCount(state) {
    return state.pagesCount;
  },
  cardsCount(state) {
    return state.cardsCount;
  },
  sortType(state) {
    return state.sortType;
  },
  currentPage(state) {
    return state.currentPage;
  },
};
