<template>
  <li
    class="tab"
    :class="+category.id === activeCategory ? 'active-tab' : ''"
    :data-category="category.id"
  >
    <a href="#" @click.prevent="onClickCategory">
      {{ category.name }}
    </a>
  </li>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
export default {
  name: 'Tab',
  props: {
    category: {
      type: Object,
      default: () => {
        return {
          id: 0,
          name: 'Рюкзаки',
          // path: '/',
        };
      },
    },
  },
  data() {
    return {
      isActive: false,
    };
  },
  computed: {
    ...mapGetters({
      activeCategory: 'category/activeCategory',
    }),
  },
  methods: {
    toggleActiveState() {
      this.isActive = !this.isActive;
    },
    ...mapActions({
      setActiveCategory: 'category/setActiveCategory',
    }),
    onClickCategory(e) {
      const target = e.target;
      let category = 0;

      if (target.dataset.category) {
        category = +target.dataset.category;
      } else {
        category = +target.parentElement.dataset.category;
      }

      this.setActiveCategory(category);
      this.toggleActiveState();
      this.$store.dispatch('card/setStateOptions');
    },
  },
};
</script>

<style lang="scss" scoped>
.tab {
  transition: all 0.5s ease 0s;
  cursor: pointer;

  &:not(:first-child) {
    margin-top: 16px;
  }

  & a {
    @include pt-regular;
    font-size: 16px;
    line-height: 21px;
    color: $lightGray;
    text-decoration: none;
    white-space: nowrap;
  }
  &:hover a {
    color: $gray;
  }
}

.active-tab a {
  color: $dark;
  text-decoration: underline;
  &:hover {
    color: $dark;
  }
}

@media (max-width: 768px) {
  .tab {
    &:not(:first-child) {
      margin-top: 0;
      margin-left: 30px;
    }
  }
}
</style>
