<template>
  <ul class="select list">
    <SortPanelOption
      v-for="option of options"
      :key="option.id"
      :option="option"
    />
  </ul>
</template>

<script>
import SortPanelOption from '@/components/SortPanelOption';
export default {
  name: 'SortPanelOptionList',
  components: {
    SortPanelOption,
  },
  data() {
    return {
      options: [
        {
          id: 15,
          type: 'price',
          label: 'По цене',
        },
        {
          id: 17,
          type: 'rating',
          label: 'По популяности',
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.select {
  display: block;
  margin-top: 6px;
  width: 100%;
  padding: 8px 0 12px 0;
  box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.05);
  border-radius: 8px;
  background-color: #fff;
  position: absolute;
  z-index: 1;
}
</style>
