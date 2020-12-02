<template>
  <ul v-if="items.length" class="cart__items">
    <CartItem v-for="item of items" :key="item.id" :item="item" />
  </ul>
</template>

<script>
import { mapGetters } from 'vuex';
import CartItem from '@/components/CartItem';
export default {
  name: 'CartItemList',
  components: {
    CartItem,
  },
  computed: {
    ...mapGetters({
      items: 'cart/items',
    }),
  },
};
</script>
