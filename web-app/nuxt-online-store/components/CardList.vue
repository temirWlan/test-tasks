<template>
  <div v-if="list.length" class="container">
    <ul class="card-list list">
      <Card v-for="card of cards" :key="card.id" :card="card" />
    </ul>
    <div class="btns">
      <button class="btn" :disabled="currentPage === 0" @click="showPrevPage">
        Предыдущая
      </button>
      <button
        class="btn"
        :disabled="currentPage >= pagesCount - 1"
        @click="showNextPage"
      >
        Следующая
      </button>
    </div>
  </div>
  <Spinner v-else />
</template>

<script>
import { mapGetters } from 'vuex';
import Card from '@/components/Card';
import Spinner from '@/components/Spinner';
export default {
  name: 'CardList',
  component: {
    Card,
    Spinner,
  },
  computed: {
    ...mapGetters({
      list: 'card/list',
      pagesCount: 'card/pagesCount',
      cardsCount: 'card/cardsCount',
      currentPage: 'card/currentPage',
    }),
    cards() {
      const start = this.currentPage * this.cardsCount;
      const end = start + this.cardsCount;

      return this.list.slice(start, end);
    },
  },
  async mounted() {
    await this.$store.dispatch('card/fetchCardsData');
    await this.$store.dispatch('card/setStateOptions');
  },
  methods: {
    showPrevPage() {
      const n = this.currentPage - 1;
      this.$store.dispatch('card/setCurrentPage', n);
    },
    showNextPage() {
      const n = this.currentPage + 1;
      this.$store.dispatch('card/setCurrentPage', n);
    },
  },
};
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.btns {
  margin-top: 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.btn {
  padding: 10px 20px;
  cursor: pointer;
  color: $dark;
  border: none;
  outline: none;
  border-radius: 8px;
  &:not(:first-child) {
    margin-left: 20px;
  }
}
.card-list {
  width: 100%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-column-gap: 16px;
  grid-template-rows: repeat(auto, 1fr);
  grid-row-gap: 16px;
}
@media (max-width: 1200px) {
  .card-list {
    grid-template-columns: repeat(3, 1fr);
  }
}
@media (max-width: 992px) {
  .card-list {
    margin-top: 30px;
  }
}
@media (max-width: 800px) {
  .card-list {
    grid-template-columns: repeat(2, 1fr);
  }
}
@media (max-width: 460px) {
  .card-list {
    margin: 30px auto 0 auto;
    width: 90%;
    grid-template-columns: repeat(1, 1fr);
  }
}
@media (max-width: 420px) {
  .card-list {
    width: 100%;
  }
}
</style>
