<template>
  <div class="panel">
    <span class="panel__caption">
      Сортировать по:&nbsp;
      <a class="panel__control" href="#" @click.prevent="toggleVisibility">
        {{ label ? label : 'цене' }}
      </a>
    </span>
    <SortPanelOptionList v-if="isVisible" />
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import SortPanelOptionList from '@/components/SortPanelOptionList';
export default {
  name: 'SortPanel',
  components: {
    SortPanelOptionList,
  },
  computed: {
    ...mapGetters({
      label: 'sortPanel/label',
      isVisible: 'sortPanel/visibility',
    }),
  },
  methods: {
    ...mapActions({
      toggleVisibility: 'sortPanel/toggleVisibility',
    }),
  },
};
</script>

<style lang="scss" scoped>
.panel {
  position: relative;

  &__caption {
    display: flex;
    align-items: flex-end;
    @include pt-regular;
    font-size: 16px;
    line-height: 21px;
    color: $dark;
  }

  &__control {
    display: flex;
    justify-content: space-between;
    align-items: center;
    @include pt-regular;
    font-size: 16px;
    line-height: 21px;
    color: $gray;
    text-decoration: none;
    &:after {
      margin-left: 4px;
      content: '';
      display: inline-block;
      width: 0;
      height: 0;
      border-left: 3px solid transparent;
      border-right: 3px solid transparent;
      border-top: 3px solid $gray;
    }
  }
}
</style>
