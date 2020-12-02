<template>
  <li class="option" :data-type="option.type" @click="onClickOption">
    {{ option.label }}
  </li>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
export default {
  name: 'SortPanelOption',
  props: {
    option: {
      type: Object,
      default: () => {
        return {
          id: Math.random(),
          type: 'price',
          label: 'Цене',
        };
      },
    },
  },
  computed: {
    ...mapGetters({
      list: 'card/list',
      sortType: 'card/sortType',
    }),
  },
  mounted() {
    this.$store.dispatch('sortPanel/setLabel');
  },
  methods: {
    ...mapActions({
      toggleVisibility: 'sortPanel/toggleVisibility',
    }),
    sortList(e) {
      const target = e.target;
      const type = target.dataset.type;
      this.$store.commit('card/sortList', type);
    },
    setLabel(e) {
      this.$store.dispatch('sortPanel/setLabel');
    },
    onClickOption(e) {
      this.sortList(e);
      this.setLabel(e);
      this.toggleVisibility();
    },
  },
};
</script>

<style lang="scss" scoped>
.option {
  padding: 4px 0 4px 12px;
  transition: all 0.5s ease 0s;
  cursor: pointer;
  @include pt-regular;
  font-size: 14px;
  line-height: 18px;
  color: $lightGray;
  text-decoration: none;
  &:hover {
    background-color: #f8f8f8;
    color: $dark;
  }
}
</style>
