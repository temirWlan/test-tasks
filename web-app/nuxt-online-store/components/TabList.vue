<template>
  <div class="tabs">
    <ul v-if="categories.length" class="tabs__list list">
      <Tab
        v-for="category of categories"
        :key="category.id"
        :category="category"
      />
    </ul>
    <ul v-else class="tabs__list list">
      <Tab
        v-for="category of defaultCategories"
        :key="category.id"
        :category="category"
      />
    </ul>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import Tab from '@/components/Tab';
export default {
  name: 'TabList',
  components: {
    Tab,
  },
  data() {
    return {
      defaultCategories: [
        {
          id: 1,
          name: 'Рюкзаки',
          path: 'bags',
        },
        {
          id: 2,
          name: 'Футболки',
          path: 't-shirts',
        },
        {
          id: 3,
          name: 'Рубашки',
          path: 'shirts',
        },
      ],
    };
  },
  computed: {
    ...mapGetters({
      categories: 'category/categories',
    }),
  },
  async mounted() {
    await this.$store.dispatch('category/fetchCategories');
  },
};
</script>
<style lang="scss" scoped>
.tabs {
  flex: 1 1 auto;
  &__list {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }
}

@media (max-width: 992px) {
  .tabs {
    width: 80%;
    overflow-x: hidden;

    &__list {
      overflow-x: auto;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
    }
  }
}
</style>
